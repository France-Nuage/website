
function addQueryParams(to, params) {
    return {
        ...to,
        query: {
            ...to.query,
            ...params,
        },
    };
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const navigationStore = useNavigationStore();
    const { organization, account, project } = storeToRefs(navigationStore);
    const { selectOrganization, selectAccount, selectProject } = navigationStore;

    const storeOrganizationId = organization.value?.id || null;
    const storeAccountId = account.value?.id || null;
    const storeProjectId = project.value?.id || null;

    const toQuery = to.query || {};
    const fromQuery = from.query || {}

    let nextOrganizationId = toQuery.organization || storeOrganizationId;
    let nextAccountId = toQuery.account || storeAccountId;
        let nextProjectId = toQuery.project || storeProjectId;

    const queryParams = {};

    if (nextOrganizationId && nextOrganizationId !== toQuery.organization) {
        queryParams.organization = nextOrganizationId;
    }

    if (nextAccountId && nextAccountId !== toQuery.account && !(toQuery.organization !== fromQuery.organization)) {
        queryParams.account = nextAccountId;
    }

    if (nextProjectId && nextProjectId !== toQuery.project && !(toQuery.account !== fromQuery.account) && !(toQuery.organization !== fromQuery.organization)) {
        queryParams.project = nextProjectId;
    }

    const shouldRedirect = Object.keys(queryParams).length > 0;

    if (shouldRedirect) {
        return navigateTo(addQueryParams(to, queryParams));
    }

    // Charger les données dans le store après s'être assuré que l'URL est correcte
    if (nextOrganizationId) {
        await selectOrganization(nextOrganizationId);
    }

    if (nextAccountId && !(toQuery.organization !== fromQuery.organization)) {
        await selectAccount(nextAccountId);
    }

    if (nextProjectId && !(toQuery.account !== fromQuery.account) && !(toQuery.organization !== fromQuery.organization)) {
        await selectProject(nextProjectId);
    }
});
