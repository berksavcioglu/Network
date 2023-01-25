<template>
  <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">Your Name</label>
                      <input v-model="userData.name" type="text" id="form3Example1c" class="form-control" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <input v-model="userData.email" type="email" id="form3Example3c" class="form-control" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Password</label>
                      <input v-model="userData.password" type="password" id="form3Example4c" class="form-control" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <input v-model="userData.password2" type="password" id="form3Example4cd" class="form-control" />

                    </div>
                  </div>



                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button @click="registerToPage(userData)" type="button" class="btn btn-dark btn-lg text-white">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://www.network.com.tr/assets/v2/img/Network.jpg"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>



<script>

import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import { db } from "@/firebase"

export default {
  data() {
    return {
      userData: {
        name: null,
        email: null,
        password: null,
        password2:null
      }
    }
  },

  methods: {
    async registerToPage(userData) {

      if (userData.password == userData.password2) {
        const data = {
        ...userData
        }
        delete data.password2

        const userId = (Math.floor(Math.random() * 10000) + 1)

        await setDoc(doc(db, "users",data.email), {
          userId: userId,
          ...data
        });


        setTimeout(() => {
          this.$router.push({ path: "/login" })
        }, 1500);

      } else {
        alert("Şifreler uyumsuz")
      }


    }
  },
}
</script>
