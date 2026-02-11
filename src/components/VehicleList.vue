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
  <div v-if="store.loading" class="loading">Loading...</div>
  <ul>
    <li v-for="vehicle in store.sortedVehicles" :key="vehicle.id">
      <div class="card">
        <div class="card-image">
          <img
            :src="vehicle.img ?? '/images/car.png'"
            :alt="
              vehicle.img
                ? `Image of a ${vehicle.make} ${vehicle.model}`
                : 'Placeholder image of a graphic car'
            "
          />
        </div>
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
  gap: 10px;
}

.loading {
  padding: 2rem;
  text-align: center;
}

.sort-group {
  display: flex;
  gap: 10px;
}

.card {
  background-color: #e9edf1;
  height: 400px;
  margin: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  .card-image {
    position: relative;
    top: 0px;
    left: 0px;

    img {
      max-width: 100%;
      min-height: 100%;
      width: 335px;
      height: 200px;
      object-fit: cover;
      object-position: 50% 50%;
      border-radius: 6px 6px 0px 0px;
    }
  }

  .card-content {
    display: flex;
    padding: 30px;

    gap: 10px;
    flex-direction: column;
    align-items: flex-start;

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
