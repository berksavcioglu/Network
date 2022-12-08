<template>
    
<div>
<app-header/>
<div container>
       <div id="wrap " class="home">
       
      <div class="container mainContent">
        <div class="fullWidth.article">
        <div class="pageRegister">
          <div class= "pageRegister__main ">
            <div class="pageRegister__title "> Üye ol</div>
            <div class="pageRegister__subTitle">Network avantajlarından ve üyelerimize özel 
                <br>kampanyalarımızdan yararlanmak için üye olun..</div>
            <register/>
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
import AppHeader from '../components/Header/AppHeader.vue';
import Register from '../components/KayıtSayfası/Register.vue';
import AppFooter from '../components/Footer/AppFooter.vue';

export default{
  components: { AppHeader,Register,AppFooter },




}

</script>


<style>
.pageRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
}
.pageRegister__main {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: 50px 0;
    padding: 50px 50px 30px 50px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 10%);
    margin-top: 200px;
}
.pageRegister__title {
    margin-bottom: 9px;
    font-family: "TTNormsPro-Medium";
    font-size: 30px;
    color: #000;
    font-weight: 500;
    margin-left: 75px;
}
.pageRegister__subTitle {
    margin-bottom: 20px;
    font-family: "FreightMicroPro-Book";
    font-size: 20px;
    line-height: 22px;
    color: #626262;
    margin-left: 75px;
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