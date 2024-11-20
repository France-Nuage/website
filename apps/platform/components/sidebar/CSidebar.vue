<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r border-gray-200 bg-white">

    <div class="h-16 border-b border-gray-200 flex items-center px-4">
      <c-logo />
    </div>

    <div class="px-4">
      <nav class="my-4">

        <div class="flex flex-col gap-4">
          <c-sidebar-navigation-item title="Home" icon="home-2-bold-duotone" to="/" :active="route.path === '/'" />
          <c-sidebar-navigation-item title="Dashboard" icon="home-2-bold-duotone" to="/dashboard" :active="isActive('dashboard')" />
          <c-sidebar-navigation-item title="IAM" icon="home-2-bold-duotone" to="/iam" :active="isActive('iam')" />
          <c-sidebar-navigation-item title="Facturation" icon="home-2-bold-duotone" to="/billing" :active="isActive('billing')" />
          <c-sidebar-navigation-item title="Services" icon="home-2-bold-duotone" to="/services" :active="isActive('services')" />
          <c-sidebar-navigation-item title="Paramètres" icon="settings-bold-duotone" to="/settings" :active="isActive('settings')" />
        </div>

      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSidebarNavigationItem from "~/components/sidebar/CSidebarNavigationItem.vue";

const route = useRoute()

const isActive = (term: string) => {
  return route.path.startsWith('/' + term)
}
</script>

<style scoped>

</style>