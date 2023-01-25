<template>
  <section class="container-fluid overflow-hidden">
    <div class="d-flex flex-column justify-content-center mt-5 text-center">
      <div>
        <h3 class="fw-bolder" style="color: black">#SocialNetWork</h3>
      </div>
      <div class="mt-2 socialFont">
        <span>Stilinizle ilham vermeye hazır mısınız?</span>
      </div>
      <div class="mt-2 socialFont">
        <span>Siz de fotoğrafınız ile NetWork.com.tr’de yer alma şansını yakalamak
          istiyorsanız,</span>
      </div>
      <div class="mt-2 socialFont">
        <span>NetWork stilinizi #SocialNetWork hashtag’i ile @networkonline’ı mention
          ederek ve etiketleyerek paylaşın,</span>
      </div>
      <div class="mt-2 socialFont">
        <span>#SocialNetWork’ün parçası olun.</span>
      </div>
      <div class="mt-5 d-flex justify-content-center">
        <button class="custom-socialNetwork-button p-0 px-1 d-flex justify-content-start align-items-center"
          type="button">
          <img src="../static/images/insta.jpg" class="mx-2" alt="">
          <p class="p-0 m-0">Bizi Instagram'da Takip Et</p>
        </button>
      </div>
    </div>
    <v-sheet class="mx-auto " elevation="2" max-width="2400">
      <v-slide-group v-model="model" class="pa-4" mandatory show-arrows>
        <v-slide-item  v-for="n in socialItems" :key="n">
          <v-card :color="active ? 'primary' : 'grey lighten-1'"  height="400" width="300">
            <v-row class="fill-height" align="center" justify="center">
              <img :src="n.url" width="300" alt="">
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <div class="mt-2 d-flex justify-content-center p-3 ">
      <button class="custom-btn p-3 m-7 ">
        Daha Fazla
      </button>
    </div>
  </section>


</template>

<script>
export default {
  data() {
    return {
      socialItems: [
        { id: 1, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_GS7q03D307Pf.jpg' },
        { id: 2, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_dRLIMe7LIeTA.jpg' },
        { id: 3, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211122_AxtYvX7jXyT4.jpg' },
        { id: 4, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_BRgAmpXL01iV.jpg' },
        { id: 5, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_90YK3r8OOrBE.jpg' },
        { id: 6, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_GDdqXToQbaHq.jpg' },
        { id: 7, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20221125_GS7q03D307Pf.jpg' },
        { id: 8, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg' },
        { id: 9, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211005_wL3zKipu6dF1.jpg' },
        { id: 10, url: 'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg' }
      ],
    }
  },
}
</script>


<style>
.advert-margin {

  margin-bottom: 16px;




}
</style>
