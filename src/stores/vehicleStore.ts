import type { Vehicle } from '@/types/vehicle'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getVehicles, getVehicleById } from '@/services/vehiclesHelper'

export const useVehicleStore = defineStore('vehicle', () => {
  const vehicles = ref<Vehicle[]>([])
  const selectedVehicle = ref<Vehicle | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const sortOption = ref<string>('price-asc')

  async function fetchVehicles() {
    loading.value = true
    try {
      vehicles.value = await getVehicles()
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      loading.value = false
    }
  }

  const sortedVehicles = computed(() => {
    const sorted = [...vehicles.value]

    switch (sortOption.value) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price)
      case 'mileage-asc':
        return sorted.sort((a, b) => a.mileage - b.mileage)
      case 'mileage-desc':
        return sorted.sort((a, b) => b.mileage - a.mileage)
      case 'age-newest':
        return sorted.sort((a, b) => b.year - a.year) // newer = higher year
      case 'age-oldest':
        return sorted.sort((a, b) => a.year - b.year)
      default:
        return sorted
    }
  })

  async function fetchVehicleById(id: string) {
    loading.value = true
    try {
      selectedVehicle.value = await getVehicleById(id)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      loading.value = false
    }
  }

  return {
    vehicles,
    selectedVehicle,
    loading,
    error,
    sortOption,
    sortedVehicles,
    fetchVehicles,
    fetchVehicleById,
  }
})
