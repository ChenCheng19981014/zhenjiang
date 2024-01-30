<template>
  <fit-layout>
    <div class="index">
      <!-- 头部 -->
      <div class="header"></div>

      <!-- 子路由 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </fit-layout>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@keyframes upEnterDown {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.index {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: radial-gradient(circle at 50% 50%, #00162600 0%, #0016260d 19%, #001626 50%);

  .header {
    background-image: url("./../assets/img/顶栏.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 122px;
    position: absolute;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top: 0;
    z-index: 1;
    animation: enter 1s ease;
  }

}
</style>
