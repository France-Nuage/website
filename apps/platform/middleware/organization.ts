export default defineNuxtRouteMiddleware(async (to, from) => {

    const { loadOrganizations } = useOrganizationStore()
    const { organizations } = storeToRefs(useOrganizationStore());
    await loadOrganizations()

    if (organizations.value.length === 0) {
        abortNavigation()
        return navigateTo('/onboarding/new');
    }
})