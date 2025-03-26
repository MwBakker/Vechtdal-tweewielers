<template>
    <rowOverlapsed class="row" link="movanext.nl" title="Fietshelmen" imgSrc="helmets.jpg"
                   text="De cijfers liegen er niet om. Er zijn steeds meer fietsongelukken met ernstig (hersen)letsel tot gevolg. 
                        Het dragen van een helm vermindert de kans op ernstig hersenletsel met 60 procent, een dodelijk hersenletsel zelfs met 71 procent. 
                        Vechtdal Tweewielers heeft altijd een breed assortiement helmen op voorraad" />
   </template> 
   
   <script>
   import rowOverlapsed from '../../components/row-overlapsed.vue';
   export default {
     components: { rowOverlapsed },
     name: "bikeCarrier",
   };
   </script>
   
   <style scoped>
   .row {
     flex: 1;
   }
   </style>