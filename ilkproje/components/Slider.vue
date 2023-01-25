<template>

  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in sliderList" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>

</template>

<script>
export default {
  data() {
    return {
      sliderList: [
        { src: "https://img-network.mncdn.com/bannerimages/slider_2023012513414241390.jpg" },
        { src: "https://img-network.mncdn.com/bannerimages/slider_2023012005581114806.jpg" },
        { src: "https://img-network.mncdn.com/bannerimages/slider_2023011707141979505.jpg" }
      ]
    }
  },
}
</script>
