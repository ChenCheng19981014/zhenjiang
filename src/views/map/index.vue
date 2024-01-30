<template>
  <div class="map">
    <!-- loading -->
    <load v-show="!loadingEnd"></load>
    <!-- 左侧 -->
    <left class="page-left"></left>
    <!-- 右侧 -->
    <right class="page-right"></right>
    <!-- 地图 -->
    <threeMap @loadOver="loadOver"></threeMap>
  </div>
</template>
<script>
import left from "./components/left.vue";
import right from "./components/right.vue";
import threeMap from "./../../components/map/index.vue";
export default {
  name: "map",
  components: {
    left,
    right,
    threeMap,
  },
  name: "",
  data() {
    return {
      showScene: "",
      loadingEnd: false,
    };
  },
  mounted() {
    this.showScene = threeMap;
  },
  methods: {
    // 场景加载结束
    loadOver() {
      this.loadingEnd = true;
    },
  },
};
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 100%;

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
    // animation: leftEnterRight 1s ease;
  }

  .page-right {
    z-index: 2;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    // animation: RightEnterLeft 1s ease;
  }
}
</style>
