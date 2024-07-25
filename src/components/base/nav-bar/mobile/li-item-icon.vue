<template>
    <li class='li-nav' @click="clicked(routePath, subject)">
        <div class='li-select'>
            <img :style="{ opacity: selected == subject ? 1 : 0 }" src="@/assets/icons/gear.png" />
            <p>{{ title }}</p>
            <img :style="{ opacity: selected == subject ? 1 : 0 }" src="@/assets/icons/gear.png" />
        </div>
    </li>
</template>

<script>
export default {
    name: "list-item-icon",
    props: {
        title: String,
        subject: String,
        routePath: String,
        route: String,
    },
    methods: {
        clicked(route, name) {
            this.selected = name;
            this.$router.push(route);
            window.scrollTo(0, 0);
        },
    },
    data() {
        return {
            selected: 'home',
        }
    },
};
</script>

<style scoped>
p {
    font-style: oblique;
    margin: 0;
}

.li-select {
    width: 30%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    img {
        height: 19px;
        transition: opacity 0.5s;
    }
}
</style>