import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import BikeElectric from '@/views/bicycles/Bike-electric.vue';
import BikeCity from '@/views/bicycles/Bike-city.vue';
import BikeSport from '@/views/bicycles/Bike-sport.vue';
import BikeCompany from '@/views/bicycles/Bike-company.vue';
import Lease from '@/views/Lease.vue';
import BicycleCarrier from '@/views/accessory/Bicycle-carrier.vue';
import Helmets from '@/views/accessory/Helmets.vue'
import Maintenance from '@/views/Maintenance-repair.vue';
import Rental from '@/views/Rental.vue';
import About from '@/views/about/About.vue';
import AboutMobile from '@/views/about/About-mobile.vue';
import Info from '@/views/Contact.vue';
import JobOffer from '@/views/Job-offer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fietsen/elektrisch',
      name: 'Bike-electric',
      component: BikeElectric
    },
    {
      path: '/fietsen/stad',
      name: 'Bike-city',
      component: BikeCity
    },
    {
      path: '/fietsen/sportief',
      name: 'Bike-sport',
      component: BikeSport
    },
    {
      path: '/fietsen/bedrijfs-gerelateerd',
      name: 'Bike-company',
      component: BikeCompany
    },
    {
      path: '/lease',
      name: 'Lease',
      component: Lease
    },
    {
      path: '/accessoires/fietsendragers',
      name: 'Accessories-bicycle_carrier',
      component: BicycleCarrier
    },
    {
      path: '/accessoires/fietshelmen',
      name: 'Accessories-helmets',
      component: Helmets
    },
    {
      path: '/onderhoud-en-reparatie',
      name: 'Maintenance',
      component: Maintenance
    },
    {
      path: '/verhuur',
      name: 'Rental',
      component: Rental
    },
    {
      path: '/over',
      name: 'About',
      beforeEnter(to, from, next) {
        if (window.innerWidth < 1024) {
          next({ name: 'About-mobile' }); // Redirect to mobile version
        } else {
          next(); // Continue to the original component
        }
      },
      component: About,
    },
    {
      path: '/over',
      name: 'About-mobile',
      component: AboutMobile
    },
    {
      path: '/contact',
      name: 'Info',
      component: Info
    },
    {
      path: '/vacatures',
      name: 'Job Offer',
      component: JobOffer
    },
  ]
})

export default router
