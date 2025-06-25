<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits<{
    (e: 'close'): void
}>();

const mainModal = ref<HTMLDialogElement | null>(null);

onMounted(() => {
    mainModal.value?.showModal();
});

function closeModal() {
    emit('close');
    mainModal?.value?.close();
}
</script>


<template>
    <dialog ref="mainModal" class="mainModal-dialog">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </dialog>
</template>