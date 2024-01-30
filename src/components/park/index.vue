<template>
  <div class="park" ref="park" onselectstart="return false;" v-show="true">
    <div @pointerdown="(e) => { e.stopPropagation() }" class="btn">

    </div>
  </div>
</template>

<script>
let scene = null;
import Change from "./Change";
import E from "run-scene-v2";
import bus from "./../../lib/bus.js";
const { RunScene } = E;
export default {
  keepAlive: true, // 将此属性设置为 true
  data() {
    return {
      Bus: bus,
    };
  },

  mounted() {
    // 加载场景
    this.init();

    window.addEventListener('resize', () => {
      const { width, height } = document
        .querySelector(".fit-layout")
        .getBoundingClientRect();
      scene.setSize(1920, 1080);
      // scene.setSize(width, height);
    })

  },

  activated() {
  },

  methods: {
    // 初始
    init() {
      this.loadScene();
    },

    // 加载场景
    loadScene() {
      scene = new RunScene({
        coverSameId: true,
        instanceClone: false,
        render3: true,
        render2: true,
        renderConfig: {
          matrixAutoUpdate: true,
          scriptFrame: 60,
          static: false,
          event: {
            ignores: ["resize"],
          },
        },
      }).load({
        // path: "./assets/s.lt",
        path: "http://192.168.3.8:8080/file?path=project/linkpoint/&key=202401301138172859001001202449",
        // path:'http://192.168.3.8:8080/file?path=project/linkpoint/&key=202401091017276788341001202411',
        dom: this.$refs["park"],
      });

      new Change(scene);

      scene.on("loaded", () => {

        // 宽高
        const { width, height } = document
          .querySelector(".fit-layout")
          .getBoundingClientRect();
        // 自适应
        // scene.setSize(width, height);
        scene.setSize(1920, 1080);

        // 场景加载完毕
        this.isEnding = true;
        // 遮罩
        this.setBgc();

        this.$emit('loadOver');

        console.log("加载完毕");
      });
    },

    //场景加载完毕
    onDone() {
      console.log("场景加载完毕~");
    },

    // 遮罩
    async setBgc() {
      const dom = scene.assetsEx.engineDom;
      const backgroudDom = document.createElement("div");
      backgroudDom.style.position = "absolute";
      backgroudDom.style.left = "50%";
      backgroudDom.style.top = "50%";
      backgroudDom.style.transform = "translate(-50%,-50%)";
      backgroudDom.style.width = "100%";
      backgroudDom.style.height = "100%";
      dom.appendChild(backgroudDom);
      backgroudDom.style.backgroundRepeat = "no-repeat";
      backgroudDom.style.backgroundSize = "100% 100%";
      backgroudDom.classList.add("bgc");
    },

  },

  // 场景自带销毁
  destroyed() {
    clearInterval(this.timer);
    this.runScene && this.runScene.dispose();
  },
};
</script>

<style lang="scss" scoped>
:deep(.bgc) {
  z-index: 20000;
  pointer-events: none;
  background: url("./../../assets/img/bgc.png");
}

:deep(.css2dRenderer) {
  z-index: 2;
}

// 场景
.park {
  width: 100%;
  height: 100%;
  position: relative;

  .btn {
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    // bottom: 53px;
    // bottom: 4.9%;
    // top: 970px;
    top: 900px;
    width: 1503px;
    height: 59px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 12px;
    position: absolute;
  }

  .back {
    width: 199px;
    height: 47px;
    position: absolute;
    background-image: url("./../../assets/img/按钮.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 5;
    right: 0;
    bottom: 3.3%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
