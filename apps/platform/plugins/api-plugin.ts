import axios from 'axios';
import repositories from '../api';
import { nanoid } from 'nanoid';
import { useAlerts } from "~/stores/alert";

export default defineNuxtPlugin((app) => {
  const config = useRuntimeConfig();
  const alerts = useAlerts();
  const client = axios.create({
    baseURL: 'http://localhost:3333/api/v1',
    timeout: 10000,
    timeoutErrorMessage: 'Temps dépassé',
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-request-id': nanoid(),
    },
  });

  const router = useRouter()
  client.interceptors.request.use((config) => {

    const newConfig = { ...config };
    const token = useCookie('token');
    const route = useRoute()
    const keySet = token.value;
    const organizationId = useCookie('organization')

    if (token.value === undefined) return newConfig;

    if (keySet) {
      newConfig.headers.Authorization = `Bearer ${keySet}`;
    }

    newConfig.headers['x-organization-id'] = organizationId.value;
    if ('project-id' in route.query) {
      newConfig.headers['x-project-id'] = route.query['project-id'];
    }
    return newConfig;
  });

  client.interceptors.response.use(
    (response) => {
      if (response.status === 201) {
        alerts.add({
          title: 'La resource a bien été créé',
          type: 'success'
        });
      }

      return Promise.resolve(response);
    },
    (error) => {
      // const toast = useToast()
      // toast.error(error.response.data.message)
      //
      // if (localStorage.keySet === undefined || localStorage.keySet === 'undefined') return Promise.reject(error);
      //
      // const keySet = JSON.parse(localStorage.getItem('keySet'));
      // If Expired token



      if (error.response?.status === 401) {

          // if (keySet?.refresh_token && keySet?.access_token) {
              // If we have refresh token, we refresh
              // client
              //     .post('/auth/token', {
              //         grant_type: 'refresh_token',
              //         refresh_token: keySet.refresh_token,
              //         client_id: config.PASSPORT_CLIENT_ID,
              //         client_secret: config.PASSPORT_CLIENT_SECRET,
              //     })
              //     .then((response) => localStorage.setItem('keySet', response.data))
              //     .catch(() => localStorage.setItem('keySet', undefined ));
          // } else {
          //     Else we disconnect the user
              // localStorage.setItem('keySet', undefined)
          // }

          router.push('/auth/login')
          // navigateTo()

      }

      if (error) {
        if (error.response.status === 500) {
          alerts.add({
            title: error.response.data.name,
            description: error.response.data.message,
          });
        }
        if (error.response.status == 401) {
          alerts.add({
            title: 'Vous n\avez pas accès',
          });
        }
        if (error.response.status == 403) {
          alerts.add({
            title: 'Vous n\avez pas les authorisation',
          });
        }
        if (error.response.status == 422) {
          alerts.add({
            title: 'Les données soumises ne sont pas bonne',
          });
        }
      }

      return Promise.reject(error);
    },
  );

  return {
    provide: {
      api: () => {
        return {
          ...repositories(client, config),
        };
      },
    },
  };
});
