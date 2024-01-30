<template>
  <div class="park-index">
    <!-- loading -->
    <load v-show="!loadingEnd"></load>
    <!-- 楼栋标牌 -->
    <buildInfo v-show="buildDom" @close="close"></buildInfo>
    <!-- 头部 -->
    <header class="page-header"></header>
    <!-- 左侧 -->
    <left class="page-left"></left>
    <!-- 底部 -->
    <bottom class="page-bottom"></bottom>
    <!-- 右侧 -->
    <right class="page-right"></right>
    <!-- 地图 -->
    <threePark @loadOver="loadOver"></threePark>
  </div>
</template>
<script>
import left from "./components/left.vue";
import right from "./components/right.vue";
import bottom from "./components/bottom.vue";
import bus from "./../../lib/bus.js";
import threePark from "./../../components/park/index.vue";
export default {
  name: "park-index",
  components: {
    left,
    right,
    bottom,
    threePark,
  },
  name: "",
  data() {
    return {
      buildDom: false,
      showScene: "",
      loadingEnd: false,
    };
  },
  mounted() {
    this.showScene = threePark;

    // 设置面板的显示隐藏
    bus.$on("showBuildSprite", this.showBuildSprite.bind(this));
  },
  methods: {
    // 场景加载结束
    loadOver() {
      this.loadingEnd = true;
    },

    close() {
      this.buildDom = false;
    },

    // 显示对应楼栋标牌
    showBuildSprite() {
      this.buildDom = true;
    }
  },
};
</script>

<style scoped lang="scss">
.park-index {
  width: 100%;
  height: 100%;
  position: relative;

  .page-header {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 668px;
    height: 126px;
    top: 158px;
    background-image: url("./../../assets/img/park-index-header.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .page-left {
    z-index: 2;
    position: absolute;
    top: 118px;
    left: 40px;
    height: 921px;
  }

  .page-bottom {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 40px;
  }

  .page-right {
    z-index: 2;
    height: 921px;
    top: 118px;
    position: absolute;
    right: 40px;
  }
}
</style>
