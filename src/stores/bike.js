import { defineStore } from "pinia";

export const useBikeStore = defineStore("bikeStore", {
    state: () => ({
        bikes: [],
    }),
    getters: {
        getBikeByBarcode: (state) => {
            return (barcode) =>
                state.bikes.find((bike) => bike.barcode === barcode);
        },
        getFormattedPrice: (state) => {
            return (barcode) => {
                const bike = state.bikes.find((b) => b.barcode === barcode);
                if (!bike) return "";

                const cents =
                    bike.pricing?.ecommerce_price_cents ??
                    bike.pricing?.pos_sales_price_cents ??
                    0;

                return new Intl.NumberFormat("nl-NL", {
                    style: "currency",
                    currency: "EUR",
                }).format(cents / 100);
            };
        },
    },
    actions: {
        setBikes(bikes) {
            this.bikes = bikes;
        },
    },
});
