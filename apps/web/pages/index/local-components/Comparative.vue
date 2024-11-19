<template>
    <div class="relative isolate px-6 sm:pt-32 lg:px-8">
<!--      <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">-->
<!--        <div class="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30">-->
<!--          plop-->
<!--        </div>-->
<!--      </div>-->
      <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.featured ? 'relative bg-primary shadow-2xl' : 'bg-white sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
          <p class="mt-4 flex items-baseline gap-x-2">
            <span :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-4xl font-semibold tracking-tight']">{{ tier.title }}</span>
          </p>
          <ul role="list" :class="[tier.featured ? 'text-[#DFF2F2]' : 'text-gray-600', 'mt-8 space-y-4 text-[16px] sm:mt-10']">
            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <CheckIcon v-if="tier.featured" :class="['text-[#93FBFF] h-6 w-5 flex-none']" aria-hidden="true" />
                <XMarkIcon v-else  :class="['h-6 w-5 text-red-500 flex-none']" aria-hidden="true" />
                {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CheckIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  
  const tiers = [
    {
      id: 'cloud-provider',
      href: '#',
      title: 'Chez les cloud providers',
      features: [
        'Dépendance à une solution propriétaire',
        'Hébergé à l’étranger, soumis à des lois non-européennes',
        'Infrastructure imposée sans flexibilité',
      ],
      featured: false,
    },
    {
      id: 'france-nuage',
      href: '#',
      title: 'Avec France-Nuage',
      features: [
        'Profitez d’une maintenance sans interruption',
        'Gardez la liberté de l’Opensource',
        'Souveraineté absolue avec vos serveurs',
        'Choisissez entre vos propres serveurs et ceux de France-nuage',
        'Le tout pour un coût mesuré et maîtrisé'
      ],
      featured: true,
    },
  ]
  </script>