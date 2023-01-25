<template>
  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" :src="selectedItem?.src" width="250" /> </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div class="mt-4 mb-3">
                                <h5 class=""> {{selectedItem?.productName}} </h5>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">{{selectedItem?.unitPrice}} TL </span>

                                </div>
                            </div>

                            <div class="sizes mt-5">
                                <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" checked> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M"> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L"> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL"> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"> <span>XXL</span> </label>
                            </div>
                            <div class="cart mt-4 align-items-center"> <button @click="addToBasket(selectedItem)" class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import { collection, addDoc,doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "~/firebase";
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      selectedItem: null,

    }
  },

  methods: {
    async addToBasket(item) {

      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        basket: arrayUnion(item)
      });


    }
  },



  mounted() {


    this.selectedItem = this.getSelectedProduct,
    console.log(this.selectedItem);


  },

  computed: {

...mapGetters(['checkLoginSituation', 'getSelectedProduct', 'getUser'])

}
}
</script>
