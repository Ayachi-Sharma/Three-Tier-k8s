const API_URL = import.meta.env.VITE_API_URL;

export async function fetchPatients() {
  const response = await fetch(`${API_URL}/api/patients`);
  if (!response.ok) {
    throw new Error(`API Request failed with status ${response.status}`);
  }
  return response.json();
}