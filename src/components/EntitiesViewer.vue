<template>
  <div class="viewer-container">
    <ul>
      <li v-for="entity in entitiesStore.entities" :key="entity.id">{{ entity.name }} {{ entity.id }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useEntitiesStore } from '../stores/entities';

const entitiesStore = useEntitiesStore();
</script>

<style scoped lang="scss">
.viewer-container {
  padding: 16px 8px;
  width: 600px;
  height: 400px;
  border: 2px solid rgba(0, 0, 0, 0.11);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.viewer-container::-webkit-scrollbar {
  display: none;
}
</style>

