<template>
  <span :class="[
      props.pill ? 'rounded-full' : 'rounded-md',
      props.flat ? '' : 'ring-1 ring-inset ring-gray-500/10',
      `inline-flex items-center bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600`, {

  }]">

    <svg v-if="props.dotted" :class="[`size-1.5 fill-gray-400`, {

    }]" viewBox="0 0 6 6" aria-hidden="true">
      <circle cx="3" cy="3" r="3" />
    </svg>

    <slot />

    <button v-if="props.remove" type="button" class="group relative -mr-1 size-3.5 rounded-sm hover:bg-gray-500/20" @click.stop="emit('remove', $event)">
      <span class="sr-only">Remove</span>
      <svg viewBox="0 0 14 14" class="size-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75">
        <path d="M4 4l6 6m0-6l-6 6" />
      </svg>
      <span class="absolute -inset-1" />
    </button>

  </span>
</template>

<script setup lang="ts">
interface Props {
  dotted?: boolean;
  pill?: boolean;
  remove?: boolean;
  flat?: boolean;
  small?: boolean;
}

const props = defineProps<Props>()
const emit = defineEmits(['remove'])
</script>

<style scoped>

</style>