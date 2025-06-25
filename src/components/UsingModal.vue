<script lang="ts" setup>
import { ref, type Ref } from "vue";
import MainModal from "./main-modal/MainModal.vue";
import { useModal } from "./main-modal/useModal";

const { showModal, openModal, closeModal } = useModal();

</script>

<template>
    <button @click="openModal" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Show modal
    </button>

    <MainModal v-if="showModal" @close="closeModal">
        <!-- Modal Header -->
        <template #header>
            <h2 class="text-xl font-bold">Weather Details</h2>
        </template>
        <!-- Modal body -->
        <template #body>
            <p>Here you can display weather information or any other content.</p>
        </template>
        <!-- Modal Footer -->
        <template #footer>
            <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"> Close
            </button>
        </template>
    </MainModal>
</template>