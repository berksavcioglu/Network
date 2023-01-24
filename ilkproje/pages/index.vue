<template>
<div>
<app-header/>
<router-view :key="$route.fullPath"></router-view>
<router-link to="/ana"></router-link>
<dongu-carousel/>
<coklu-advert/>
<item-carousel  :title="'Sizin İçin Seçtiklerimiz'" :items="items"/>

<app-sepet/>
<social-network :socialItems='socialItems'/>
<app-footer/>
</div>



</template>

<script>
import CokluAdvert from '../components/Anasayfa/CokluAdvert.vue';
import DonguCarousel from '../components/Anasayfa/DonguCarousel.vue';
import SocialNetwork from '../components/Anasayfa/SocialNetwork.vue';
import ItemCarousel from '../components/Anasayfa/itemCarousel.vue'
import AppFooter from '../components/Footer/AppFooter.vue';
import AppHeader from '../components/Header/AppHeader.vue';
import AppSepet from '../components/Sepet/AppSepet.vue';
import Item from '../components/Appitems/item.vue';
// import {db} from '@/firebase'






export default {
  components: { AppHeader, DonguCarousel, CokluAdvert, AppFooter,  AppSepet ,SocialNetwork,ItemCarousel, Item},
  name: 'IndexPage',

  
  data() {
        return {
            carouselImages:[
             
                
            ],
            
            socialItems:[
                {id:1,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_GS7q03D307Pf.jpg'},
                {id:2,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_dRLIMe7LIeTA.jpg'},
                {id:3,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211122_AxtYvX7jXyT4.jpg'},
                {id:4,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_BRgAmpXL01iV.jpg'},
                {id:5,url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_90YK3r8OOrBE.jpg'},
                {id:6,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_GDdqXToQbaHq.jpg'},
                {id:7,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_GS7q03D307Pf.jpg'},
                {id:8,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'},
                {id:9,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211005_wL3zKipu6dF1.jpg'},
                {id:10,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'}
            ],


            items:[
               {id: 1,topPhoto:"https://img-network.mncdn.com/mnresize/336/517/productimages/8683798078868_1.jpg",name:"Kiremit Sweatshirt",price: 1099.0,},
               {id: 2,topPhoto:"https://img-network.mncdn.com/mnresize/336/517/productimages/2400406766742_1.jpg",name:"Ekru Sweatshirt",price: 1099.0,},
               {id: 3,topPhoto:"https://img-network.mncdn.com/mnresize/336/517/productimages/8683798000807_1.jpg",name:"Siyah Bluz",price: 1099.0,},
               {id: 4,topPhoto:"https://img-network.mncdn.com/mnresize/336/517/productimages/8683798089772_1.jpg",name:"Siyah Sweatshirt",price: 1099.0,},
               {id: 5,topPhoto:"https://img-network.mncdn.com/mnresize/336/517/productimages/8683798102242_1.jpg",name:"Saks Payetli Sweatshirt",price: 1499.0,},



            ]
        }
    },
    }
  

 
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
