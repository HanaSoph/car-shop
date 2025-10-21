import type { Vehicle } from '../types/vehicle'
import { fetchVehicles, fetchVehicleById } from '../api/mockApi'

export async function getVehicles(): Promise<Vehicle[]> {
  return await fetchVehicles()
}

export async function getVehicleById(id: string): Promise<Vehicle> {
  return await fetchVehicleById(id)
}
