<template>
  <div class="river">
    <!-- 正常相机 -->
    <camera-normal v-show="cameraState.normal" @close="close"></camera-normal>
    <!-- 报警相机 -->
    <camera-error v-show="cameraState.error" @close="close"></camera-error>
    <!-- 警告相机 -->
    <camera-warn v-show="cameraState.warn" @close="close"></camera-warn>

    <!-- loading -->
    <load v-show="!loadingEnd"></load>
    <!-- 左侧 -->
    <left class="page-left"></left>

    <div class="title"></div>

    <div class="back" @click="backTomap"></div>

    <!-- 右侧 -->
    <right class="page-right"></right>

    <!-- 场景 -->
    <scene @loadOver="loadOver"></scene>
  </div>
</template>
<script>
import left from "./compoents/left.vue";
import right from "./compoents/right.vue";
import scene from "./../../components/three-scene/index.vue";
import bus from "./../../lib/bus.js";
import router from "@/router/index.js";
export default {
  name: "river",
  components: {
    scene,
    left,
    right,
  },
  data() {
    return {
      showScene: "",
      loadingEnd: false,
      cameraState: {
        normal: false,
        error: false,
        warn: false,
      },
    };
  },
  mounted() {
    this.showScene = scene;

    // 设置面板的显示隐藏
    bus.$on("setCameraState", this.showCurrentCamera.bind(this));
  },
  methods: {
    // 场景加载结束
    loadOver() {
      this.loadingEnd = true;
    },

    // 返回主页面
    backTomap() {
      router.replace({ name: "map" });
    },

    showCurrentCamera(type) {
      Object.keys(this.cameraState).map((cameraType) => {
        this.cameraState[cameraType] = cameraType === type;
      });
    },

    close() {
      this.cameraState.normal = false;
      this.cameraState.error = false;
      this.cameraState.warn = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.river {
  width: 100%;
  height: 100%;
  position: absolute;

  .page-left {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
  }

  .page-right {
    z-index: 2;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }

  .title {
    width: 378px;
    height: 47px;
    position: absolute;
    background-image: url("./../../assets/img/悬浮.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top: 135px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
  }

  .back {
    width: 199px;
    height: 47px;
    position: absolute;
    background-image: url("./../../assets/img/按钮.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 2;
    right: 0;
    bottom: 3.3%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
