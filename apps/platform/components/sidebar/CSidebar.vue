<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r border-gray-200 bg-white">

    <div class="h-16 border-b border-gray-200 flex items-center">

      <Listbox v-model="selectedPerson">
        <div class="relative w-full">
          <ListboxButton class="w-full text-sm font-medium leading-none px-5 py-2 text-left outline-none">
            <div>
              <span class="block text-xs text-gray-600">France Nuage Org</span>
              <span class="block font-semibold mt-0.5 text-md">Projet 1</span>
            </div>
            <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
          </ListboxButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <ListboxOptions
              class="absolute min-w-40 right-0 z-10 left-4 w-full origin-top-left rounded-lg bg-white p-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
            >
              <ListboxOption
                v-for="person in people"
                :key="person.id"
                :value="person"
                :disabled="person.unavailable"
                v-slot="{ active }"
                class="cursor-pointer hover:bg-gray-100 transition-all rounded-lg outline-none"
              >
                <div :class="[active ? 'outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']">
                  {{ person.name }}
                </div>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>

    </div>

    <div class="px-4">
      <nav>
        <slot />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import CSidebarNavigationItem from "~/components/sidebar/CSidebarNavigationItem.vue";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const people = [
  { id: 1, name: 'Production', unavailable: false },
  { id: 2, name: 'Staging', unavailable: false },
  { id: 3, name: 'Test', unavailable: false },
]
const selectedPerson = ref(people[0])
</script>

<style scoped>

</style>