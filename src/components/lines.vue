<script setup>
defineProps({
    size: String
})
</script>
<template>
    <div class="lines">
        <div id="line-yellow" :style="{ 'border-width': size }"></div>
        <div id="line-orange" :style="{ 'border-width': size }"></div>
        <div id="line-pink" :style="{ 'border-width': size }"></div>
        <div id="line-purple" :style="{ 'border-width': size }"></div>
    </div>
</template>

<style scoped>
.lines {
    width: 100%;
}

#line-yellow {
    border-bottom: solid #ff8647;
}

#line-orange {
    border-bottom: solid #ff5c49;
}

#line-pink {
    border-bottom: solid #d61a67;
}

#line-purple {
    border-bottom: solid #600026;
}
</style>
