<template>
  <footer class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <!-- Grid layout to split left (1/3) and right (2/3) -->
      <div class="grid grid-cols-3 gap-8">
        <!-- Logo and France Nuage on the left (1/3) -->
        <div class="flex items-center space-x-4 col-span-1">
          <Logo />
          <span class="font-semibold text-white">France Nuage</span>
        </div>

        <!-- Navigation columns on the right (2/3) -->
        <div class="col-span-2 grid grid-cols-2 gap-8 xl:grid-cols-4">
          <div>
            <h3 class="text-sm/6 font-semibold text-white">Solutions</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.solutions" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm/6 font-semibold text-white">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.support" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm/6 font-semibold text-white">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.company" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.legal" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from "~/components/Logo.vue";
const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Automation', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Notice', href: '/legalNotice' },
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
}
</script>
