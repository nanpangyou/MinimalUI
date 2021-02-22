<template>
  <div>
    <h1>Carousel</h1>
    <div style="margin: 10px 0">
      <m-carousel
        :selected.sync="carouselSelected"
        :enableAutoPlay="true"
        :autoPlayDelay="3000"
        :nav="true"
      >
        <m-carousel-item :name="'info'">
          <div class="xx-box">1info</div>
        </m-carousel-item>
        <m-carousel-item :name="'sport'">
          <div class="xx-box">2sport</div>
        </m-carousel-item>
        <m-carousel-item :name="'finance'"
          ><div class="xx-box">3finance</div>
        </m-carousel-item>
        <m-carousel-item :name="'other'"
          ><div class="xx-box">4other</div>
        </m-carousel-item>
      </m-carousel>
    </div>
  </div>
</template>
<script>
import MCarousel from "../../../../src/components/carousel/carousel";
import MCarouselItem from "../../../../src/components/carousel/carousel-item";
export default {
  components: {
    "m-carousel": MCarousel,
    "m-carousel-item": MCarouselItem,
  },
  data() {
    return { carouselSelected: "info" };
  },
};
</script>
<style lang="scss">
.xx-box {
  background: #aaa;
  color: #fff;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>