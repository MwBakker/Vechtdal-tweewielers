import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/fietsen/nieuw",
      name: "stock-new",
      component: () => import("@/views/bicycles/Stock.vue"),
    },
    {
      path: "/fietsen/gebruikt",
      name: "stock-used",
      component: () => import("@/views/bicycles/Stock.vue"),
    },
    {
      path: "/fietsen/:type/:barcode",
      name: "detail",
      component: () => import("@/views/bicycles/Detail.vue"),
      props: true,
    },
    {
      path: "/fietsen/merken",
      name: "brands",
      component: () => import("@/views/bicycles/Brands.vue"),
    },
    {
      path: "/fietsen/bedrijfs-gerelateerd",
      name: "company",
      component: () => import("@/views/bicycles/Company.vue"),
    },
    {
      path: "/lease",
      name: "lease",
      component: () => import("@/views/Lease.vue"),
    },
    {
      path: "/accessoires",
      name: "accessoires",
      component: () => import("@/views/accessory/Accessories.vue"),
    },
    {
      path: "/onderhoud-en-reparatie",
      name: "maintenance",
      component: () => import("@/views/Maintenance.vue"),
    },
    {
      path: "/verhuur",
      name: "rental",
      component: () => import("@/views/Rental.vue"),
    },
    {
      path: "/over",
      name: "about",
      component: () => import("@/views/about/About.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/vacatures",
      name: "jobs",
      component: () => import("@/views/JobOffer.vue"),
    },
    {
      path: "/juridisch",
      name: "legal",
      component: () => import("@/views/Legal.vue"),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: "smooth"
          })
        }, 100)
      })
    }
    return { top: 0 }
  }
});

export default router;
