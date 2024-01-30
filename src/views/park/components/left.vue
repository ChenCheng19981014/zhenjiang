<template>
  <div class="left">

    <div class="left-1"></div>

    <div class="left-2"></div>

    <div class="left-3"></div>

  </div>
</template>
<script>
import overview from "./components/overview.vue";
import riverChannel from "./components/riverChannel.vue";
export default {
  components: {
    overview,
    riverChannel
  },
  name: "",
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {},
};
</script>
<style lang="scss">
.left {}
</style>
<style scoped lang="scss">
.left {
  width: 444px;
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  align-items: center;

  .left-1 {
    width: 100%;
    height: 301px;
    background-image: url("./../../../assets/img/安防态势.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .left-2 {
    width: 100%;
    height: 253px;
    background-image: url("./../../../assets/img/能耗统计.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .left-3 {
    width: 100%;
    height: 291px;
    background-image: url("./../../../assets/img/人员统计.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

}</style>
