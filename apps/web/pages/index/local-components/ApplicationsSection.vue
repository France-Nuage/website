<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 sm:px-6 sm:py-16 lg:px-8">

      <h2 class="text-balance text-4xl font-semibold tracking-tight text-center sm:text-5xl">Vos applications continuellement maintenues, supervisées et sécurisées</h2>
      <p class="mt-8 text-pretty text-lg font-normal text-center text-gray-500 sm:text-xl/8">Garder la main sur votre budget et votre destin en déployant des applications open-source en 1 clic</p>

      <div class="flex flex-wrap gap-4 mt-8">
        <div v-for="(application, key) in applications" :key="key" class="w-32 shadow-md rounded">
          <img :src="`/images/logo_${application.image}.${application.type || 'png'}`" class="m-auto h-16 w-16 object-contain" :alt="application.name" />
          <div class="p-3 text-center">
            <span class="text-gray-600">{{ application.name }}</span>
          </div>
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
    image: 'keycloak'
  },
  {
    name: 'Suivi de disponibilité',
    description: 'Uptime Kuma',
    image: 'uptime_kuma',
    type: 'svg'
  },
  {
    name: 'Base de données',
    description: 'PostgreSQL',
    image: 'postgresql'
  },
  {
    name: 'Monitoring',
    description: 'Grafana',
    image: 'grafana'
  },
  {
    name: 'Object-storage',
    description: '',
    image: 'minio',
    type: 'svg'
  },
  {
    name: 'Journalisation',
    description: 'Grafana',
    image: 'loki',
    type: 'svg'
  },
  {
    name: 'Métrologie',
    description: 'Mimir',
    image: 'mimir',
    type: 'svg'
  },
  {
    name: 'Cloudflare',
    description: '',
    image: 'cloudflare'
  },
  {
    name: 'IA génératives',
    description: 'Ollama',
    image: 'olloma'
  },
  {
    name: 'Dépôt d\'artefacts',
    description: '',
    image: 'harbor'
  },
  {
    name: 'Design',
    description: 'Penpot, alternative à Figma',
    image: 'penpot',
    type: 'svg'
  },
]
</script>
