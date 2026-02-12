<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const bike = route.state?.bike ?? null;
const borderColor = route.state?.borderColor ?? "#ff8647";
const formattedPrice = route.state?.formattedPrice ?? "€ 0,00";
</script>

<template>
  <div v-if="loading">Laden...</div>

  <div v-else-if="bike" class="detail">
    <!-- IMAGE SIDE -->
    <div class="image-side">
      <img :src="imageUrl" :style="{ borderColor }" alt="fiets afbeelding" />
    </div>

    <!-- TEXT SIDE -->
    <div class="text-side">
      <h1>
        {{ bike.properties?.brand?.values?.[0]?.value }}
      </h1>

      <h2>
        {{ bike.properties?.model?.values?.[0]?.value?.user }}
      </h2>

      <p class="type">
        {{ bikeInfo.label }}
      </p>

      <p>
        {{ bike.properties?.color_description?.values?.[0]?.value?.user }}
      </p>

      <p>
        Kilometerstand:
        {{ bike.objects?.[0]?.km_age ?? 0 }} km
      </p>

      <p class="price">
        {{
          formatPrice(
            bike.pricing?.ecommerce_price_cents ??
              bike.pricing?.pos_sales_price_cents ??
              0,
          )
        }}
      </p>
    </div>
  </div>

  <div v-else>Fiets niet gevonden</div>
</template>

<style scoped>
.detail {
  display: flex;
  gap: 60px;
  padding: 60px;
  align-items: flex-start;
}

.image-side {
  flex: 1;
}

.image-side img {
  width: 100%;
  border-radius: 24px;
  border: 6px solid;
  object-fit: cover;
}

.text-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.type {
  font-size: 0.9rem;
  opacity: 0.7;
}

.price {
  font-size: 2rem;
  font-weight: bold;
}
</style>
