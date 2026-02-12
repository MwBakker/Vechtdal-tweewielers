import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import BikeStock from "@/views/bicycles/Stock.vue";
import BikeDetail from "@/views/bicycles/Detail.vue";
import Brands from "@/views/bicycles/Brands.vue";
import BikeCompany from "@/views/bicycles/Bike-company.vue";
import Lease from "@/views/Lease.vue";
import Accessoires from "@/views/accessory/Accessories.vue";
import Maintenance from "@/views/Maintenance-repair.vue";
import Rental from "@/views/Rental.vue";
import Info from "@/views/Contact.vue";
import JobOffer from "@/views/Job-offer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/fietsen/nieuw", name: "stock-new", component: BikeStock },
    { path: "/fietsen/gebruikt", name: "stock-used", component: BikeStock },
    {
      path: "/fietsen/:type/:barcode",
      name: "bike-detail",
      component: BikeDetail,
      props: true,
    },
    { path: "/fietsen/merken", name: "brands", component: Brands },
    {
      path: "/fietsen/bedrijfs-gerelateerd",
      name: "bikeCompany",
      component: BikeCompany,
    },
    { path: "/lease", name: "lease", component: Lease },
    { path: "/accessoires", name: "accessoires", component: Accessoires },
    {
      path: "/onderhoud-en-reparatie",
      name: "maintenance",
      component: Maintenance,
    },
    { path: "/verhuur", name: "rental", component: Rental },
    {
      path: "/over",
      name: "about",
      component: () =>
        window.matchMedia("(max-width: 768px)").matches
          ? import("@/views/about/AboutMobile.vue")
          : import("@/views/about/About.vue"),
    },
    { path: "/contact", name: "contact", component: Info },
    { path: "/vacatures", name: "jobOffer", component: JobOffer },
  ],
  scrollBehavior(_, __, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
