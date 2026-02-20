<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useBikeStore } from "@/stores/bike";
import BikeCard from "@/components/blocks/BlockItem.vue";

import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const route = useRoute();

const data = ref(null);
const loading = ref(true);
const error = ref(null);

const selectedBrands = ref([]);
const selectedPriceRange = ref([0, 0]);

const bikeStore = useBikeStore();

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
    bikeStore.setBikes(data.value.data.data);
  } catch (err) {
    error.value = "Kon CycleSoft data niet ophalen";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const normalize = (value) => {
  if (!value) return "";
  return value.toString().trim().toLowerCase().replace(/\s+/g, " ");
};

const formatLabel = (value) => {
  if (!value) return "";
  return value
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const baseFilteredItems = computed(() => {
  if (!data.value?.data?.data) return [];

  return data.value.data.data.filter((item) => {
    const obj = item.objects?.[0];

    if (route.name === "stock-new" && (obj?.is_used || obj?.is_demo)) {
      return false;
    }

    if (route.name === "stock-used" && !obj?.is_used) {
      return false;
    }

    return true;
  });
});

const availableBrands = computed(() => {
  if (!baseFilteredItems.value.length) return [];

  const map = new Map();

  baseFilteredItems.value.forEach(item => {
    const raw = item.properties?.brand?.values?.[0]?.value;
    const normalized = normalize(raw);

    if (normalized && !map.has(normalized)) {
      map.set(normalized, formatLabel(raw));
    }
  });

  return Array.from(map.entries()).map(([value, label]) => ({
    value,
    label
  }));
});

const priceRange = computed(() => {
  if (!baseFilteredItems.value.length) {
    return { min: 0, max: 0 };
  }

  const prices = baseFilteredItems.value.map(item =>
    (item.pricing?.ecommerce_price_cents || 0) / 100
  );

  return {
    min: Math.floor(Math.min(...prices)),
    max: Math.ceil(Math.max(...prices)),
  };
});

const filteredItems = computed(() => {
  if (!baseFilteredItems.value.length) return [];

  return baseFilteredItems.value.filter((item) => {
    const brand = normalize(
      item.properties?.brand?.values?.[0]?.value
    );

    const price =
      (item.pricing?.ecommerce_price_cents || 0) / 100;

    if (
      selectedBrands.value.length &&
      !selectedBrands.value.includes(brand)
    ) {
      return false;
    }
    if (
      price < selectedPriceRange.value[0] ||
      price > selectedPriceRange.value[1]
    ) {
      return false;
    }
    return true;
  });
});

watch(priceRange, (range) => {
  selectedPriceRange.value = [range.min, range.max];
}, { immediate: true });

onMounted(fetchCyclesoft);
</script>

<template>
  <div id="cyclesoft">
    <div v-if="loading">⏳ Data laden…</div>
    <div v-else-if="error" class="error">❌ {{ error }}</div>
    <div v-else>
      <div class="filters">
        <h2>Merk</h2>
        <div id="brands">
          <label v-for="brand in availableBrands" :key="brand.value">
            <input type="checkbox" :value="brand.value" v-model="selectedBrands" />
            {{ brand.label }}
          </label>
        </div>
        <h2>Prijs</h2>
        <div class="price-values">
          €{{ selectedPriceRange[0] }} — €{{ selectedPriceRange[1] }}
        </div>
        <Slider id="slider" v-model="selectedPriceRange" :min="priceRange.min" :max="priceRange.max" :step="50"
          :tooltips="true" />
      </div>
      <div class="grid">
        <BikeCard v-for="(item, index) in filteredItems" :key="item.barcode" :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#cyclesoft {
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(20px, 3vw, 64px);
  padding-top: 106px;
  padding-bottom: 24px;
}

.filters {
  padding-bottom: 42px;

  h2 {
    margin-bottom: 24px;
  }

  #brands {
    display: flex;
    width: 50%;
    margin: 24px auto;
    flex-wrap: wrap;
    gap: 12px;
  }

  label {
    display: flex;
    align-items: center;
    width: 45%;
    text-align: left;
  }

  .price-values {
    font-weight: 600;
    margin-bottom: 16px;
  }

  #slider {
    padding: 0 28px;

    :deep(.slider-connect) {
      background: #ff8647;
    }

    :deep(.slider-handle) {
      background: #ff8647;
      border: 3px solid #fff;
      box-shadow: 0 0 0 2px #ff8647;
    }

    :deep(.slider-tooltip) {
      background: #ff8647;
      border: none;
    }
  }
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
    padding: 96px 16px 24px 16px;
  }

  .filters {
    #brands {
      width: 90%;
    }
  }
}
</style>
