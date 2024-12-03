export const useAccountStore = defineStore('account', {
    state: () => ({
        accounts: [],
        account: null
    }),
    actions: {
        loadAccounts: async (): Promise<void> => {
            const { $api } = useNuxtApp()

            $api().accounts.list().then(({ data }) => {
                this.accounts = data.data
            })
        },
        loadAccount: async (id: string): Promise<void> => {
            const { $api } = useNuxtApp()

            $api().accounts.get(id).then(({ data }) => {
                this.account = data
            })
        },
        createAccount: async function (data) {
            const { $api } = useNuxtApp()

            return $api().accounts.post(data).then(({ data }) => {
                this.account = data
            })
        }
    }
})