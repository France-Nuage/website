interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: null,
    loading: false,
    permission: null,
    routes: []
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const { $api } = useNuxtApp()
      const data = await $api().security.login({ email, password })
      // this.loading = pending;

      if (data.permission) {
        this.permission = data.permission
      }

      if (data.token) {
        const token = useCookie('token');
        const user = useCookie('user')

        token.value = data?.token?.token;
        user.value = { id: data?.id, email: data?.email, organizationId: data?.organizationId }
        this.user = user.value
        this.authenticated = true;

        if (data?.organizationId) {
          const organization = useCookie('organization')
          organization.value = data?.organizationId
          // const { loadOrganization } = useProjectStore()
          // await loadOrganization(data.organizationId)
        }
      }
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null;
    },
  },
});