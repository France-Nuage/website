<template>
  <nuxt-layout name="authentification" title="S'inscrire">
    <p class="mt-2 text-sm/6 text-gray-500">Déjà membre ? {{ ' ' }}
      <a to="/authentification/login" class="font-semibold text-primary">Je me connecte !</a>
    </p>

    <div class="mt-10">
      <div>

        <c-social-button social-provider="google" />
        <c-separator class="my-10" label="Ou" />

        <form class="space-y-6">

          <div class="flex md:flex-col gap-4">
            <c-text-field id="lastname" required autocomplete="lastname" name="lastname" type="text" label="Votre nom" />
            <c-text-field id="firstname" required autocomplete="firstname" name="firstname" type="text" label="Votre prénom" />
          </div>
          <c-text-field id="email" required autocomplete="email" name="email" type="email" label="Email" />
          <c-text-field id="password" required autocomplete="password" name="password" type="password" label="Password" />

          <div>
            <c-button type="submit" block>
              S'inscrire
            </c-button>
          </div>
        </form>
      </div>
    </div>
  </nuxt-layout>
</template>


<script setup lang="ts">
import CTextField from "~/components/forms/CTextField.vue";
import CSocialButton from "~/components/autentification/CSocialButton.vue";
import CButton from "~/components/forms/CButton.vue";
import CSeparator from "~/components/CSeparator.vue";
</script>