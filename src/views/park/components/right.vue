<template>
  <div class="right">
    <div class="right-1"></div>

    <div class="right-2">
      <div class="right-2-title"></div>
      <div class="right-2-content">
        <div class="position">北门停车场监控002</div>
        <div class="swiper">
          <!-- 卡片走马灯 -->
          <el-carousel :interval="4000"  :autoplay="false" type="card" height="136px"
            indicator-position="none">
            <el-carousel-item v-for="item in 6" :key="item">
              <video src="./../../../assets/video/停车场视频.mp4" autoplay muted></video>
            </el-carousel-item>
          </el-carousel>

          <!-- swiper -->
          <div v-show="false" class="swiper-container" ref="Carousel">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in 3" :key="'video_' + index">
                <video src="./../../../assets/video/停车场视频.mp4" autoplay muted></video>
              </div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-3"></div>
  </div>
</template>
<script>
import mointerEcharts from "./components/mointerEcharts.vue";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css";
export default {
  components: {
    mointerEcharts,
  },
  data() {
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(this.$refs.Carousel, {
      direction: "horizontal", // 水平切换选项
      // loop: true, // 循环模式选项
      zoom: {
        maxRatio: 5, // 设置最大放大倍数
      },
      autoplay: 1500,
      // 如果需要前进后退按钮
      navigation: {
        pagination: ".swiper-pagination",
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  methods: {},
};
</script>
<style lang="scss">
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 158.18px;
  height: 136px;

  >video {
    height: 134px;
  }

  border: 2px solid #304355;
}

.is-active {
  box-sizing: border-box;
  width: 256px;
  height: 136px;
  margin-left: -10%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  >video {
    height: 120px !important;
  }
}

.is-active::before {
  content: '';
  position: absolute;
  display: block;
  width: 254px;
  height: 134px;
  border: 2px solid #304355;
  z-index: 10;
}


.el-carousel,
.el-carousel__container {
  width: 100%;
  height: 100%;
}

</style>

<style scoped lang="scss">

video {
  width: 240px;
  height: 120px;
  object-fit: cover;
  border: 2px solid #98cdff;
}

.right {
  width: 444px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .right-1 {
    width: 100%;
    height: 301px;
    background-image: url("./../../../assets/img/企业统计.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .right-2 {
    width: 100%;
    height: 253px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    .right-2-title {
      width: 100%;
      height: 40px;
      background-image: url("./../../../assets/img/园区监控title.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .right-2-content {
      width: 100%;
      height: 202px;
      padding: 16px 42px;
      background-image: linear-gradient(119deg, #3f475300 0%, #11161d 100%);
      border-radius: 16px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      .position {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: "SourceHanSansCN";
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
      }

      .swiper {
        width: 100%;
        height: 136px;

        .swiper-container {
          width: 100%;
          height: 100%;

          .swiper-slide {
            width: 240px !important;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper-slide-prev {}

          .swiper-slide-active {
            &::before {
              top: 0;
              left: 0;
              width: 256px;
              height: 136px;
              content: "";
              position: absolute;
              display: block;
              // border: 2px solid #99CEFF;
              // border: 2px solid red;
            }
          }
        }
      }
    }
  }

  .right-3 {
    width: 100%;
    height: 291px;
    background-image: url("./../../../assets/img/设施统计.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}</style>
