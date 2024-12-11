interface State {
    projects: any,
    project: any,
    organizations: any,
    organization: any,
    accounts: any,
    account: any,
}

export const useNavigationStore = defineStore('navigation', {
    state: (): State => ({
        projects: [],
        project: null,
        organizations: [],
        organization: null,
        accounts: [],
        account: null,
    }),
    actions: {
        loadProjects: async function () {
            const { $api } = useNuxtApp()

            return $api().projects.list().then((response) => {
                this.projects = response.data
                return response
            })
        },
        loadOrganizations: async function (queryParams: any = null) {
            const { $api } = useNuxtApp()

            console.log('load organizations')

            return $api().organizations.list(queryParams).then((response) => {
                this.organizations = response.data

                // this.organization = response.data[0]

                // this.accounts = this.organization.accounts
                // this.account = this.organization.accounts[0]
                // this.projects = this.account?.projects ? this.account.projects[0] : []
                // this.project = this.projects.length > 0 ? this.projects[0] : null

                return response
            })
        },
        selectOrganization: async function (id: string) {
            const { $api } = useNuxtApp()

            return $api().organizations.get(id, { includes: 'accounts.projects' }).then((response) => {
                this.accounts = response.accounts
                /**
                 * Default account and project selected mode.
                 */
                // this.account = response.accounts[0]
                // this.projects = this.account.projects ? this.account.projects.map((item) => ({...item, accountId: this.account.id})) : []
                // this.project = this.projects.length > 0 ? this.projects[0] : null

                /**
                 * No default account and project selected mode.
                 */
                this.account = null
                this.projects = []
                this.project = null
                this.organization = response
            })
        },
        selectAccount: async function (id: string) {
            const { $api } = useNuxtApp()

            return $api().accounts.get(id, { includes: 'projects' }).then((response) => {
                this.account = response
                this.projects = this.account.projects ? this.account.projects.map((item) => ({...item, accountId: this.account.id})) : []

                /**
                 * Default project selected mode.
                 */
                // this.project = this.projects.length > 0 ? this.projects[0] : null

                /**
                 * No default project selected mode.
                 */
                this.project = null
            })
        },
        selectProject: async function (id: any) {
            this.project = this.projects.find((item: any) => item.id === id)
        },
    }
})