export default defineNuxtRouteMiddleware(async (to, from) => {

    const { loadOrganizations } = useOrganizationStore()
    const { organizations } = storeToRefs(useOrganizationStore());
    await loadOrganizations()

    if (organizations.value.length === 0) {
        console.log(to)
        abortNavigation()
        return navigateTo('/onboarding/new');
    }
})