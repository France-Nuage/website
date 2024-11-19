<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 sm:px-6 sm:py-16 lg:px-8">

      <h2 class="text-balance text-4xl font-semibold tracking-tight text-center sm:text-5xl">Vos applications continuellement maintenues, supervisées et sécurisées</h2>
      <p class="mt-8 text-pretty text-lg font-normal text-center text-gray-500 sm:text-xl/8">Garder la main sur votre budget et votre destin en déployant des applications open-source en 1 clic</p>

      <div v-for="(application, key) in applications" :key="key">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const applications = [
  {
    name: 'Identité & Accès',
    description: 'Keycloak'
  },
  {
    name: 'Suivi de disponibilité',
    description: 'Uptime Kuma'
  },
  {
    name: 'Base de données',
    description: 'PostgreSQL'
  },
  {
    name: 'Monitoring',
    description: 'Grafana'
  },
  {
    name: 'Object-storage',
    description: ''
  },
  {
    name: 'Loki',
    description: 'Grafana'
  },
  {
    name: 'Métrologie',
    description: 'Mimir'
  },
  {
    name: 'Cloudflare',
    description: ''
  },
  {
    name: 'IA génératives',
    description: 'Ollama'
  },
  {
    name: 'Harbor',
    description: ''
  },
  {
    name: 'Design',
    description: 'Penpot, alternative à Figma'
  },
]
</script>

<style scoped>

</style>