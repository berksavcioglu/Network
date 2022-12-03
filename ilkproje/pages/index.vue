<template>
 <div>
             
<app-header/>
<dongu-carousel/>
<nuxt-link to='{path:"/Ana.vue"}'></nuxt-link>
</div>







</template>

<script>
import DonguCarousel from '../components/Anasayfa/DonguCarousel.vue';
import AppHeader from '../components/Header/AppHeader.vue';





export default {
  components: { AppHeader, DonguCarousel ,},
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
