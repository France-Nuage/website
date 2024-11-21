import { AxiosInstance } from 'axios';
import routes from './routes';

export interface AllowedLoginCredentials {
  username: string;
  password: string;
}

export interface AllowedRegisterCredentials {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const SecurityRepository = function (client: AxiosInstance, config: Record<any, any>) {
  return {
    login: async (credentials: AllowedLoginCredentials) =>
      client
        .post(`/auth/token`, {
          // client_id: config.PASSPORT_CLIENT_ID,
          // client_secret: config.PASSPORT_CLIENT_SECRET,
          // grant_type: 'password',
          ...credentials,
        })
        .then(({ data }) => {
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          token.value = data?.token?.token;
          return data;
        })
        .catch((e) => e.message),
    me: async () => {
      try {
        return await client.get('/auth/me');
      } catch (e) {
        throw new Error(e.message);
      }
    },
    register: async (credentials: AllowedRegisterCredentials) =>
      client.post('/auth/register', {
        lastname: credentials.firstname,
        firstname: credentials.firstname,
        email: credentials.email,
        password: credentials.password,
      }),
  };
};

export default SecurityRepository;
