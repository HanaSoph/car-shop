import type { Vehicle } from '../types/vehicle'
import { fetchVehicles, fetchVehicleById } from '../services/mockApi'

// sort by: price, year, mileage in here

export async function getVehicles(): Promise<Vehicle[]> {
  return await fetchVehicles()
}

export async function getVehicleById(id: string): Promise<Vehicle> {
  return await fetchVehicleById(id)
}
