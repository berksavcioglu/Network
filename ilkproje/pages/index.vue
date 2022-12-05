<template>
<div>
             
<app-header/>
<router-link :to="{path:'/ana'}">ana </router-link>
<dongu-carousel/>
<coklu-advert/>
<app-footer/>

</div>
</template>

<script>
import CokluAdvert from '../components/Anasayfa/CokluAdvert.vue';
import DonguCarousel from '../components/Anasayfa/DonguCarousel.vue';
import AppFooter from '../components/Footer/AppFooter.vue';
import AppHeader from '../components/Header/AppHeader.vue';






export default {
  components: { AppHeader, DonguCarousel, CokluAdvert, AppFooter ,},
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
</style>
