<template>
  <div class="m-alert">
    <TransitionGroup name="list" tag="ul">
      <li v-for="(item, key) in alerts.list" :key="key">
        <m-alert-item :title="item.title" :description="item.description" :type="item.type" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useAlerts } from "stores/alert";
import MAlertItem from "components/alerts/MAlertItem.vue";

const alerts = useAlerts()
</script>

<style scoped lang="scss">
.m-alert {
  position: fixed;
  right: 50px;
  bottom: 50px;
  &__list, ul {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin: 0;
    flex-direction: column;
    li {
      list-style: none;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>