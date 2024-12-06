<template>
  <nuxt-layout name="authentification" title="Mot de passe oublié ?">
    <p class="mt-2 text-sm/6 text-gray-500">Ne vous inquiéter pas, renseigner votre e-mail, nous vous enverons un lien pour le changer !</p>

    <div class="mt-10">
      <div>
        <form class="space-y-6" @submit="onSubmit()">

          <c-text-field
            id="email"
            required
            autocomplete="email"
            name="email"
            type="email"
            label="Email"
            v-model="formData.email"
          />

          <div>
            <c-button type="submit" block :loading="loading">Je valide</c-button>
          </div>
        </form>
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import CTextField from "~/components/forms/CTextField.vue";
import CButton from "~/components/forms/CButton.vue";

const formData = ref({
  email: "",
})
const loading = ref(false);

const onSubmit = () => {
  loading.value = true;
}
</script>

<style scoped>

</style>