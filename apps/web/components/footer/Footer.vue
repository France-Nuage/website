<template>
    <footer class="bg-gray-900 py-4 mt-20">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5 flex gap-4 items-center text-white">
            <Logo /><span class="font-semibold">France Nuage</span>
          </a>
          <nuxt-link to="/legal" class="text-white hover:underline">Mention légales</nuxt-link>
          <p class="text-center text-sm/6 text-white">&copy; 2024 France-Nuage, Inc. Tous droits reservé.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import Logo from "~/components/Logo.vue";
  </script>