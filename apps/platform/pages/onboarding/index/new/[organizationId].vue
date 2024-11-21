<template>
  <c-card class="w-11/12 md:w-8/12 lg:w-4/12 mx-auto mt-24">
    <c-card-header title="Créer un projet" />
    <c-card-body>
      <div class="flex flex-col gap-8">

        <div class="grid grid-cols-12 w-full">
          <c-label label="Nom" for="name" class="col-span-3" />
          <c-text-field v-model="formData.name" id="name" required name="name" type="text" class="col-span-9" description="Quel serait la meilleur description pour votre organisation ?" />
        </div>

      </div>
    </c-card-body>
    <c-card-footer>
      <div>
        <CButton size="sm" variant="filled" @click="router.go(-1)">Annulé</CButton>
      </div>
      <div class="flex items-center gap-4">
        <small class="text-gray-600">Vous pouvez renommer le nom du projet plus tard</small>
        <CButton size="sm" @click="onSubmit">Créer un projet</CButton>
      </div>
    </c-card-footer>
  </c-card>
</template>

<script setup lang="ts">
import CCardBody from "~/components/card/CCardBody.vue";
import CButton from "~/components/forms/CButton.vue";
import CCardFooter from "~/components/card/CCardFooter.vue";
import CCardHeader from "~/components/card/CCardHeader.vue";
import CCard from "~/components/card/CCard.vue";
import CTextField from "~/components/forms/CTextField.vue";
import CLabel from "~/components/forms/CLabel.vue";

const { createProject } = useProjectStore()
const { loadOrganization } = useOrganizationStore()
const { organization } = storeToRefs(useOrganizationStore());
const route = useRoute()
const router = useRouter();
const formData = ref({
  name: "",
})


onMounted(() => {
  loadOrganization(route.params.organizationId)
})


const onSubmit = () => {
  createProject({ ...formData.value, organization__id: organization.value.id }).then((response) => {
    router.push('/')
  })
}
</script>

<style scoped>

</style>