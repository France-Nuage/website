<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 sm:px-6 sm:py-16 lg:px-8">

      <h2 class="text-balance text-4xl font-semibold tracking-tight text-center sm:text-5xl">Vos applications continuellement maintenues, supervisées et sécurisées</h2>
      <p class="mt-8 text-pretty text-lg font-normal text-center text-gray-500 sm:text-xl/8">Garder la main sur votre budget et votre destin en déployant des applications open-source en 1 clic</p>

      <div class="flex flex-wrap">
        <div v-for="(application, key) in applications" :key="key" class="w-20 shadow-md">
          <span>{{ application.name }}</span>
<!--          <span>({{ application.description }})</span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const applications = [
  {
    name: 'Identité & Accès',
    description: 'Keycloak',
    img: ''
  },
  {
    name: 'Suivi de disponibilité',
    description: 'Uptime Kuma',
    img: ''
  },
  {
    name: 'Base de données',
    description: 'PostgreSQL',
    img: ''
  },
  {
    name: 'Monitoring',
    description: 'Grafana',
    img: ''
  },
  {
    name: 'Object-storage',
    description: '',
    img: ''
  },
  {
    name: 'Loki',
    description: 'Grafana',
    img: ''
  },
  {
    name: 'Métrologie',
    description: 'Mimir',
    img: ''
  },
  {
    name: 'Cloudflare',
    description: '',
    img: ''
  },
  {
    name: 'IA génératives',
    description: 'Ollama',
    img: ''
  },
  {
    name: 'Harbor',
    description: '',
    img: ''
  },
  {
    name: 'Design',
    description: 'Penpot, alternative à Figma',
    img: ''
  },
]
</script>
