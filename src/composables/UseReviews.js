import { ref, onMounted } from "vue";

export function useReviews(placeId) {
    const reviews = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    const truncate = (text, maxLength = 375) => {
        if (!text) return "";
        return text.length > maxLength
            ? text.slice(0, maxLength) + "...."
            : text;
    };

    const fetchReviews = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetch(
                `https://vechtdaltweewielers.nl/proxy/reviews.php?placeId=${placeId}`
            );
            const data = await response.json();

            if (!Array.isArray(data.reviews)) {
                reviews.value = [];
                return;
            }

            reviews.value = data.reviews
                .filter(r => r.rating >= 3 && r.text?.text)
                .map(r => ({
                    naam: r.authorAttribution?.displayName || "Anoniem",
                    beschrijving: truncate(r.text.text),
                    beoordeling: r.rating,
                }));
        } catch {
            error.value = "Kan de reviews niet laden. Probeer het later opnieuw.";
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(fetchReviews);

    return {
        reviews,
        isLoading,
        error,
    };
}
