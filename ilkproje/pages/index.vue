<template>
<div>
<app-header/>
<router-view :key="$route.fullPath"></router-view>
<router-link to="/ana"></router-link>
<dongu-carousel/>
<coklu-advert/>
<app-sepet/>
<social-network :socialItems='socialItems'/>
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
  name: 'IndexPage',
  data() {
        return {
            carouselImages:[
                
            ],
            
            socialItems:[
                {id:1,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211208_lSfTOLtnUFsn.jpg'},
                {id:2,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_dRLIMe7LIeTA.jpg'},
                {id:3,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211122_AxtYvX7jXyT4.jpg'},
                {id:4,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211007_FlyS3wAyd4TZ.jpg'},
                {id:5,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'},
                {id:6,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_dRLIMe7LIeTA.jpg'},
                {id:7,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211005_wL3zKipu6dF1.jpg'},
                {id:8,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'},
                {id:9,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211005_wL3zKipu6dF1.jpg'},
                {id:10,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'}
            ]
        }
    },
    computed:{
        items(){
            return this.$store.state.homeItems;
        }
    }}
  

 
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
