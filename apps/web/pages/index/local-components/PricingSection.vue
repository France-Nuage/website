<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-center sm:text-5xl">
          Nos experts supervisent et sécurisent H24, vos applications et votre infrastructure.
        </h2>
      </div>
      <div class="mt-16 flex justify-center">
        <fieldset aria-label="Payment frequency">
          <SwitchGroup>
            <Switch
                v-model="ownServer"
                :class="ownServer ? 'bg-primary' : 'bg-gray-200'"
                class="relative inline-flex h-6 w-11 items-center rounded-full"
            >
              <span
                  :class='ownServer ? "translate-x-6" : "translate-x-1"'
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
              />
            </Switch>
            <SwitchLabel class="ml-4"><span class="font-semibold">J'ai mes propres serveurs</span>  —  Connectez vos propres serveurs et machines virtuelles à France Nuage afin de déployer en un seul clic vos applications, base de données etc.</SwitchLabel>
          </SwitchGroup>
        </fieldset>
      </div>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="tier in tiers.filter((item) => item.own === ownServer)" :key="tier.id" :class="[tier.mostPopular ? 'ring-2 ring-primary bg-primary' : 'ring-1 ring-gray-200', 'rounded-3xl p-8 xl:p-10']">
          <div class="flex items-center justify-between gap-x-4">
            <p class="rounded-full bg-[#CEE9FE] px-2.5 py-1 text-xs/5 font-semibold text-[#Startup]">
              {{ tier.name }}</p>
          </div>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span :class="[tier.mostPopular ? 'text-white' : 'text-gray-900','text-4xl font-semibold tracking-tight'] ">{{ tier.price }}</span>
          </p>
          <Button block :variant="tier.mostPopular ? 'secondary' : 'primary'" class="mt-6">Commancer maintenant</Button>
          <div class="xl:mt-10">
            <p v-if="tier.mostPopular" class="text-white uppercase">Le plan autonome plus :</p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <CheckIcon :class="[tier.mostPopular ? 'text-[#CEF6F7]' : 'text-primary', 'h-6 w-5 flex-none']" aria-hidden="true" />
                <span :class="[{'text-[#CEF6F7]': tier.mostPopular}]">
                  {{ feature }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Autonome',
    id: 'tier-freelancer',
    href: '#',
    price: 'Gratuit',
    description: 'The essentials to provide your best work for clients.',
    features: [
      '0% SLA',
      'Vos ressources',
      'Forum communautaire',
      'Conformité de base'
    ],
    mostPopular: false,
    own: false
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: '35€',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '98% SLA',
      '2 applications et 2 BDDs',
      'Support 48h par email',
      'Conformité RGPD',
    ],
    mostPopular: true,
    own: false
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: '299€',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      '99,9% SLA',
      'Applications et BDDs illimités',
      'Support dédié 24/7 avec réponse sous 4h',
      'Conformité RGPD, HDS, et SOC 2',
    ],
    mostPopular: false,
    own: false
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: '299€',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      '98% SLA',
      '2 applications et 2 BDDs',
      'Support 48h par email',
      'Conformité RGPD',
    ],
    mostPopular: false,
    own: true
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: '299€',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      '99,9% SLA',
      'Applications et BDDs illimités',
      'Support dédié 24/7 avec réponse sous 4h',
      'Conformité RGPD, HDS, et SOC 2',
    ],
    mostPopular: false,
    own: true
  },
]

const ownServer = ref(false)
</script>