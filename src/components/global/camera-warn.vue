<template>
  <div class="camera-warn">
    <div class="close" @click="$emit('close')"></div>

    <!-- 视频 -->
    <div class="video">
      <video
        src="./../../assets/video/error.mp4"
          muted
        autoplay
        v-for="(i, index) in new Array(4).fill('')"
      ></video>
    </div>
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
.camera-warn {
  z-index: 5;
  width: 495px;
  height: 462px;
  background-image: url("./../../assets/img/camera-warn.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  position: relative;
  .close {
    width: 48px;
    height: 36px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .video {
    position: absolute;
    width: 462px;
    height: 262px;
    bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    > video {
      width: 228px;
      height: 128px;
      object-fit: fill;
    }
  }
}
</style>
