<template>
  <div class="camera-normal">
    <div class="close" @click="$emit('close')"></div>
    <!-- 视频 -->
    <div class="video">
          
      <video src="./../../assets/video/normal.mp4" autoplay muted></video>
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
.camera-normal {
  z-index: 5;
  width: 260px;
  height: 343px;
  background-image: url("./../../assets/img/camera-normal.png");
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
    width: 228px;
    height: 128px;
    bottom: 8px;
    position: absolute;
    > video {
      width: 100%;
      height: 100%;
      // object-fit: cover;
      object-fit: fill;
    }
  }
}
</style>
