<template>
  <MenuItem v-slot="{ active }">
    <div :class="[active ? 'bg-gray-100 rounded-lg relative outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']">
      <slot :active="active" />
    </div>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
</script>

<style scoped>

</style>