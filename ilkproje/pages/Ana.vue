 <template>
    <div>
 <dongu-carousel v-if="carouselImages.length > 0" :items="carouselImages"/>
<item-carousel  :title="'Sizin İçin Seçtiklerimiz'" :items="items"/>
 <coklu-advert/>
 <social-network :socialItems='socialItems'/>
</div>
</template>

<script>
import CokluAdvert from '../components/Anasayfa/CokluAdvert.vue';
import DonguCarousel from '../components/Anasayfa/DonguCarousel.vue';
import itemCarousel from '../components/Anasayfa/itemCarousel.vue';
import SocialNetwork from '../components/Anasayfa/SocialNetwork.vue';

export default {
    components: {
        DonguCarousel,
        CokluAdvert,
        itemCarousel ,
        SocialNetwork
       
    },
    created() {
        this.$store.dispatch('fetchItemsForHome');
         getMainAdverts().then(response => {
            console.log(response.data.getMainAdverts.mainAdverts);
            console.log(this.carouselImages);

            this.carouselImages = response.data.getMainAdverts.mainAdverts;
            console.log(this.carouselImages);
           
        });
    },
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
    }
    
           
        }


</script>
