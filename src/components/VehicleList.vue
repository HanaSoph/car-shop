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

  <ul>
    <li v-for="vehicle in store.sortedVehicles" :key="vehicle.id">
      <div class="card">
        <div class="card-content">
          <h2>{{ vehicle.make }} {{ vehicle.model }}</h2>
          <div class="tag-group">
            <div class="tag">{{ vehicle.year }}</div>
            <div class="tag">{{ vehicle.colour }}</div>
            <div class="tag">{{ vehicle.mileage.toLocaleString() }} miles</div>
          </div>

          <p class="price">£{{ vehicle.price.toLocaleString() }}</p>
        </div>
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
  justify-content: center;
}

.sort-group {
  display: flex;
  gap: 10px;
}

.card {
  background-color: #e9edf1;
  width: 350px;
  height: 350px;
  margin: 10px;
  padding: 30px;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .tag-group {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;

      .tag {
        background-color: #001842;
        color: white;
        border-radius: 30px;
        padding: 5px 10px;
        min-width: 70px;
        display: flex;
        justify-content: center;
      }
    }

    .price {
      font-size: 35px;
      font-weight: 500;
      color: #414a54;
    }
  }
}
</style>
