<template>
  <div class="bg-white border-b border-gray-200 px-4 py-4 rounded-t-md">
    <h1 class="font-semibold">{{ props.title  }}</h1>
    <p class="text-sm" v-if="props.description">{{ props.description  }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

const props = defineProps<Props>()
</script>


<style scoped>

</style>