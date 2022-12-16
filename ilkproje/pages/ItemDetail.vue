<template>
    <div>
        <app-header/>
    <section v-if="item != null" class="header-margin container">
        <app-breadcrumb />
        <div class="row">
            <div class="col-8 text-center ">
                <item-detail-photo-list :photoList="item.photos" />
            </div>
            <div class="col-4 text-center">
                <item-detail-content :itemDetails="item" />
            </div>
        </div>
    </section>
    <item-carousel
        :itemCarouselsettings="itemCarouselSettings"
        :title="'İlginizi Çekebilecek Ürünler'"
        :items="İtems"
    />
  <item-carousel :itemCarouselsettings="itemCarouselSettings" :title="'Görünümü Tamamla'" :items="CompleteOutfit" />
    <item-carousel :itemCarouselsettings="itemCarouselSettings" :title="'Son Gezilenler'" :items="lastViewedItems" />
<app-footer/>
</div>
</template>

<script>
import AppBreadcrumb from "../components/appBreadcrumb.vue";
import ItemDetailPhotoList from "../components/ItemDetailPage/ItemDetailPhotoList.vue";
import ItemDetailContent from "../components/ItemDetailPage/ItemDetailContent.vue";
import ItemCarousel from "../components/Anasayfa/itemCarousel.vue";
import AppHeader from "../components/Header/AppHeader.vue";
import AppFooter from '../components/Footer/AppFooter.vue';
import item from "../components/Appitems/item.vue";
export default {
   components: { AppBreadcrumb, ItemDetailPhotoList, ItemDetailContent, ItemCarousel,AppHeader, AppFooter,item },

    
    // data() {
    //     return {
         
    //         itemCarouselSettings: {
    //             itemWidth: "21rem",
    //             mobile: 2,
    //             tablet: 3,
    //             desktop: 4,
    //             buttonVisible: false
    //         },

    //     }
    // },
    data() {
        return {
            item: {
                content: {
                    id: 1,
                    type:"NETWORK",
                    name: "Kiremit Sweatshirt",
                    price: 1099.00,
                    colorOptions: [
                        { name: 'Haki', color: "#625e45" },
                        { name: 'Camel', color: "#c5a076" },
                        { name: 'Siyah', color: "#6b360c" },
                        { name: 'Antrasit', color: "#000000" },
                        { name: 'Ekru', color: "#535051" },
                        { name: 'Kiremit', color: "#f7f7f4" },
                    ],
                  
                    sizes: ["XS", "S", "M", "L", "XL"],
                    details: {
                        refNo: "1075927-224",
                        content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                            "%98 Pamuk,%2 Elastan",
                            "Normal (Regular) Bel",
                            "Dar (Slim) Paça",
                            "Jean Pantolon",
                            "Fermuar Kapatmalı",
                            "5 Adet Cepli",
                        ],
                        model: {
                            boy: "177 cm",
                            gogus: "83 cm",
                            bel: "59 cm",
                            kalça: "89 cm",
                            ayak_Numarası: "40"
                        },
                        sample_size: "27"
                    },

                },
                photos: ["https://img-network.mncdn.com/mnresize/491/754/productimages/8683798078868_1_1560_2400.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/8683798078868_2_1560_2400.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/8683798078868_3_1560_2400.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/8683798078868_4_1560_2400.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/8683798078868_5_1560_2400.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/8683798078868_doku_1560_2400.jpg"
                ],
            },
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
.header-margin {
    margin-top: 180px;
}
</style>