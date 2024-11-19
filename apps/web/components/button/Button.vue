<template>
  <button :class="[`inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition ${variantClasses[props.variant]}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'filled' | 'outline' | 'text';
  arrow?: 'left' | 'right';
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const variantClasses = {
  primary:
      'rounded-lg bg-primary py-3 px-5 text-white hover:bg-primary-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300',
  secondary:
      'rounded-lg bg-white py-3 px-5 text-primary hover:bg-white dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
      'rounded-lg bg-zinc-900 py-3 px-5 text-white hover:bg-primary-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400',
  outline:
      'rounded-lg py-3 px-5 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-primary-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500',
}
</script>

<style scoped>

</style>