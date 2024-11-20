<template>
  <c-card class="w-4/12 mx-auto mt-24">
    <c-card-header title="Créer un projet" />
    <c-card-body>
      <div class="flex flex-col gap-8">

        <div class="grid grid-cols-12 w-full">
          <c-label label="Nom" for="name" class="col-span-3" />
          <c-text-field id="name" required name="name" type="text" class="col-span-9" description="Quel serait la meilleur description pour votre organisation ?" />
        </div>

      </div>
    </c-card-body>
    <c-card-footer>
      <div>
        <CButton>Annulé</CButton>
      </div>
      <div class="flex items-center gap-4">
        <small class="text-gray-600">Vous pouvez renommer le nom du projet plus tard</small>
        <CButton>Créer un projet</CButton>
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
import CSwitch from "~/components/forms/CSwitch.vue";
import CLabel from "~/components/forms/CLabel.vue";
</script>

<style scoped>

</style>