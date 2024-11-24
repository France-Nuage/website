<template>
  <nuxt-layout>
    <c-title>Créer une instance</c-title>

    <div class="flex flex-col gap-20 mt-8">
      <informations v-model="formData.name" />
      <services v-model="formData.service" />
      <zones v-model="formData.zone" />
      <instances v-model="formData.instance" />
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import CTitle from "~/components/CTitle.vue";
import Informations from "~/pages/instances/local-components/informations.vue";
import Instances from "~/pages/instances/local-components/instances.vue";
import Services from "~/pages/instances/local-components/services.vue";
import Zones from "~/pages/instances/local-components/zones.vue";

const formData = ref({
  name: '',
  type: '',
  service: '',
  instance: '',
  zone: ''
})
</script>


<style scoped>

</style>