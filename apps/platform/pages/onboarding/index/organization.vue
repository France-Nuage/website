<template>
  <c-card class="w-4/12 mx-auto mt-24">
    <c-card-header title="Créer une nouvelle organisation" />
    <c-card-body>

      <p class="text-xs mb-8">
        <span class="font-semibold">This is your organization within France-Nuage.</span>
        For example, you can use the name of your company or department.
      </p>

      <div class="flex flex-col gap-8">
        <div class="grid grid-cols-12 w-full">
          <c-label label="Nom" for="name" class="col-span-3" />
          <c-text-field id="name" required name="name" type="text" class="col-span-9" description="Quel serait la meilleur description pour votre organisation ?" />
        </div>

        <div class="grid grid-cols-12 w-full">
          <c-label label="Vos serveurs ?" for="name" class="col-span-3" />
          <c-switch v-model="ownServer" class="col-span-9" description="Connectez vos propres serveurs et machines virtuelles à France Nuage afin de déployer en un seul clic vos applications, base de données, etc." />
        </div>

        <div class="grid grid-cols-12 w-full">
          <c-label label="Plans" for="name" class="col-span-3" />

          <div class="col-span-9">
            <c-select :collections="plans" v-model="selectedPlan" placeholder="Choisissez un plan" />
          </div>

        </div>
      </div>

    </c-card-body>
    <c-card-footer>
      <div>
        <CButton>Annulé</CButton>
      </div>
      <div class="flex items-center gap-4">
        <small class="text-gray-600">Vous pouvez renommer le nom de l'organisation plus tard</small>
        <CButton>Créer une organisation</CButton>
      </div>
    </c-card-footer>
  </c-card>
</template>

<script setup lang="ts">
import CCardBody from "~/components/card/CCardBody.vue";
import CButton from "~/components/forms/CButton.vue";
import CCardFooter from "~/components/card/CCardFooter.vue";
import CCardHeader from "~/components/card/CCardHeader.vue";
import CCard from "~/components/card/CCard.vue";
import CTextField from "~/components/forms/CTextField.vue";
import CLabel from "~/components/forms/CLabel.vue";
import CSwitch from "~/components/forms/CSwitch.vue";
import CSelect from "~/components/forms/CSelect.vue";

const ownServer = ref(false)

const plans = [
  { id: 1, name: 'Durward Reynolds', price: '' },
  { id: 2, name: 'Kenton Towne', price: '' },
  { id: 3, name: 'Therese Wunsch', price: '' },
  { id: 4, name: 'Benedict Kessler', price: '' },
  { id: 5, name: 'Katelyn Rohan', price: '' },
]
const selectedPlan = ref(plans[0])
</script>

<style scoped>

</style>