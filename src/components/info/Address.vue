<template>
    <div id="address">
        <p>Bruchterweg 21</p>
        <p>7772 BD, Hardenberg</p>
    </div>
    <div id="contact">
        <p id="phone-nr">0523 225 104</p>
        <p>info@vechtdaltweewielers.nl</p>
    </div>
</template>

<style scoped>
p {
    margin: 10px 0;
}

#address p {
    text-align: left;
}

#contact p {
    text-align: right;
}

@media (max-width: 480px) {
    #address,
    #contact {
        p {
            text-align: center;
        }
    }
}
</style>