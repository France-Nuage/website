<template>
  <c-card>
    <c-card-header
      title="Sélectionnez une Instance"
      description="Une zone de disponibilité fait référence à l'emplacement géographique dans lequel votre Instance est créée."
    />
    <c-card-body>

      <div class="grid grid-cols-12 w-full">
        <div class="col-span-3">
          <p class="text-sm">Choisissez toutes la puissance que vous avez besoin</p>
        </div>
        <div class="col-span-9">
          <fieldset aria-label="Server size">
            <RadioGroup ref="zones_radio_group" v-model="selected" class="space-y-4" name="zones_radio_group" id="zones_radio_group">
              <RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan" :aria-label="plan.name" :aria-description="`${plan.ram}, ${plan.cpus}, ${plan.disk}, ${plan.price} per month`" v-slot="{ active, checked }">
                <c-instance-price-line :active="checked" :plan="plan" />
              </RadioGroupOption>
            </RadioGroup>
          </fieldset>
          <div class="mt-4">
            <c-action
              title="Besoin de plus de puissance ?"
              description="Contacter notre support commercial afin de pouvoir obtenir des machines beaucoup plus puissante."
              variant="information"
            />
          </div>
        </div>
      </div>


    </c-card-body>
  </c-card>
</template>

<script setup lang="ts">
import CCardHeader from "~/components/card/CCardHeader.vue";
import CCard from "~/components/card/CCard.vue";
import CCardBody from "~/components/card/CCardBody.vue";
import CInstancePriceLine from "~/components/instances/CInstancePriceLine.vue";
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { ref } from "vue";
import CAction from "~/components/pannel/CAction.vue";

const plans = [
  { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]

const selected = ref(plans[0])
</script>

<style scoped>

</style>