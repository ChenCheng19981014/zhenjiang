<template>
  <div class="bottom">
    <div class="bottom-1"></div>
    <div class="bottom-2"></div>
  </div>
</template>
<script>
import mointerEcharts from "./components/mointerEcharts.vue";
export default {
  components: {
    mointerEcharts,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.bottom {
  width: 905px;
  height: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bottom-1 {
    width: 444px;
    height: 291px;
    background-image: url("./../../../assets/img/车辆统计.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .bottom-2 {
    width: 444px;
    height: 291px;
    background-image: url("./../../../assets/img/碳资产统计.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
