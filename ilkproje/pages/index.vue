<template>
<div>
<app-header/>
<dongu-carousel/>
<coklu-advert/>
<app-sepet/>
<social-network/>
<app-footer/>
</div>



</template>

<script>
import CokluAdvert from '../components/Anasayfa/CokluAdvert.vue';
import DonguCarousel from '../components/Anasayfa/DonguCarousel.vue';
import SocialNetwork from '../components/Anasayfa/SocialNetwork.vue';

import AppFooter from '../components/Footer/AppFooter.vue';
import AppHeader from '../components/Header/AppHeader.vue';
import AppSepet from '../components/Sepet/AppSepet.vue';






export default {
  components: { AppHeader, DonguCarousel, CokluAdvert, AppFooter,  AppSepet ,SocialNetwork},
  name: 'IndexPage'}
  

 
</script>
<style>
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import 'bootstrap/dist/css/bootstrap.css';
</style>
