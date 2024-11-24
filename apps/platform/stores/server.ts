export const useServerStore = defineStore('server', {
    state: () => ({
        servers: [],
        server: null
    }),
    actions: {
        loadServers: async function () {
            const { $api } = useNuxtApp()

            $api().servers.list().then(({ data }) => {
                this.servers = data.data
                console.log(this.servers)
            })
        },
        loadServer: async function (id: string) {
            const { $api } = useNuxtApp()

            $api().servers.get(id).then(({ data }) => {
                this.server = data
            })
        },
        createServer: async function (data) {
            const { $api } = useNuxtApp()

            $api().servers.post(data).then(({ data }) => {
                this.server = data
            })
        }
    }
})