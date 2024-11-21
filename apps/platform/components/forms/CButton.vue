<template>
  <button :class="[`inline-flex gap-0.5 justify-center overflow-hidden font-medium transition ${variantClasses[props.variant]} ${sizeClasses[props.size]}`, {
    'w-full': props.block
  }]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'filled' | 'outline' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  arrow?: 'left' | 'right';
  to?: string;
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const variantClasses = {
  primary:
      'rounded-lg bg-primary text-white border border-transparent hover:bg-primary-700',
  secondary:
      'rounded-lg bg-white text-primary border-transparent hover:bg-white',
  filled:
      'rounded-lg bg-zinc-100 border border-gray-200 text-black hover:bg-primary-700',
  outline:
      'rounded-lg text-zinc-700 ring-1 ring-inset ring-zinc-900/10 border-transparent hover:bg-primary-900/2.5 hover:text-zinc-900',
  text: 'text-emerald-500 hover:text-emerald-600',
}

const sizeClasses = {
  xs: 'xs',
  sm: 'text-xs py-2 px-3',
  md: 'text-sm py-3 px-5',
  lg: 'text-sm py-3 px-5',
  xl: 'text-sm py-3 px-5',
}
</script>

<style scoped>

</style>