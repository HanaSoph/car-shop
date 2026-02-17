<script setup lang="ts">
import { onMounted } from 'vue'
import { useVehicleStore } from '@/stores/vehicleStore'

const store = useVehicleStore()

onMounted(() => store.fetchVehicles())
</script>

<template>
  <div class="sort-group">
    <label for="sort">Sort by:</label>
    <select v-model="store.sortOption" id="sort">
      <option value="price-asc">Price (low to high)</option>
      <option value="price-desc">Price (high to low)</option>
      <option value="mileage-asc">Mileage (low to high)</option>
      <option value="mileage-desc">Mileage (high to low)</option>
      <option value="age-newest">Age (newest)</option>
      <option value="age-oldest">Age (oldest)</option>
    </select>
  </div>
</template>

<style scoped>
.sort-group {
  display: flex;
  gap: 10px;
}
</style>
