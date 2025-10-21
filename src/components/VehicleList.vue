<script setup lang="ts">
import { onMounted } from 'vue'
import { useVehicleStore } from '@/stores/vehicleStore'

const store = useVehicleStore()

onMounted(() => store.fetchVehicles())
</script>

<template>
  <div class="sort-group">
    <label for="sort">Sort by:</label>
    <select name="sort" id="sort">
      <option>Price (low to high)</option>
      <option>Price (high to low)</option>
      <option>Mileage (low to high)</option>
      <option>Mileage (low to high)</option>
      <option>Age (newest)</option>
      <option>Age (oldest)</option>
    </select>
  </div>

  <ul>
    <li v-for="vehicle in store.vehicles" :key="vehicle.id">
      <div class="card">
        <h2>{{ vehicle.make }} {{ vehicle.model }}</h2>
        <p>{{ vehicle.year }}</p>
        <p>{{ vehicle.colour }}</p>
        <p>{{ vehicle.mileage }}</p>
        <p>{{ vehicle.price }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: unset;
  display: flex;
  flex-wrap: wrap;
}

.sort-group {
  display: flex;
  gap: 10px;
}

.card {
  background-color: #e9edf1;
  width: 280px;
  height: 350px;
  margin: 10px;
  border-radius: 6px;

  /* img {
    position: absolute;
    width: 280px;
    height: auto;
    border-radius: 6px;
  } */
}
</style>
