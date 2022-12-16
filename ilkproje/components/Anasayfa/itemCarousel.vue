<template>

  <div class="d-flex flex-column justify-content-center align-items-center">
    <h4>{{ title }}</h4>
   <div @click="gotodetailpage()" class="d-flex flex-row justify-content-center align-items-center">
   
    
   
     <div v-for="item in items" :key="item.id ">
          <item
            :style="{ width: itemCarouselsettings.itemWidth }"
            @click="gotodetailpage()"
            :item="item"
            
          
            class="pointer col-6 p-2 m-2"
          />
        </div>
      </div>
        <div class="mt-2 mb-5 w-25 " v-if="itemCarouselsettings.buttonVisible">
        <router-link to="/allitems">
          <input class="custom-carousel-button w-75 p-3" type="button" value="Tümünü Gör" />
        </router-link>
      </div>
    </div>
 
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Navigation, Slide } from 'vue3-carousel';
   import 'vue3-carousel/dist/carousel.css';
  import Item from '../Appitems/item.vue';
  export default defineComponent({
    name: 'ExamplePagination',
    components: {
      
       Slide,
       Navigation,
      Item,
    },
    props: {
      itemCarouselsettings: {
        type: Object,
        default: () => ({
          itemWidth: '17rem',
          mobile: 2,
          tablet: 3,
          desktop: 5,
          buttonVisible: true,
        }),
      },
      title: {
        type: String,
        default: '',
      },
      items: {
        type: Array,
        default: () => ([])
      }
    },
    data: (instance) => ({
      // carousel settings
      settings: {
        itemsToShow: instance.itemCarouselsettings.mobile,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: instance.itemCarouselsettings.tablet,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: instance.itemCarouselsettings.desktop,
          snapAlign: 'start',
        },
      },
    }),
    methods: {
      gotodetailpage(id){
        this.$router.push({path: '/ItemDetail'});
        
        

      },
      goToItemPage(id) {
        this.$store.dispatch('fetchItem', id);
        this.$router.push({ name: 'ItemDetail',params: { id: id } });
      }
    }
  });
  </script>
  <style>
  .custom-carousel-button {
    color: rgb(82, 82, 82);
    background-color: transparent;
    border: 1px solid rgb(82, 82, 82);
    font-weight: bold;
    font-size: 15px;
  }
  .custom-carousel-button:hover {
    color: rgb(161, 161, 161);
    border: 1px solid rgb(161, 161, 161);
  }
  .custom-navigation {
    color: black !important;
    width: 45px !important;
    height: 45px !important;
    font-size: 35px !important;
    border: 1px solid black;
    background-color: transparent;
    margin-left: -20px;
    margin-right: -20px;
  }
  .carousel {
    position: relative;
    text-align: center;
    box-sizing: border-box;
  }
  
  
  .carousel * {
    box-sizing: border-box;
  }
  </style>