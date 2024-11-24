<template>
  <button :class="[`inline-flex h-fit gap-0.5 justify-center overflow-hidden font-medium transition ${variantClasses[props.variant]} ${sizeClasses[props.size]}`, {
    'w-full': props.block
  }]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'filled' | 'outline' | 'text' | 'danger' | 'information';
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
  success:
      'rounded-lg text-white bg-green-600 border border-green-700 hover:bg-green-700',
  danger:
      'rounded-lg text-white bg-red-600 border border-red-700 hover:bg-red-700',
  filled:
      'rounded-lg bg-zinc-100 border border-gray-200 text-black hover:bg-primary-700',
  outline:
      'rounded-lg text-zinc-700 ring-1 ring-inset ring-zinc-900/10 border-transparent hover:bg-primary-900/2.5 hover:text-zinc-900',
  text: 'text-emerald-500 hover:text-emerald-600',
  information: 'rounded-lg bg-blue-600 border border-blue-700 hover:bg-blue-700 text-white',
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