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
  <ul class="card-list">
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
          <h3>{{ vehicle.make }} {{ vehicle.model }}</h3>
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
.loading {
  padding: 2rem;
  text-align: center;
}

.sort-group {
  display: flex;
  gap: 10px;
}

.card-list {
  list-style-type: none;
  padding: unset;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  gap: 30px;

  .card {
    background-color: #e9edf1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    .card-image {
      position: relative;
      top: 0px;
      left: 0px;
      height: 250px;
      min-width: 280px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 15px 15px 0px 0px;
      }
    }

    .card-content {
      font-size: 14px;
      display: flex;
      padding: 30px;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;

      h3 {
        min-height: 52px;
        display: flex;
        align-items: center;
      }

      .tag-group {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        .tag {
          background-color: #001842;
          color: white;
          font-size: 11px;
          border-radius: 30px;
          padding: 5px 12px;
          display: flex;
          justify-content: center;
        }
      }

      .price {
        font-size: 25px;
        font-weight: 500;
        color: #414a54;
      }
    }
  }
}

@media (max-width: 710px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}
</style>
