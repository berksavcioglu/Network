<template>
<div>
   <img :src="item.topPhoto" class="card-img-top custom-card-img my-2 pointer" :class="{'custom-card-hover':itemSettings.isHover}" alt="...">
   <div class="text-start row mb-5 pointer" >
     <h5 :style="{color:itemSettings.color , fontSize:itemSettings.fontSize}" :class="itemSettings.col +' '+itemSettings.color" class="card-title">{{item.name}}</h5>
     <p :class="itemSettings.col +' '+ itemSettings.textLocation" class="card-text">{{item.price}} ₺</p>
   </div>
  </div>
 




 
 </template>
 
 
 
   <script>
   export default {
       props:{
         item:{
           type:Object,
           default:() =>({
             id:0,
             url:"",
             title:"",
             price:""
           })
         },
         itemSettings:{
           type:Object,
           default:()=>({
          
             col:"col-12",
             textLocation:"",
             color:"#a7a7a7",
             isHover:false,
             fontSize:"14px"
           })
         }
       },
       data()
       {return {
      items: [
        {
          content: {
            id: 1,
            url:"https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
            title:"Vizon Kapüşonlu Büzgü Detaylı Pardösü",
            price: 2299.0,
          },
          
        },
        {
          content: {
            id: 2,
            url: "https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
            title: "Vizon Kapüşonlu Büzgü Detaylı Pardösü",
            price: 2399.0,
          },
         
        },
      ],
    };
   
       }
   }
   </script>
   
   <style>
   .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
   .slick-slider .slick-track, .slick-slider .slick-list {
  
    transform: translate3d(0, 0, 0);
  
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
   .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
      touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.a-slider-arrow.swiper-button-prev {
    left: 1px;
    float: left;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
.a-slider-arrow {
    position: absolute;
    z-index: 2;
    top: 50%;
    display: -webkit-inline-box;
    display: inline-flex;
    width: 50px;
    height: 50px;
    background-image: none;
    color: #4a4a4a;
    font-size: 50px;
}
   .custom-card-img{
       border: 1px solid rgba(167, 167, 167, 0.4);
   }
   .card-title{
       margin-top: 12px;
       font-weight: bold;
       color: rgba(167, 167, 167, 1);
   }
   .card-text{
       font-weight: bold;
   }
   .ortalama{
   
    justify-content: flex-start ;
}

   
   .custom-card-hover:hover{
     border: 1px solid black;
     transition: 0.9s all ease;
   }
   </style>