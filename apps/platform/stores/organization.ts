import Organization from "~/middleware/organization";

interface State {
    organizations: Array<any>;
    organization: any
}

export const useOrganizationStore = defineStore('organization', {
    state: (): State => ({
        organizations: [],
        organization: null
    }),
    actions: {
        loadOrganizations: async function() {
            const { $api } = useNuxtApp()
            return $api().organizations.list().then(({ data }) => {
                this.organizations = data.data
            })
        },
        loadOrganization: async function (id: string) {
            const { $api } = useNuxtApp()

            $api().organizations.get(id).then(({ data }) => {
                this.organization = data
            })
        },
        createOrganization: function (formData) {
            const { $api } = useNuxtApp()

            return $api().organizations.post(formData).then(({ data }) => {
                this.organization = data
                return data
            })
        }
    }
})