<template>
  <nuxt-layout>
    <c-heading
      title="Vos instances"
      description="Query your data warehouse directly from your database, or third-party APIs using SQL"
      documentation-url=""
      to="/instances/create"
    />
    <div class="mt-5">
      <c-empty-state
        v-if="servers.length === 0"
        title="Aucune instances"
        description="Créer votre première instances à partir d'un de nos template"
      >
        <ul role="list" class="grid grid-cols-4 gap-6">
          <c-service-square name="Wordpress" logo="" alt="wordpress" to="/instances/create?template=wordpress" />
          <c-service-square name="Wordpress" logo="" alt="" to="/instances/create?template=wordpress" />
          <c-service-square name="Wordpress" logo="" alt="" to="/instances/create?template=wordpress" />
          <c-service-square name="Wordpress" logo="" alt="" to="/instances/create?template=wordpress" />
          <c-service-square name="Custom" logo="" alt="" to="/instances/create?template=custom" />
        </ul>
      </c-empty-state>
      <div v-else>
        {{ servers }}
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import CHeading from "~/components/CHeading.vue";
import CServiceSquare from "~/components/services/CServiceSquare.vue";

const { servers } = storeToRefs(useServerStore());
// const { loadServers } = useServerStore();

onMounted(() => {
  // loadServers();
  // setInterval(() => {
  //   loadServers();
  // }, 1000);
})
</script>

<style scoped>

</style>