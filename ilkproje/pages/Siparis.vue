<template>
  <div>
    <app-header/>
    <div container>
       <div id="wrap " class="home">
       
      <div class="container mainContent">
        <div class="fullWidth.article">
        <div class="pageOrderQuery ">
          <div class= "pageOrderQuery__main">
            <div class="pageOrderQuery__title  "> Sipariş takibi</div>
            <div class="pageOrderQuery__subTitle">E-posta adresinizi ve sipariş numaranızı girerek siparişinizi
                <br>takip edebilir ve sipariş detaylarınıza erişebilirsiniz...</div>
            <siparis-takip/>
        </div>
    </div>
  </div>
  </div>
</div>
</div>
<app-footer/>
</div>
</template>

<script>
import SiparisTakip from '../components/KayıtSayfası/SiparisTakip.vue';
import AppHeader from '../components/Header/AppHeader.vue';
import AppFooter from '../components/Footer/AppFooter.vue';





export default{
  components: { SiparisTakip ,AppHeader,AppFooter},
  
     

}










</script>
<style>
.pageOrderQuery {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
}
.pageOrderQuery__main {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 100½;
    max-height: 700px; ;
    margin: 50px 0;
    padding: 50px 50px 30px 50px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 10%);
    margin-top: 200px;
}
    .custom-white-button {
    color:black;
    background-color:white;
    border: 1px solid black;
    letter-spacing: -1px;
    font-weight: bold;
  }
  .custom-white-button:hover {
    background-color: #ff5d5d;
    color: white;
    border: 1px solid #ff5d5d;
    transition: 0.15s color ease-in;
  }
  .lh-1{
    line-height: 0px;
  }
  .container.mainContent, .fullWidth.article {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    z-index: 0;
}
.pageOrderQuery__title {
    
    font-family: "TTNormsPro-Medium";
    font-size: 30px;
    color: #000;
    font-weight: 500;
    line-height: 22px;
    margin-left: 50px;
}
.pageOrderQuery__subTitle {
   
    font-family: "FreightMicroPro-Book";
    font-size: 15px;
    line-height: 22px;
    color: #626262;
    margin-left: 50px;
    margin-top: 50px;
}
#wrap {
    position: relative;
    margin: 0 auto;
    width: 100%;
}
.container.mainContent, .fullWidth.article {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    z-index: 0;
 
}
.altsatır{
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 18px;



  }
.container:before{
    display: table;
    content: " ";
}
.fullWidth {
    float: left;
    width: 100%;
    position: relative;
  
}
.mainContent .article > div {
    position: relative;
}
.pageLogin {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 100px;
    
    
    background-color: #f8f8f8;
}
.kayıt-button{

  background-color: #fff;
    color: #000;
    border: 1px solid #000;
    font-family: "TTNormsPro-Medium";
    opacity: 1;


}
.pageLogin__main {
 
    margin: 50px 0 62px 0;
    box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 10%);
    background-color: #fff;
    display: flex;
    margin-top: 200px;
    ;
    
}
.pageLogin__left {
    position: relative;
    border-right: 1px solid rgba(0,0,0,.1);
    width: 50%;
    padding: 50px 50px 40px 50px;
   
}
.pageLogin__left, .pageLogin__right {
    width: 50%;
    padding: 50px 50px 40px 50px;
}
.pageLogin__title {
    margin-bottom: 10px;
    font-family: "TTNormsPro-Medium";
    font-size: 20px;
    color: #000;
    font-weight: 500;
}
.pageLogin__subTitle {
    margin-bottom: 30px;
    font-family: "FreightMicroPro-Book";
    font-size: 16px;
    line-height: 22px;
    color: #626262;
}
.custom-button {
    color: white;
    background-color: #1c1c1c;
    border: 0px;
    letter-spacing: -1px;
    font-weight: bold;
  }
  .custom-orange-link{
    color: #5f545f;
    transition: 0.13s color ease-in;
  }
 

div{
  padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
}
  </style>