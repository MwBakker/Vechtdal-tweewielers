<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useBikeStore } from "@/stores/bike";
import { useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const bikeStore = useBikeStore();
const loading = ref(false);
const barcode = route.params.barcode;
const colors = ["#ff8647", "#ff5c49", "#d61a67", "#600026"];

const fetchBikes = async () => {
  loading.value = true;

  try {
    const response = await fetch(
      "https://vechtdaltweewielers.nl/proxy/cyclesoft.php"
    );

    const data = await response.json();
    bikeStore.setBikes(data.data.data);
  } catch (err) {
    console.error("Fout bij ophalen fietsen:", err);
  } finally {
    loading.value = false;
  }
};

const formattedPrice = computed(() =>
  bikeStore.getFormattedPrice(barcode)
);

const borderColor = computed(() => {
  if (!bike.value) return colors[0];

  const hash = bike.value.barcode
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[hash % colors.length];
});

const bike = computed(() => {
  return bikeStore.getBikeByBarcode(barcode);
});

const imageUrl = computed(() => {
  return (
    bike.value?.properties?.images?.values?.[0]?.value?.[0]?.url_large ??
    null
  );
});

const category = computed(() => {
  return (
    bike.value?.properties?.product_group_sub?.values?.[0]?.value ??
    bike.value?.properties?.article_sub_group?.values?.[0]?.code ??
    null
  );
});

const specs = computed(() => {
  if (!bike.value?.properties) return [];

  const p = bike.value.properties;

  const frameSize =
    p?.framesize?.values?.[0]?.value
      ? p.framesize.values[0].value + " cm"
      : p?.framesize_description?.values?.[0]?.value ?? null;

  return [
    { label: "Frametype", value: p?.frametype?.values?.[0]?.value?.nl },
    { label: "Framemaat", value: frameSize }, { label: "Modeljaar", value: p?.model_year?.values?.[0]?.value },
    { label: "Categorie", value: p?.article_group?.values?.[0]?.value?.nl },
    { label: "Subcategorie", value: p?.article_sub_group?.values?.[0]?.value?.nl },
    { label: "Garantie", value: p?.warranty_type?.values?.[0]?.value, },
  ].filter(spec => spec.value);
});

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "stock-new" });
  }
}

onMounted(async () => {
  if (!bikeStore.bikes.length) {
    await fetchBikes();
  }
});

</script>

<template>
  <div v-if="loading">Laden...</div>
  <div v-else-if="bike" id="detail">
    <div id="back" @click="goBack">
      <span id="arrow">←</span>
      Terug naar overzicht
    </div>
    <img :src="imageUrl" :style="{ borderColor: borderColor }" alt="fiets afbeelding" />
    <div class="text-side">
      <div class="hero">
        <p class="price">
          {{ formattedPrice }}
        </p>
      </div>
      <div class="meta">
        <p v-if="category">
          <strong>Categorie:</strong> {{ category }}
        </p>
        <p>
          <strong>Kleur:</strong>
          {{ bike.properties?.color_description?.values?.[0]?.value?.user }}
        </p>
        <p v-if="bike.objects?.[0]?.km_age > 0">
          <strong>Kilometerstand:</strong>
          {{ bike.objects[0].km_age }} km
        </p>
      </div>
      <div v-if="specs.length" class="specs">
        <h3>Specificaties</h3>
        <div class="spec-list">
          <div v-for="(spec, index) in specs" :key="index" class="spec-row">
            <span class="spec-label">{{ spec.label }}</span>
            <span class="spec-value">{{ spec.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Fiets niet gevonden</div>
</template>

<style scoped lang="scss">
#detail {
  display: flex;
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: clamp(20px, 3vw, 64px);
  padding-top: 132px;
  padding-bottom: 72px;
}

img {
  width: 50%;
  height: 100%;
  border-radius: 24px;
  border: 6px solid;
  object-fit: cover;
}

#back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  opacity: 0.75;
  transition: all 0.2s ease;
}

#back:hover {
  opacity: 1;
  transform: translateX(-4px);
}

.text-side {
  flex: 1;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .type {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  .price {
    font-size: 2rem;
    font-weight: bold;
  }

  .specs {
    margin-top: 40px;
  }

  .spec-list {
    width: 75%;
    margin: 0 auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .spec-row {
    display: flex;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    justify-content: space-between;
  }

  .spec-label {
    opacity: 0.7;
    font-weight: 500;
  }

  .spec-value {
    font-weight: 600;
  }
}

@media (max-width: 1024px) {
  #detail {
    padding: 96px 24px 56px 24px;
    flex-direction: column;
    gap: 48px;

    img {
      width: 100%;
    }
  }

  .spec-list {
    width: 100%;
  }
}
</style>
