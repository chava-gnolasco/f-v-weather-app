import axios from "axios";
import { useWeatherStore } from "../stores/weatherStore";
import { type GeolocationInfo } from "../types/wheatherApiResponse";

const BASE_URL = "https://api.weatherapi.com/v1/current.json";

/**
 * Retrieves weather information based on the current latitude and longitude
 * stored in the weather store. Makes an HTTP GET request to the weather API
 * using Axios and returns the geolocation weather data.
 *
 * @returns {Promise<GeolocationInfo>} A promise that resolves to the geolocation weather information.
 * @throws Will throw an error if the HTTP request fails.
 */
export const retrieveWeather = async (): Promise<GeolocationInfo> => {
  const weatherStore = useWeatherStore();

  try {
    const response = await axios.get<GeolocationInfo>(BASE_URL, {
      params: {
        key: weatherStore.apiKey,
        q: `${weatherStore.latitude},${weatherStore.longitude}`,
        aqi: "no",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error fetching weather data:", error.message);
    } else {
      console.error("Unknown error fetching weather data:", error);
    }
    throw error;
  }
};
