<template>
    <li class='li-nav' @click="clicked('/onderhoud-en-reparatie', 'maintenance')">
        <div class='li-select'>
            <img :style="{ opacity: selected == subject ? 1 : 0 }" :src="gearIcon" />
            <p>{{ title }}</p>
            <img :style="{ opacity: selected == subject ? 1 : 0 }" :src="gearIcon" />
        </div>
    </li>
</template>

<script>
export default {
    name: "list-item-icon",
    props: {
        title: String,
        subject: String,
        route: String,
    },
    methods: {
        clicked(route, name) {
            this.selected = name;
            this.$router.push(route);
            window.scrollTo(0, 0);
        },
    }
};
</script>

<style scoped>

p {
  font-style: oblique;
  /* font-size: 1.2rem; */
  color: white;
  margin: 0;
}

.li-select {
    display: flex;
    justify-content: center;
    img {
        height: 19px;
        margin: 0 5%;
        transition: opacity 0.5s;
    }
}
</style>