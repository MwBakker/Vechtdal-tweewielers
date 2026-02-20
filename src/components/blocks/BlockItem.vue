<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const props = defineProps({
  item: Object,
  index: Number,
});

const detailLink = computed(() => {
  return `${route.path}/${props.item.barcode}`;
});

const colors = ["#ff8647", "#ff5c49", "#d61a67", "#600026"];

const formatPrice = (cents) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);

const formattedPrice = formatPrice(
  props.item.pricing?.ecommerce_price_cents ??
  props.item.pricing?.pos_sales_price_cents ??
  0,
);

const borderColor = computed(() => {
  return colors[props.index % colors.length];
});

const imageUrl = computed(() => {
  return (
    props.item.properties?.images?.values?.[0]?.value?.[0]?.url_large ?? null
  );
});

const typeMap = {
  "1A00": { key: "city", label: "Stadsfiets" },
  "1A01": { key: "city-electric", label: "Elektrische stadsfiets" },
  "1E00": { key: "mountain", label: "Mountainbike" },
  "1E01": { key: "mountain-electric", label: "Elektrische mountainbike" },
  "1F00": { key: "hybrid", label: "Crosshybride" },
  "1G00": { key: "race", label: "Racefiets" },
  "1B00": { key: "trekking", label: "Hybride fiets" },
  "1B01": { key: "trekking-electric", label: "Elektrische hybride fiets" },
  "1C00": { key: "kids", label: "Kinderfiets" },
};

const bikeInfo = computed(() => {
  const code = props.item.properties?.article_sub_group?.values?.[0]?.code;

  return (
    typeMap[code] ?? {
      key: "default",
      label: "Fiets",
    }
  );
});

const placeholderImage = computed(() => {
  return `/assets/icon/bike/${bikeInfo.value.key}.png`;
});
</script>

<template>
  <router-link :to="{
    name: 'detail',
    params: {
      type: route.path.split('/')[2],
      barcode: item.barcode,
    },
  }" class="card" :style="{ '--card-color': borderColor }">
    <div class="top">
      <img :src="imageUrl || placeholderImage" alt="fiets afbeelding" />
      <h2> {{ item.properties?.brand?.values?.[0]?.value }} </h2>
      <h3> {{ item.properties?.model?.values?.[0]?.value?.user }} </h3>
    </div>
    <div class="content">
      <p class="type"> {{ bikeInfo.label }} </p>
      <p class="description">
        {{ item.properties?.color_description?.values?.[0]?.value?.user }}
      </p>
      <p v-if="item.objects?.[0]?.km_age && item.objects?.[0]?.km_age > 0" class="km">
        {{ item.objects[0].km_age }} km
      </p>
    </div>
    <p class="price">
      {{
        formatPrice(
          item.pricing?.ecommerce_price_cents ??
          item.pricing?.pos_sales_price_cents ??
          0,
        )
      }}
    </p>
  </router-link>
</template>

<style scoped lang="scss">
.card {
  width: 24%;
  height: 512px;
  border-radius: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.85);
  border: 4px solid var(--card-color);
  overflow: hidden;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: var(--card-color);
    transform: translateY(-4px);

    img {
      transform: scale(1.08);
    }
  }
}

img {
  object-fit: cover;
  display: block;
  border: 4px solid black;
  height: 224px;
  width: 100%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-bottom: 16px;
  transition: transform 0.4s ease;
}

.model {
  font-weight: bold;
}

.type {
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: -4px;
}

.description {
  font-size: 0.9rem;
  color: #666;
}

.price {
  font-weight: bold;
  font-size: 1.1rem;
}

.km {
  font-size: 0.85rem;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .card {
    width: 47%;
    height: 472px;
    padding-bottom: 16px;
  }

  .content,
  h2,
  h3 {
    padding: 0 12px;
  }

  img {
    height: 196px;
  }

  p {
    margin: 0;
  }
}
</style>
