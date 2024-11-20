<template>
  <div class="bg-gray-50 h-screen">
    <c-breadcrumb logo :pages="pages" />
    <nuxt-page />
  </div>
</template>

<script lang="ts" setup>
import CBreadcrumb from "~/components/breadcrumb/CBreadcrumb.vue";
import CButton from "~/components/forms/CButton.vue";
import CCard from "~/components/card/CCard.vue";
import CCardHeader from "~/components/card/CCardHeader.vue";
import CCardFooter from "~/components/card/CCardFooter.vue";
import CCardBody from "~/components/card/CCardBody.vue";

const pages = [
  { name: 'Créer une organisation', href: '#', current: true },
  { name: 'Créer un projet', href: '#', current: true },
]
</script>