<template>
    <div id="info">
        <div id="address">
            <p>Bruchterweg 21</p>
            <p>7772 BD, Hardenberg</p>
        </div>
        <div id="contact">
            <p id="phone-nr">0523 225 104</p>
            <p>info@vechtdaltweewielers.nl</p>
        </div>
    </div>
</template>

<style scoped>
p {
    margin: 10px 0;
    font-size: 1.2rem;
}

#info {
    display: flex;
    justify-content: space-between;
    padding: 10px 1.25%;
}

#address p {
    text-align: left;
}

#contact p {
    text-align: right;
}
</style>