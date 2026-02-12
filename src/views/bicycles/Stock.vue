<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import BikeCard from "@/components/blocks/BlockItem.vue";

const route = useRoute();

const data = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchCyclesoft = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      "https://vechtdaltweewielers.nl/proxy/cyclesoft.php",
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    data.value = await response.json();
  } catch (err) {
    error.value = "Kon CycleSoft data niet ophalen";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const filteredItems = computed(() => {
  if (!data.value?.data?.data) return [];

  return data.value.data.data.filter((item) => {
    const obj = item.objects?.[0];

    if (route.name === "stock-new") {
      return !obj?.is_used && !obj?.is_demo;
    }

    if (route.name === "stock-used") {
      return obj?.is_used;
    }

    return true;
  });
});

onMounted(fetchCyclesoft);
</script>

<template>
  <div id="cyclesoft">
    <div v-if="loading">⏳ Data laden…</div>
    <div v-else-if="error" class="error">❌ {{ error }}</div>
    <div v-else>
      <div class="grid">
        <BikeCard
          v-for="(item, index) in filteredItems"
          :key="item.barcode"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#cyclesoft {
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(20px, 3vw, 64px);
  padding-top: 96px;
}

.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.error {
  color: red;
  font-weight: bold;
}

@media (max-width: 1024px) {
  #cyclesoft {
    padding-inline: clamp(20px, 3vw, 64px);
    padding: 132px 16px 24px 16px
  }
}
</style>
