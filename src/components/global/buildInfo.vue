<template>
  <div class="buildInfo">
    <div class="close" @click="$emit('close')"></div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.buildInfo {
  position: absolute;
  z-index: 2;
  width: 262px;
  height: 332px;
  background-image: url("./../../assets/img/2号楼.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .close {
    width: 48px;
    height: 36px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
