<script setup>
import { ref, onMounted } from 'vue';

const data = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchCyclesoft = async () => {
    loading.value = true;
    error.value = null;

    try {
        const response = await fetch('/proxy/cyclesoft.php');

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        data.value = await response.json();
    } catch (err) {
        error.value = 'Kon CycleSoft data niet ophalen';
        console.error(err);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchCyclesoft);
</script>

<template>
    <section class="cyclesoft-view">
        <h1>CycleSoft data</h1>

        <div v-if="loading">⏳ Data laden…</div>

        <div v-else-if="error" class="error">
            ❌ {{ error }}
        </div>

        <div v-else>
            <!-- Voorbeeld: als de API een lijst retourneert -->
            <ul v-if="Array.isArray(data)">
                <li v-for="(item, index) in data" :key="index">
                    {{ item }}
                </li>
            </ul>

            <!-- Fallback: toon raw JSON -->
            <pre v-else>{{ data }}</pre>
        </div>
    </section>
</template>

<style scoped>
.cyclesoft-view {
    padding: 1rem;
}

.error {
    color: red;
    font-weight: bold;
}

pre {
    background: #f6f6f6;
    padding: 1rem;
    overflow-x: auto;
}
</style>
