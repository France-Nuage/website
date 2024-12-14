<template>
  <c-header-selector
    :items="folders.filter((_) => _.organizationId === organization.id).map((_) => ({ value: _.id, name: _.name }))"
    :selected="selected"
    type="folder"
    @select="onFolderSelected"
  />
</template>

<script setup lang="ts">
import CHeaderSelector from "~/components/header/CHeaderSelector.vue";
const { folder, folders, organization } = storeToRefs(useNavigationStore())

const router = useRouter()
const route = useRoute()
const selected = computed(() => {
  return folder.value ? { name: folder.value.name, value: folder.value.id } : null
})

const onFolderSelected = (id: string) => {
  router.push({ ...route, query: {
      organization: route.query.organization,
      folder: id
    }
  });
}
</script>
