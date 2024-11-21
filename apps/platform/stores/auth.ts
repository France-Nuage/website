interface UserPayloadInterface {
  id?: string;
  lastname?: string;
  firstname?: string;
  email: string;
  password: string;
}


export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: null,
    loading: false,
    routes: []
  }),
  actions: {
    subscribe: async function (payload: UserPayloadInterface): Promise<void> {
      const { $api } = useNuxtApp()
      return $api().security.register(payload).then(({ data }) => {
        if (data.token) {
          const token = useCookie('token');
          token.value = data?.token?.token;
          this.user = {id: data?.id, email: data?.email}
          this.authenticated = true;
        }
      })
    },
    authenticate: async function ({ email, password }: UserPayloadInterface) {
      const { $api } = useNuxtApp()
      return $api().security.login({ email, password }).then(({ data }) => {
        if (data.token) {
          const token = useCookie('token');

          token.value = data?.token?.token;
          this.user = { id: data?.id, email: data?.email }
          this.authenticated = true;
        }
      })
    },
    logUserOut: function () {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null;
    },
  },
});