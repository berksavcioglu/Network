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

      </div>

    </div>
    <hr />

    <div class="row">
      <div class="m-auto d-flex">

        <button class="btn btn-sm fw-bold">
          <h5 class="text-secondary">YENİ GELENLER</h5>
        </button>
        <button class="btn btn-sm fw-bold">
          <h5 class="text-secondary">KADIN</h5>
        </button>
        <button class="btn btn-sm fw-bold">
          <h5 class="text-secondary">ERKEK</h5>
        </button>
        <button class="btn btn-sm fw-bold">
          <h5 class="text-secondary">OUTLET</h5>
        </button>
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
}
</script>


<style>

</style>
