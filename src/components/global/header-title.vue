<template>
  <div class="header-title">
    <div class="tips">{{ titleName }}</div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    titleName: {
      typeof: "string",
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.header-title {
  width: 428px;
  height: 38px ;
  display: flex;
  align-items: center;
  justify-content: start;
  background-image: url("./../../assets/img/一级标题.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-sizing: content-box;

  .tips {
    font-family: "YouSheBiaoTiHei-2";
    color: white;
    width: auto;
    margin-left: 60px;
    text-shadow: 0px 0px 4px rgba(6, 130, 231, 0.55),
      0px 0px 4px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
    background: linear-gradient(180deg, #fff 60.42%, #00ff85 125%);
    background-clip: text;
  }
}
</style>
