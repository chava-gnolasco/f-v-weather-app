<script lang="ts" setup>
import MainModal from "./components/main-modal/MainModal.vue";
import { useModal } from "./components/main-modal/useModal";
import GetLocation from "./components/GetLocation.vue";

const { showModal, openModal, closeModal } = useModal();
</script>

<template>
  <main class="hero-section">
    <div class="hero-content">
      <h1>Weather at your Fingertips</h1>
      <p>Get the latest weather forecast for your location instantly.</p>
      <button class="cta-button" @click="openModal">Show Weather</button>
    </div>
  </main>

  <MainModal v-if="showModal" @close="closeModal">
    <!-- Modal Header -->
    <template #header>
      <div class="mainModal-header">
        <h2 class="font-bold">Weather Details</h2>
        <button @click="closeModal" class="px-4 py-1 text-sm bg-gray-300 rounded hover:bg-gray-400 transition">Close</button>
      </div>
    </template>
    <!-- Modal body -->
    <template #body>
      <div class="mainModal-body">
        <GetLocation></GetLocation>
      </div>
    </template>
    <!-- Modal Footer -->
    <template #footer>
      <div class="mainModal-footer text-xs">
        Version 1.0.2
      </div>
    </template>
  </MainModal>

</template>
