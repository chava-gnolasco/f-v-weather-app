import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { API_KEY } from "@/utils/constants";

export const useWeatherStore = defineStore("weather", () => {
  const latitude: Ref<number> = ref<number>(0);
  const longitude: Ref<number> = ref<number>(0);

  const saveCoords = (lat: number, lon: number) => {
    latitude.value = lat;
    longitude.value = lon;
  };

  return { latitude, longitude, apiKey: API_KEY, saveCoords };
});
