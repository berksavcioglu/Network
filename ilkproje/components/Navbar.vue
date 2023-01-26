<template>
  <div>
    <div class="row mt-3">

      <div class="col-4">
        <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" alt="SearchBar"
          class="mb-1" width="30">
        <input type="text" placeholder="Elbise,Ceket ara..." class="searchBar border border-dark p-2" />
      </div>

      <div class="col-4 d-flex justify-content-center">
        <img src="https://www.network.com.tr/assets/v2/img/Network.jpg" width="200">
      </div>

      <div class="col-4 d-flex justify-content-end">
        <button v-if="!checkLoginSituation" class="btn btn-sm">
          <router-link :to="{path:'/login'}">
            <img src="../static/images/profile.png" />
          </router-link>
        </button>
        <button v-if="checkLoginSituation" class="btn btn-sm">
          <img src="../static/images/heart.png" />
        </button>
        <button v-if="checkLoginSituation" class="btn btn-sm">
          <router-link :to="{path:'/basket'}"><img src="../static/images/cart.png" /></router-link>
        </button>
        <button v-if="checkLoginSituation == true" class="btn btn-sm btn-dark " @click="logout">

<div class=" my-auto">

  <button type="button" class="btn btn-white">Logout</button>





</div>

</button>

      </div>
      

    </div>
    
    <hr />

    <div>
        <div class="container my-1" id="menu">
            <nav class="d-flex justify-content-around   px-5 mx-5">
                <a
                    v-for="category in categories"
                    :key="category.id"
                    class="black-color fs-6 p-0 pb-1 text-decoration-none menu-link"
                    href="#"
                    @click="goToItemsPage(category.id)"
                    @mouseover="showSubMenu(category)"
                    
                    
                >
                    <span class="fs-7">{{ category.name }}</span>
                </a>
                <header-alt-menu
                v-if="subtitles.length > 0"
                    :subtitles="subtitles"
                    :photo="currentCategoryPhoto"
                />
             </nav>
        </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex"
export default {

computed: {

    ...mapGetters(['checkLoginSituation','getTotalPrice'])

  },
  data() {
        return {
            logo: { id: 0, url: "https://www.network.com.tr/assets/v2/img/Network.jpg", width: "220px" },
            categories: [
                {
                    id: 0, name: "YENI GELENLER",
                    subtitles: [],
                    categoryPhoto: "https://img-network.mncdn.com//categoryimages/3_2022102610375934824.jpg"
                },
                {
                    id: 1, name: "KADIN",
                    subtitles: [
                        {   
                            id:3,
                            name: "Üst Giyim",
                            content: [
                                { id: 1, name: "Kazak" },
                                { id: 2, name: "Hırka" },
                                { id: 3, name: "Ceket" },
                                { id: 4, name: "Sweatshirt" },
                                { id: 5, name: "Elbise" },
                                { id: 6, name: "Gömlek" },
                                { id: 7, name: "Bluz" },
                                { id: 8, name: "T-Shirt" },
                                { id: 9, name: "Tulum" },
                                { id: 10, name: "Yelek" },
                                { id: 11, name: "Plaj Giyim" },
                            ],
                        },
                        {
                            id:4,
                            name: "Alt Giyim",
                            content: [
                                { id: 1, name: "Pantolon" },
                                { id: 2, name: "Denim Pantolon" },
                                { id: 3, name: "Casual Pantolon" },
                                { id: 4, name: "Etek" },
                                { id: 5, name: "Tayt" },
                                { id: 6, name: "Eşofman" },
                                { id: 7, name: "Şort" },
                            ],
                        },
                        {
                            id:5,
                            name: "Dış Giyim",
                            content: [
                                { id: 1, name: "Mont" },
                                { id: 2, name: "Pardösü" },
                                { id: 3, name: "Deri Mont" },
                                { id: 4, name: "Kaban" },
                                { id: 5, name: "Manto" },
                            ],
                        },
                        {
                            id:6,
                            name: "Ayakkabı",
                            content: [
                                { id: 1, name: "Bot" },
                                { id: 2, name: "Çizme" },
                                { id: 3, name: "Sneaker" },
                                { id: 4, name: "Ayakkabı" },
                                { id: 5, name: "Stiletto" },
                                { id: 6, name: "Babet" },
                                { id: 7, name: "Espadril" },
                                { id: 8, name: "Sandalet" },
                                { id: 9, name: "Terlik" },
                            ],
                        },
                        {
                            id:7,
                            name: "Aksesuar",
                            content: [
                                { id: 1, name: "Çanta" },
                                { id: 2, name: "Cüzdan" },
                                { id: 3, name: "El Çantası" },
                                { id: 4, name: "Atkı-Bere-Eldiven" },
                                { id: 5, name: "Kemer" },
                                { id: 6, name: "Takı" },
                                { id: 7, name: "Valiz" },
                                { id: 8, name: "Çorap" },
                            ],
                        }],
                    categoryPhoto: "https://img-network.mncdn.com//categoryimages/KADIN-KATEGORI_2022082311485695801.jpg"
                },
                {
                    id: 2,
                    name: "ERKEK", subtitles: [
                        {
                            id:8,
                            name: "Üst Giyim",
                            content: [
                                { id: 1, name: "Kazak" },
                                { id: 2, name: "Hırka" },
                                { id: 3, name: "Gömlek" },
                                { id: 4, name: "Sweatshirt" },
                                { id: 5, name: "Yelek" },
                                { id: 6, name: "Polo Yaka T-shirt" },
                                { id: 7, name: "T-Shirt" },
                                { id: 8, name: "Ceket" },
                                { id: 9, name: "Takım Elbise" },
                                { id: 10, name: "Smokin Takım Elbise" },
                            ],
                        },
                        {
                            id:9,
                            name: "Alt Giyim",
                            content: [
                                { id: 1, name: "Pantolon" },
                                { id: 2, name: "Denim Pantolon" },
                                { id: 3, name: "Casual Pantolon" },
                                { id: 4, name: "Şort" },
                                { id: 5, name: "Eşofman" },
                                { id: 6, name: "Play Giyim" },
                            ],
                        },
                        {
                            id:10,
                            name: "Dış Giyim",
                            content: [
                                { id: 1, name: "Palto" },
                                { id: 2, name: "Mont" },
                                { id: 3, name: "Deri Mont" },
                                { id: 4, name: "Kaban" },
                                { id: 4, name: "Pardösü" },
                            ],
                        },
                        {
                            id:11,
                            name: "Ayakkabı",
                            content: [
                                { id: 1, name: "Bot" },
                                { id: 2, name: "Ayakkabı" },
                                { id: 3, name: "Sneaker" },
                                { id: 4, name: "Loafer" },
                            ],
                        },
                        {
                            id:12,
                            name: "Aksesuar",
                            content: [
                                { id: 1, name: "Çanta-Cüzdan" },
                                { id: 2, name: "Kravat-Papyon" },
                                { id: 3, name: "Mendil" },
                                { id: 4, name: "Valiz" },
                                { id: 5, name: "Aksesuar" },
                                { id: 6, name: "Atkı-Bere-Eldiven" },
                                { id: 7, name: "Çorap" },
                                { id: 8, name: "Anahtarlık" },
                            ],
                        }],
                    categoryPhoto: "https://img-network.mncdn.com//categoryimages/ERKEK-KATEGORI_2022082311492058448.jpg",
                },

               
                {
                    id: 3, name: "YILBAŞI",
                    subtitles: [],
                    categoryPhoto: undefined

                },
                {
                    id: 4, name: "OUTLET",
                    subtitles: [{   
                            id:13,
                            name: "Tüm Giyim",
                            content: [
                                { id: 1, name: "Kazak" },
                                { id: 2, name: "Hırka" },
                                { id: 3, name: "Ceket" },
                                { id: 4, name: "Gömlek" },
                                { id: 5, name: "Bluz" },
                                { id: 6, name: "Sweatshirt" },
                                { id: 7, name: "Elbise" },
                                { id: 8, name: "T-Shirt" },
                                { id: 9, name: "Dış Giyim" },
                                { id: 10, name: "Yelek" },
                                { id: 11, name: "Tulum" },
                                { id: 12, name: "Plaj Giyim" },
                                { id: 13, name: "Pantolon" },
                                { id: 14, name: "Etek" },
                                { id: 15, name: "Şort" },
                            ],
                        },
                        {
                            id:14,
                            name: "Tüm Ayakkabı",
                            content: [
                                { id: 1, name: "Ayakkabı" },
                                { id: 2, name: "Çizme" },
                                { id: 3, name: "Bot" },
                               
                            ],
                        },
                        {
                            id:15,
                            name: "Tüm Aksesuar",
                            content: [
                                { id: 1, name: "Takı" },
                                { id: 2, name: "Eldiven Atkı" },
                                { id: 3, name: "Şal-Fular" },
                                { id: 4, name: "Çorap" },
                                
                            ],
                        },
                        {
                            id:16,
                            name: "Tüm Giyim",
                            content: [
                                { id: 1, name: "Kazak" },
                                { id: 2, name: "Gömlek" },
                                { id: 3, name: "Sweatshirt" },
                                { id: 4, name: "Yelek" },
                                { id: 5, name: "T-Shirt" },
                                { id: 6, name: "Ceket" },
                                { id: 7, name: "Dış Giyim" },
                                { id: 8, name: "Takım Elbise" },
                                { id: 9, name: "Smokin Takım Elbise" },
                                { id: 10, name: "Pantolon" },
                                { id: 11, name: "Plaj Giyim Erkek" },
                                { id: 12, name: "Şort" },
                            ],
                        },
                        {
                            id:17,
                            name: "Tüm Ayakkabı",
                            content: [
                                { id: 1, name: "Ayakkabı" },
                                { id: 2, name: "Loafer" },
                                { id: 3, name: "Sneaker" },
                                
                            ],
                        },
                        {
                            id:18,
                            name: "Tüm Aksesuar",
                            
                        }],
                    categoryPhoto: undefined
                },
            ],
            subtitles: [],
            currentCategoryPhoto: undefined
        };
    },
    methods: {
        showSubMenu(category) {
            this.subtitles = category.subtitles;
            this.currentCategoryPhoto = category.categoryPhoto;

        },
      
        goToItemsPage(id){
            this.$router.push({ name: "CategoryItemsPage", query: { categoryId: id }, params: { id: id } });
        },
        logout() {
      this.$store.commit('setUser', null)
      this.$store.commit('setLogin', false)
    }
    },
    
}
</script>


<style>

</style>
