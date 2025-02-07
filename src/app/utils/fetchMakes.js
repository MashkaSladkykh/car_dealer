import { apiUrl } from "./apiUrl";

export async function fetchMakes() {
  try {
    const response = await fetch(apiUrl("GetMakesForVehicleType/car"));
    const data = await response.json();

    return data.Results || [];
  } catch (error) {
    console.error("Error fetching makes:", error);
    return [];
  }
}
