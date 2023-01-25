<template>
  <div class="row mt-4 m-auto">

    <template>
      <v-sheet elevation="8">
        <v-slide-group class="pa-4 mt-2" mandatory show-arrows>
          <v-slide-item v-for="(item, index) in data" :key="index" v-slot="{ active, toggle }">
            <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="700" width="400"
            @click="toggle,$emit('itemDetail',item)">
              <v-row class="fill-height" align="center" justify="center">
                <v-card class="mx-auto " max-width="374">

                  <v-img height="500" :src=item.src>
                  </v-img>

                  <v-card-title>${{ item.unitPrice }}</v-card-title>
                  <v-card-text>
                    <div>{{ item.productName }} </div>
                    <v-divider class="mx-4"></v-divider>

                  </v-card-text>


                  <div v-if="checkLoginSituation" class="d-flex justify-content-center">
                    <button @click="addToBasket(item)" class="btn btn-sm btn-dark text-light w-50">Sepete Ekle</button>
                  </div>




                </v-card>

              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </template>


    <hr class="mt-5 text-secondary" />

  </div>
</template>


<script>
import { collection, addDoc,doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "~/firebase";
import { mapGetters } from "vuex"
export default {
  props: ["data"],
  methods: {
    async addToBasket(item) {
      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        basket: arrayUnion(item)
      });


    }
  },

  computed: {

    ...mapGetters(['checkLoginSituation', 'getUser',])

  }
}
</script>
