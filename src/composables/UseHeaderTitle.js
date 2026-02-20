import { computed } from "vue";
import { useRoute } from "vue-router";
import { useBikeStore } from "@/stores/bike";

export function useHeaderTitle(menuItems) {
    const route = useRoute();
    const bikeStore = useBikeStore();

    function capitalize(label = "") {
        return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
    }

    return computed(() => {
        const name = route.name;
        if (name === "detail") {
            const barcode = route.params.barcode;
            const bike = bikeStore.getBikeByBarcode(barcode);
            if (!bike) return "Fiets";
            const brand = bike.properties?.brand?.values?.[0]?.value ?? "";
            const model =
                bike.properties?.model?.values?.[0]?.value?.user ?? "";
            return `${brand} ${model}`;
        }
        if (name === "home") {
            return capitalize("home");
        }
        const standaloneTitles = {
            legal: "Privacy & Juridisch",
        };
        if (standaloneTitles[name]) {
            return standaloneTitles[name];
        }
        for (const item of menuItems) {
            if (item.routeName === name) {
                return capitalize(item.label);
            }

            if (item.children || item.submenu) {
                const children = item.children || item.submenu;
                const sub = children.find((s) => s.routeName === name);
                if (sub) return capitalize(sub.label);
            }

            if (item.routeMatch?.includes?.(name)) {
                return capitalize(item.label);
            }
        }
        return "";
    });

}
