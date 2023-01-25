<template>
  <div>
    <app-header />

    <div container>
      <div id="wrap " class="home">

        <div class="container mainContent">
          <div class="fullWidth.article">
            <div class="pageLogin">
              <div class="pageLogin__main">
                <div class="pageLogin__left ">
                  <div class="pageLogin__title "> GİRİŞ YAP</div>
                  <div class="pageLogin__subTitle">Network.com.tr’ye kayıtlı bilgilerinizle hızlı giriş yapın.</div>


                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form1Example1">Email address</label>
                      <input v-model="userData.email" type="email" id="form1Example1" class="form-control" />

                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form1Example2">Password</label>
                      <input v-model="userData.password" type="password" id="form1Example2" class="form-control" />

                    </div>

                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                      <div class="col d-flex justify-content-end">
                        <!-- Simple link -->
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <!-- Submit button -->
                    <button @click="loginToPage(userData)" type="submit" class="btn btn-dark btn-block text-light">Sign in</button>



                </div>

                <div class="pageLogin__right">
                  <div class="pageLogin__title "> ÜYE OL</div>
                  <div class="pageLogin__subTitle">Network.com.tr’ye üye olarak birçok avantajdan faydalanabilirsiniz.
                    Öne çıkan avantajlar;</div>
                  <div class="am-auto mt-3">

                    <img src="../static/images/heart.png" alt=""> Kampanyalardan öncelikli olarak haberdar
                    <br>olabilirsiniz.
                  </div>
                  <div class="am-auto mt-3">
                    <img src="../static/images/heart.png" alt=""> Network mobil uygulamasi ile alişveriş keyfinize
                    <br> telefonunuzdan devam edebilirsiniz..
                  </div>
                  <div class="w-75 my-5">
                    <button class="kayıt-button w-100 p-3">


                      <router-link class="text-decoration-none" :to="{path:'/register'}">ÜYE OL</router-link>

                    </button>
                  </div>
                  <div class="w-75 my-5">
                    <button class="kayıt-button w-100 p-3">SİPARİS TAKİBİ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase"

export default {
  data() {
    return {
      userData: {
        email: null,
        password: null,
      }
    }
  },

  methods: {
    async loginToPage(userData) {
      let user = {
        ...userData
      }


      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (user.password !== docSnap.data().password) {
          alert("Şifreler uyuşmuyor")
        } else {
          user = docSnap.data()
          delete user.password
          this.$store.commit('setUser',user)
          this.$store.commit('setLogin', true)
          // user.userId = docSnap.data().userId,
          // user.basket = docSnap.data().basket
          this.$router.push({ path: '/' })

        }
      } else {
        alert("Böyle bir kullanıcı mevcut değil")
      }
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

  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;

  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;






}

;

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

.router-button-text {
  color: #777777;
}

.register-active {
  background-color: #1c1c1c;
  color: white;
  border-color: #1c1c1c !important;
}

.ls-small {
  letter-spacing: -1px;
}

.container.mainContent,
.fullWidth.article {
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

.container.mainContent,
.fullWidth.article {
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
  z-index: 0;

}

.altsatır {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 18px;



}

.container:before {
  display: table;
  content: " ";
}

.fullWidth {
  float: left;
  width: 100%;
  position: relative;

}

.mainContent .article>div {
  position: relative;
}

.pageLogin {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;


  background-color: #f8f8f8;
}

.kayıt-button {

  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  font-family: "TTNormsPro-Medium";
  opacity: 1;


}

.pageLogin__main {
  width: 100%;
  max-width: 1000px;
  margin: 50px 0 62px 0;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  display: flex;
  margin-top: 100px;
  ;

}

.pageLogin__left {
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, .1);
  width: 50%;
  padding: 50px 50px 40px 50px;

}

.pageLogin__left,
.pageLogin__right {
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

.custom-orange-link {
  color: #5f545f;
  transition: 0.13s color ease-in;
}


div {
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
</style>
