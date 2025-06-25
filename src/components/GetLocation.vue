<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";
import type { GeolocationInfo } from "../types/wheatherApiResponse";
import { useWeatherStore } from "@/stores/weatherStore";
import { retrieveWeather } from "@/services/weatherApi";

/**
 * Represents the position object returned by geolocation APIs.
 * @property coords - The geographical coordinates.
 */
type Position = {
  coords: Geolocation;
};

/**
 * Represents geographical coordinates.
 * @property latitude - The latitude in decimal degrees.
 * @property longitude - The longitude in decimal degrees.
 */
type Geolocation = {
  latitude: number;
  longitude: number;
};

const weatherStore = useWeatherStore();
const geolocationBlockedByUser: Ref<boolean> = ref(false);
const weatherInfo: Ref<GeolocationInfo | undefined> = ref();


/**
 * Asynchronously retrieves weather information and updates the `weatherInfo` ref.
 * Handles any errors that occur during the retrieval process by logging them to the console.
 *
 * @async
 * @function getWeather
 * @returns {Promise<void>} Resolves when weather information has been retrieved and set.
 */
const getWeather = async () => {
  try {
    weatherInfo.value = await retrieveWeather();
  } catch (error) {
    console.error("Error in getWeather:", error);
  }
};

/**
 * Callback function to handle the successful retrieval of the user's geolocation.
 * Updates the `coords` reactive reference with the obtained coordinates.
 *
 * @param position - An object containing the user's geolocation data.
 *   @property coords - The Geolocation object with latitude, longitude, etc.
 */
const getPosition = async (position: Position) => {
  weatherStore.saveCoords(position.coords.latitude, position.coords.longitude);
  await getWeather();
};


/**
 * Handles geolocation errors by setting a flag indicating that geolocation
 * access was blocked by the user and logging the error message to the console.
 *
 * @param error - An object containing the error message from the geolocation API.
 */
const handleGeolocationError = (error: { message: string }) => {
  geolocationBlockedByUser.value = true;
  console.log(error.message);
}

/**
 * Attempts to retrieve the user's current geographic location using the browser's Geolocation API.
 * On success, no action is taken. On error, the `handleGeolocationError` function is called.
 * 
 * @returns {Promise<void>} A promise that resolves when the geolocation attempt completes.
 */
const getGeolocation = async (): Promise<void> => {
  await navigator.geolocation.getCurrentPosition(getPosition, handleGeolocationError);
};

/**
 * Lifecycle hook that runs after the component is mounted.
 * Calls the asynchronous getGeolocation function to retrieve the user's geolocation
 * as soon as the component is mounted.
 */
onMounted(async () => {
  await getGeolocation();
});

</script>


<template>
  <div v-if="weatherStore.latitude && weatherStore.longitude && !geolocationBlockedByUser">
    <div class="weather-info">
      <div class="text-2xl font-semibold text-gray-800 mb-1">
        {{ weatherInfo?.location?.region }}, {{ weatherInfo?.location?.tz_id }}
      </div>
      <div class="weather-icon">
        <img :src="weatherInfo?.current?.condition.icon" class="w-20 h-20" />
      </div>
      <div class="text-4xl font-bold text-gray-900">{{ weatherInfo?.current?.temp_c }} °C</div>
      <div class="text-lg font-medium text-gray-700 mb-2">{{ weatherInfo?.current?.condition.text }}</div>
      <hr>
      <div class="flex justify-center gap-6 text-sm text-gray-600 mb-4">
        <span>Wind: {{ weatherInfo?.current?.wind_kph }} km/h</span>
        <span>Humidity: {{ weatherInfo?.current?.humidity }}%</span>
      </div>
      <div class="text-sm text-gray-600">{{ weatherInfo?.location?.localtime }}</div>
    </div>
  </div>
  <div v-if="geolocationBlockedByUser">
    You should grant access to your location
  </div>
</template>

<style scoped>
.weather-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>