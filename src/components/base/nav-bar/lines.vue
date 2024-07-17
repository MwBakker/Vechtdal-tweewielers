<template>
    <div id="bottom-lines">
        <div id="line-yellow"></div>
        <div id="line-orange"></div>
        <div id="line-pink"></div>
        <div id="line-purple"></div>
    </div>
</template>

<script>
export default {
    name: "lines",
};
</script>

<style scoped>
#lines {
    position: relative;
}

#line-yellow {
    border-bottom: 6px solid #ff8647;
}

#line-orange {
    border-bottom: 6px solid #ff5c49;
}

#line-pink {
    border-bottom: 6px solid #d61a67;
}

#line-purple {
    border-bottom: 6px solid #600026;
}
</style>
