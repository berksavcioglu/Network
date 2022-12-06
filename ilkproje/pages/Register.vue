<template>
  <section>
    <div class="container-fluid  ">
        <img :style="imageWidth(activeTab)" src="../static/images/login.jpg" class="img-thumbnail p-0 m-0 image-register  w-100" alt="login" />
      <div class="login-position  w-22 row bg-white border-left border-right border-bottom">
        <div class="col-12 row p-0 m-0 bb-4">
          <button
            class="col-4 text-uppercase m-0 py-2 border-0 px-0 border-end fw-bold router-button-text bg-c-gray fs-6 ls-small"
            :class="activeButton(Tabs.Login)"
            @click="activeTabChange(Tabs.Login)"
          >GİRİŞ YAP</button>
          <button
            class="col-4 text-uppercase m-0 py-3 border-0 px-0 border-end bg-c-gray router-button-text fw-bold fs-6 ls-small"
            :class="activeButton(Tabs.Register)"
            @click="activeTabChange(Tabs.Register)"
          >ÜYE OL</button>
          <button
            class="col-4 text-uppercase m-0 py-3 border-0  px-0 bg-c-gray fw-bold router-button-text fs-6 ls-small"
            :class="activeButton(Tabs.SiparisTakip)"
            @click="activeTabChange(Tabs.SiparisTakip)"
          >SİPARİŞ TAKİBİ</button>
        </div>
        <div class="col-12 d-flex flex-column justify-content-around">
         <keep-alive>
          <component :is="activeTab"></component>
         </keep-alive>
        </div>
      </div>
      <img />
    </div>
</section>
</template>

<script>
import Login from '../components/KayıtSayfası/Login.vue';
import Register from '../components/KayıtSayfası/Register.vue';
import SiparisTakip from '../components/KayıtSayfası/SiparisTakip.vue';
export default {
  components: {
    Login,
    Register,
    SiparisTakip
  },
  
  data() {
    return {
      activeTab: "Login",
      Tabs: {
        'Login':{name:'Login',height:null},
        'Register':{name:'Register',height:'1500px'},
        'SiparisTakip':{name:'SiparisTakip',height:null},
      },
      
    }
  },
  methods: {
    activeTabChange(tab) {
      this.activeTab = tab.name;
    },
    activeButton(tab){
      return {'register-active' : (tab.name == this.activeTab)};
    },
    imageWidth(currentTabName){

      let tab = this.Tabs[currentTabName];

      return tab.height != null ? {height:tab.height} : {}
    }
  },

}
</script>

<style>
.image-register {
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.login-position {
  position: absolute;
  right: 2%;
  top: 165px;
  z-index: 2;
}
.w-22 {
  width: 415px;
}
.bg-c-gray {
  background-color: #f8f8f8;
}
.font-small {
  font-size: 15px;
}
.bb-4 {
  border-bottom: 4px solid #1c1c1c;
}
.router-button-text{
  color: #777777;
}
.register-active {
  background-color: #1c1c1c;
  color: white;
  border-color: #1c1c1c !important;
}
.ls-small{
  letter-spacing: -1px;
}
</style>