<template>
  <c-header-selector
    v-if="account"
    :items="projects.filter((_) => _.accountId === account.id).map((_) => ({ value: _.id, name: _.name }))"
    type="project"
    :selected="selected"
    @select="onChangeProject"
  />
</template>

<script setup lang="ts">
import CHeaderSelector from "~/components/header/CHeaderSelector.vue";

const { projects, account, project } = storeToRefs(useNavigationStore())
const router = useRouter()
const route = useRoute()
const selected = computed(() => {
  return project.value ? {
    name: project.value.name,
    value: project.value.id
  } : null
})

const onChangeProject = (id) => {
  router.push({ ...route, query: {
      organization: route.query.organization,
      account: route.query.account,
      project: id,
    }
  });
}
</script>
