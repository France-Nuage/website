<template>
  <c-header-selector
    :items="accounts.filter((_) => _.organizationId === organization.id).map((_) => ({ value: _.id, name: _.name }))"
    :selected="selected"
    type="account"
    @select="onAccountSelected"
  />
</template>

<script setup lang="ts">
import CHeaderSelector from "~/components/header/CHeaderSelector.vue";
const { account, accounts, organization } = storeToRefs(useNavigationStore())

const router = useRouter()
const route = useRoute()
const selected = computed(() => {
  return account.value ? { name: account.value.name, value: account.value.id } : null
})

const onAccountSelected = (id: string) => {
  router.push({ ...route, query: {
      organization: route.query.organization,
      account: id
    }
  });
}
</script>
