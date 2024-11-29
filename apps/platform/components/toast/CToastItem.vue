<template>
  <Transition>
    <div :class="`m-alert-item m-alert-item--${props.type}`">
      <div class="m-alert-item__icon">
        <Icon v-if="props.type === 'danger'" name="solar:danger-circle-linear" size="24px" />
        <Icon v-if="props.type === 'success'" name="solar:check-circle-linear" size="24px" />
        <Icon v-if="props.type === 'warning'" name="solar:shield-warning-linear" size="24px" />
      </div>
      <div class="m-alert-item__content">
        <div class="m-alert-item__content__title">{{ props.title }}</div>
        <div v-if="props.description" class="m-alert-item__content__description">{{ props.description }}</div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import MIcon from "components/icon/MIcon.vue";

interface Props {
  type?: 'danger' | 'success' | 'warning';
  title: string;
  description: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'danger'
})

// https://dribbble.com/shots/23230014-Alerts-in-Hashnode
</script>

<style scoped lang="scss">
.m-alert-item {
  background-color: #020617;
  border-radius: 16px;
  padding: 16px 24px;
  display: flex;
  min-width: 350px;
  gap: 16px;
  &--success {
    .m-alert-item__icon {
      svg {
        fill: #00dc82;
        color: #00dc82
      }
    //  background-color: #00dc82;
    }
  }
  &--danger {
    .m-alert-item__icon {
      svg {
        fill: #f92672;
        color: #f92672
      }
    //  background-color: #f92672;
    }
  }
  &--warning {
    .m-alert-item__icon {
      svg {
        fill: #D65B03;
        color: #D65B03
      }
    //  background-color: #D65B03;
    }
  }
  &__content {
    &__title {
      margin-top: 2.5px;
      color: white;
      font-size: 16px;
      font-weight: 500;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    &__description {
      color: #E6E6E6;
      margin-top: 8px;
      font-size: 15px;
    }
  }
}
</style>