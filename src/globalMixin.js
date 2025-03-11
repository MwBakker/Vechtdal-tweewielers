export default {
    methods: {
        getImageSrc(url) {
            return new URL(`./assets/${url}`, import.meta.url).href
        },
    },
};
