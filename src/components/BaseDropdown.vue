<template>
  <div>
    <select class="base-dropdown" v-model="entitiesStore.selectedOption">
      <option name="entity" id="entity" :value="{}">Не выбрано</option>
      <option class="dropdown-option" v-for="option in props.options" :key="option.id" :value="option">{{ option.description }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { Option } from '@/types/Option';
import { useEntitiesStore } from '../stores/entities';

const entitiesStore = useEntitiesStore();

const props = defineProps<{
  options: Option[],
}>()
</script>

<style scoped lang="scss">
@import '../styles/styles.scss';
.base-dropdown {
  width: 300px;
  padding: 8px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  background-color: $dropdown-bg;
  border: 0.5px solid rgba(0, 0, 0, 0.11);
  outline: none;
}
</style>