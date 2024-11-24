<template>
  <nuxt-layout name="settings">

    <h1 class="text-3xl font-semibold mb-8">France Nuage</h1>

    <TabGroup>
      <c-tab-list>
        <c-tab>Général</c-tab>
        <c-tab>Équipe</c-tab>
        <c-tab>Facuration</c-tab>
        <c-tab>Paiements</c-tab>
      </c-tab-list>
      <TabPanels>
        <TabPanel class="w-6/12">
          <general />
        </TabPanel>
        <TabPanel class="w-6/12">
          <team />
        </TabPanel>
        <TabPanel class="w-6/12">
          <billing />
        </TabPanel>
        <TabPanel>
          <payments />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </nuxt-layout>
</template>

<script setup lang="ts">
import { TabGroup, TabPanels, TabPanel } from '@headlessui/vue'
import CTabList from "~/components/tabs/CTabList.vue";
import CTab from "~/components/tabs/CTab.vue";
import General from "~/pages/settings/organizations/[id]/local-components/general.vue";
import Billing from "~/pages/settings/organizations/[id]/local-components/billing.vue";
import Payments from "~/pages/settings/organizations/[id]/local-components/payments.vue";
import Team from "~/pages/settings/organizations/[id]/local-components/team.vue";
</script>
