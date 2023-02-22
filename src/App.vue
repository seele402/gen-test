
<template>
  <div class="main-container">
    <EntitiesViewer />
    <EntitiesDropdown :options="entitiesStore.options" />
    <CreateButton :isLoading="isLoading" :button-text="'Создать'" @button-pressed="createEntity()" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CreateButton from './components/BaseButton.vue';
import EntitiesDropdown from './components/BaseDropdown.vue';
import EntitiesViewer from './components/EntitiesViewer.vue';
import { useEntitiesStore } from './stores/entities';

const entitiesStore = useEntitiesStore();

const isLoading = ref(false);

const createEntity = async () => {
  isLoading.value = true;
  await entitiesStore.createEntity();
  isLoading.value = false;
}

onMounted(async () => {
  await entitiesStore.authenticate()
})
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  gap: 20px;
}
</style>
