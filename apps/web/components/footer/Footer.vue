<template>
    <footer class="bg-gray-900 py-24 sm:py-32 -mt-20">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5 flex gap-4 items-center text-white">
            <Logo /><span class="font-semibold">France Nuage</span>
          </a>
          <nuxt-link to="/legal" class="text-white hover:underline">Mention légal</nuxt-link>
          <p class="text-center text-sm/6 text-white">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>

  import Logo from "~/components/Logo.vue";
  </script>