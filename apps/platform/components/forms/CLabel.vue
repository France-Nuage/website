<template>
  <label class="block text-sm/6 font-medium text-gray-900" :for="props.for">
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  for: string;
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>