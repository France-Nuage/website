<template>
  <label :class="[props.light ?  'text-xs leading-5 text-gray-800' : 'font-medium text-gray-900' ,'block text-sm/6']" :for="props.for">
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  for: string;
  light?: boolean;
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>