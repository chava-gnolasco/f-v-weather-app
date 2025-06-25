<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue";

type Position = {
  coords: Geolocation;
};

type Geolocation = {
  latitude: number;
  longitude: number;
};

const coords: Ref<Geolocation | undefined> = ref();
const geolocationBlockedByUser: Ref<boolean> = ref(false);

/**
 * Callback function to handle the successful retrieval of the user's geolocation.
 * Updates the `coords` reactive reference with the obtained coordinates.
 *
 * @param position - An object containing the user's geolocation data.
 *   @property coords - The Geolocation object with latitude, longitude, etc.
 */

const getPosition = (position: { coords: Geolocation }) => {
  coords.value = position.coords;
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
  <div v-if="coords && !geolocationBlockedByUser">{{ coords.latitude }} | {{ coords.longitude }}</div>
  <div v-if="geolocationBlockedByUser">User denied access</div>
</template>