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
    <div id="cyclesoft">
        <h2>Hier komt binnenkort onze voorraad!</h2>

        <!-- <div v-if="loading">⏳ Data laden…</div>

        <div v-else-if="error" class="error">
            ❌ {{ error }}
        </div>

        <div v-else>
            <ul v-if="Array.isArray(data)">
                <li v-for="(item, index) in data" :key="index">
                    {{ item }}
                </li>
            </ul>

            <pre v-else>{{ data }}</pre>
        </div> -->
    </div>
</template>

<style scoped>
#cyclesoft {
    padding: 1rem;
    padding-top: 156px;
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
