<template>
    <div>
    <footer-ust/>
    <footericerik/>
   <footer-copyright/>
</div>
</template>

<script>
import FooterCopyright from './FooterCopyright.vue';
import Footericerik from './Footericerik.vue';

import FooterUst from './FooterUst.vue';


export default {
   
   components:{
       FooterUst,
      Footericerik,
      FooterCopyright,
      
   }
}


</script>

<style>
.c-black {
    color: black;
}
.w-10 {
    width: 10%;
}
.c-gray {
    color: #626262;
}
.small-font {
    font-size: small;
}

.c-black:hover {
    color: black !important;
}
.pointer {
    cursor: pointer;
}
.footer-text {
    color: #626262;
    font-family: FreightMicroPro-Book;
    font-size: 14px;
    line-height: 20px;
}
.footer-title {
    font-family: TTNormsPro-Medium;
    font-size: 22px;
    line-height: 22px;
    margin: 0px 0px 10px;
}
.mr-5 {
    margin-right: 30px;
}
.ml-0 {
    margin-left: 0px !important;
}
.pl-5 {
    padding-left: 35px !important;
}
</style>