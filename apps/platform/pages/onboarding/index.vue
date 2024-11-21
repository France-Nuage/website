<template>
  <div class="bg-gray-50 h-screen">
    <c-breadcrumb logo :pages="pages" />
    <nuxt-page />
  </div>
</template>

<script lang="ts" setup>
import CBreadcrumb from "~/components/breadcrumb/CBreadcrumb.vue";

const pages = [
  { name: 'Créer une organisation', href: '#', current: true },
  { name: 'Créer un projet', href: '#', current: true },
]
</script>