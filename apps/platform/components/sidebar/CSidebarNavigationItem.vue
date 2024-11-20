<template>
  <nuxt-link
    :to="props.to"
    :class="[
      'cursor-pointer inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:shadow-sm  h-9 px-4 py-2 w-full justify-start',
      {
        'bg-primary text-white hover:bg-primary': props.active,
        'hover:bg-gray-100': !props.active
      }
    ]"
  >
    <Icon :name="`solar:${props.icon}`" size="1.5rem" style="color: #c1c1c1" />
    <span>{{ props.title }}</span>
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  active?: boolean;
  icon?: string;
  to: string;
}

const props = defineProps<Props>()
</script>
