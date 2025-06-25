<script setup lang="ts">
import { ref, type Ref } from "vue";

type Geolocation = {
  latitude: number;
  longitude: number;
};

const coords: Ref<Geolocation | undefined> = ref();
</script>
