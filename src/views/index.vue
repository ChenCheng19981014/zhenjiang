<template>
  <fit-layout>
    <div class="index">
      <!-- 头部 -->
      <div class="header"></div>

      <!-- 返回系统 -->
      <div class="backToSystem" @click="$router.replace({ name: 'map' })"></div>

      <!-- 用户 -->
      <div class="user"></div>

      <!-- 子路由 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </fit-layout>
</template>
<script>
import autofit from 'autofit.js'

export default {
  data() {
    return {};
  },
  mounted() {
    // autofit.init({
    //   dw: 2400,
    //   dh: 1500,
    //   el: "#app",
    //   resize: true
    // })
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
  // background-image: url("./../assets/img/scene-mask.png");
  // background-size: 100% 100%;
  // background-repeat: no-repeat;

  .header {
    background-image: url("./../assets/img/顶栏.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 161px;
    position: absolute;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    top: 0;
    z-index: 1;
    animation: enter 1s ease;
  }


  .backToSystem {
    top: 34px;
    left: 517px;
    width: 165.93px;
    height: 32px;
    position: absolute;
    background-image: url("./../assets/img/backToSystem.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 2;
    cursor: pointer;
  }

  .user {
    position: absolute;
    top: 34px;
    right: 510px;
    width: 165.93px;
    height: 32px;
    background-image: url("./../assets/img/user.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 2;
    cursor: pointer;
  }
}
</style>
