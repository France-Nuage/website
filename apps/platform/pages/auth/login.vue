<template>
  <nuxt-layout name="authentification" title="Se connecter">
    <p class="mt-2 text-sm/6 text-gray-500">Pas encore membre ? {{ ' ' }}
      <a href="#" class="font-semibold text-primary">Inscriver vous !</a>
    </p>

    <div class="mt-10">
      <div>

        <c-social-button social-provider="google" />
        <c-separator class="my-10" label="Ou" />

        <form   class="space-y-6">


          <c-text-field id="email" required autocomplete="email" name="email" type="email" label="Email" />
          <c-text-field id="password" required autocomplete="password" name="password" type="password" label="Password" />

          <div class="flex items-center justify-between">
            <div class="text-sm/6">
              <nuxt-link to="/authentification/forgot-password" class="font-semibold text-primary">Mot de passe oublié ?</nuxt-link>
            </div>

            <div class="flex items-center" />
          </div>

          <div>
            <c-button type="submit" block>
              Se connecter
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