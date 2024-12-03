<template>
  <Dialog
      class="fixed inset-0"
      style="z-index: 51"
      :open="props.modelValue"
      @close="$emit('update:modelValue', $event)"
  >
    <DialogBackdrop
        transition
        class="fixed inset-0 z-50 bg-zinc-400/25 backdrop-blur-sm data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/40"
    />
    <div class="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
      <DialogPanel
          transition
          class="mx-auto transform-gpu overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:max-w-xl dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <slot />
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/vue";

interface Props {
  modelValue?: boolean;
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>