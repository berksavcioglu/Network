<template>
    <section id="login">
        <form action="">
          <div class="">
          
            <div id="mailArea" class="text-start m-auto mt-5 w-75 mx-2 align-self-start">
              <label class="d-block w-100 my-2 font-small custom-tlabel fw-bold  " for="mail">E-POSTA*</label>
              <input v-model="userData.email" class="w-100 py-2 custom-tinput" type="text" name="mail" id="mail">
            </div>
             <div id="passwordArea" class="m-auto text-start my-4 w-75 mx-2 align-self-start">
              <label class="d-block w-100 font-small my-2 custom-tlabel fw-bold" for="password">ŞİFRE*</label>
              <input v-model="userData.password" class="w-100 py-2 custom-tinput" type="text" name="password" id="password">
            </div>
           
            <div id="InfoArea" class="d-flex justify-content-between mx-0 mt-3 w-75">
              <div id="rememberMeArea" class="d-flex align-items-center">
                 <input type="checkbox"  id="check"/>
                  <label for="check" class="mx-2 align-self-start remember-pass-label  font-small fw-bold" >Beni Hatırla</label>
              </div>
              <div id="forgetPassword">
                <a href="#" class=" custom-orange-link  fw-bold font-small">Şifremi Unuttum</a>
              </div>
            </div>
            <div class="w-75 my-5">
              <button @click.prevent="login(userData)" class="custom-button w-100 p-3">GİRİŞ YAP</button>
            </div>
          </div>
        </form>
    </section>
  </template>
  
  <script>
  export default {
    name:"login",
    data() {
      return {
        userData: {
          email: "",
          password: "",
        },
      }
    },
    methods: {
      login(userData) {
        if (userData.email != "" && userData.password != "") {
          this.$store.dispatch('loginUser',{user:userData,items:this.$store.state.cart.items});
          this.$router.push('/');
        }
      },
    },
  }
  </script>
  
  <style>
  .container.mainContent, .fullWidth.article {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    z-index: 0;
}
.pageLogin__left {
    position: relative;
    border-right: 1px solid rgba(0,0,0,.1);
    justify-content:first baseline;
    align-content: baseline;
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
.custom-button {
    color: white;
    background-color: #1c1c1c;
    border: 0px;
    letter-spacing: -1px;
    font-weight: bold;
  }
  
.pageLogin__passwordRemember__forgot a {
    font-family: "TTNormsPro-Normal";
    font-size: 14px;
    color: #000;
    text-decoration: underline;
}
.unut{
    color:black;
  }
 


  
  .remember-pass-label{
    color: #5f545f ;
  }


  