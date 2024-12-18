<template>
  <div class="overflow-x-auto">
    <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-transparent">
      <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
        <thead class="bg-gray-50">
        <tr>
          <th
            scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 sm:pl-6"
            v-for="(header, i) in headers"
            :key="`${header.key}${i}`"
          >
            <span>{{ header.label }}</span>
          </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white dark:bg-gray-900 dark:divide-gray-800">
        <tr
          v-for="entity in props.data"
          :key="`entity-${entity.name}`"
        >
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal sm:pl-6  text-gray-900 dark:text-gray-400"
            v-for="(header, i) in headers"
            :key="`${header.key}-${i}`"
            style="vertical-align: baseline;"
          >
            <div @click="() => instance?.attrs.onClickRow ? $emit('clickRow', { id: entity.id, name: props.name }) : router.push(`/${props.name}/${entity.id}`)">
              <slot :name="`col-${header.key}`" :entity="entity" :key="header.key">
                {{ _.get(entity, header.key) || '-' }}
              </slot>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash'

// todo: implements all supports of this documentation: https://bootstrap-vue.org/docs/components/table#table
interface Props {
  headers?: Array<{ key: string; label: string; variant?: string; sortable?: boolean }>;
  data?: Array<any>;
  name: string;
}

const router = useRouter()
const props = defineProps<Props>()
const headers = computed(() => props.headers || props.data && [...new Set(props.data.flatMap(Object.keys))].map((item) => ({ label: item, key: item })))
const instance = ref(getCurrentInstance())
defineOptions({
  inheritAttrs: false
})
</script>