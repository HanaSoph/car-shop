import type { Vehicle } from '../types/vehicle'
import vehicles from '../data/vehicles.json'

export function fetchVehicles(): Promise<Vehicle[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vehicles as Vehicle[])
    }, 800)
  })
}

export function fetchVehicleById(id: string): Promise<Vehicle> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const vehicle = (vehicles as Vehicle[]).find((vehicle) => vehicle.id === id)
      if (vehicle) {
        resolve(vehicle)
      } else {
        reject(new Error('Vehicle not found'))
      }
    }, 600)
  })
}
