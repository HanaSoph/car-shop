import type { Vehicle } from '@/types/vehicle'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getVehicles, getVehicleById } from '@/helpers/vehiclesHelper'

export const useVehicleStore = defineStore('vehicle', () => {
  const vehicles = ref<Vehicle[]>([])
  const selectedVehicle = ref<Vehicle | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

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

  return { vehicles, selectedVehicle, loading, error, fetchVehicles, fetchVehicleById }
})
