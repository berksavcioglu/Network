<template>
    <div>
      <div class="container">
       
      </div>
       <Collection/>
        <div class="container">
          <ItemSlider :data="data" @itemDetail="itemDetail"/>
        </div>
        <SocialNetwork />
        <FooterUst />
        <FooterIcerik/>
        <FooterCopyright/>
  
    </div>
  </template>
<script>

import { ref } from 'vue'
export default {
  setup() {
    const count = ref(item)
    return {
      count
    }
  },
    async mounted() {
    const q = query(collection(db, "users"), where("email", "==", this.getUser.email));
    const basket = await getDocs(q);
    basket?.forEach((doc) => {

      this.dbBasketData?.push(doc.data().basket)

      this.dbBasketData?.forEach((item) => {
        item?.forEach((item) => {
          this.basketData.push(item)
        })
      })
    });
    this.basketData.forEach((item) => {


this.totalPrice = this.totalPrice + item.unitPrice

})

this.$store.commit('setTotalPrice', this.totalPrice)
 
console.log(this.getTotalPrice);

  }
  }

</script>
