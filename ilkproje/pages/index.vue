
import FooterCopyright from '~/components/FooterCopyright.vue';

<template>
  <div>
    <div class="container">
      <Navbar />
    </div>


    <Slider />
    

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

import { collection, getDocs, query, where } from "firebase/firestore";
import { mapGetters } from "vuex";
import { db } from "~/firebase";
export default {

  data() {
    return {
      data: [],
    }
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.data.push(doc.data())

    });
  },

  methods: {
    itemDetail(item) {

      this.$store.commit("setSelectedProduct", item)
      this.$router.push({ name: "about", params: { item }, query: { id: item.id } })
    }
  },
}
</script> 


