<template>
  <div>
    <button class="base-button" :disabled="entitiesStore.isDisabled" @click="$emit('button-pressed')">
      <img src="@/assets/semicircle.svg" class="preloader-spinner" v-show="props.isLoading">
      <div v-show="!props.isLoading">{{ props.buttonText }}</div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useEntitiesStore } from '../stores/entities';

const entitiesStore = useEntitiesStore();

const props = defineProps<{
  buttonText: string,
  isLoading: boolean,
}>()
</script>

<style scoped lang="scss">
@import '../styles/styles.scss';
.base-button {
  background-color: $button-blue;
  padding: 8px 16px;
  border-radius: 5px;
  border: 0.5px solid darkblue;
  color: white;
  font-weight: 500;
  font-size: medium;
  &:disabled {
    cursor: not-allowed;
    background-color: white;
    color: black;
    border: 0.5px solid rgba(0, 0, 0, 0.11);
  }
}

.preloader-spinner {
  height: 16px;
  width: 18px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { 
    transform: rotate(360deg)
  }
}
</style>

