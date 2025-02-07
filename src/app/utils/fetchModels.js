import { apiUrl } from "./apiUrl";

export async function fetchModels(makeId, year) {
  if (!makeId || !year) {
    throw new Error("Invalid makeId or year");
  }
  try {
    const response = await fetch(
      apiUrl(`GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}`)
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
}
