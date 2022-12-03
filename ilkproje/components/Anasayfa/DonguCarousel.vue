<template>
  
    <div class="spacer">
        &nbsp;
   
    
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators m-0">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active mx-2"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            class="mx-2"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            class="mx-2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img-network.mncdn.com/bannerimages/HP_22_2022112906411365063.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img-network.mncdn.com/bannerimages/slider_2022120105542934516.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img-network.mncdn.com/bannerimages/Slider_2022120112271244868.gif"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </template>
   
    <script>
export default {};
</script>

<style>
.carousel-indicators button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50%;
}
.spacer
{
    width: 100%;
    height: 70px;
}
</style>
