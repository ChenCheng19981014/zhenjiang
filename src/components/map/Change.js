/**
 * 交付项目时场景不可留有log ***
 * 记得开启
 */
// const console = {
//   log: () => { }
// }

import E from "run-scene-v2";
import bus from "./../../lib/bus.js";
import * as THREE from "three";
import router from "./../../router/index";
const { Utils } = E;
// 声明变量
let camera, scene, controls, renderer2, renderer, dom, t, p, runScene, Bus;
// 工具
const { getRes, getMacro, getModel } = Utils;

// 拿资源
const setAssets = (assets) => {
  camera = assets.camera;
  scene = assets.scene;
  controls = assets.controls;
  renderer = assets.renderer;
  dom = assets.engineDom;
  t = assets.t;
};

//  页面接口总出口
function Change(runScene) {
  setAssets({ ...runScene.assetsEx.get(), t: this, runScene });
  // 挂载runScene
  t.runScene = runScene;

  // 最后一帧加载回调
  runScene.on("complete", async () => {
    this.events = new Events();

    // t.runScene.cameraEx.setTemp("初始", { time: 2 });

    controls.screenSpacePanning = false;

    // 脚本
    t.runScene.script.playAll();
  });

  // 销毁
  this.dispose = () => runScene.dispose();
}

// 基本事件
class Events {
  constructor() {
    t.runScene.cb.model.click.add(
      "trigger-click",
      this.triggerClick.bind(this)
    );
  }

  showAnima(info) {
    const { model, isShow, time, cb, opacity } = info;
    const models = [];
    model.traverse((m) => {
      if (m.type === "Group") return;
      if (m.type === "Object3D") return;
      m.material.transparent = true;
      isShow ? (m.material.opacity = 0) : null;
      models.push(m);
    });
    if (isShow) model.visible = isShow;
    Utils.anima(
      { opc: isShow ? 0 : opacity || 1 },
      { opc: isShow ? opacity || 1 : 0 },
      time,
      (data) => {
        models.map((m) => (m.material.opacity = data.opc));
      },
      () => {
        if (!isShow) model.visible = isShow;
        cb && cb();
      }
    );
  }

  cameraFoucs(position, time = 1, fn) {
    t.events.closeAnimaAtStart.anima = Utils.anima(
      {
        cx: t.runScene.assetsEx.camera.position.x,
        cy: t.runScene.assetsEx.camera.position.y,
        cz: t.runScene.assetsEx.camera.position.z,
        tx: t.runScene.assetsEx.controls.target.x,
        ty: t.runScene.assetsEx.controls.target.y,
        tz: t.runScene.assetsEx.controls.target.z,
      },
      {
        ...position,
      },
      time,
      (data) => {
        t.runScene.assetsEx.camera.position.set(data.cx, data.cy, data.cz);
        t.runScene.assetsEx.controls.target.set(data.tx, data.ty, data.tz);
        t.runScene.assetsEx.camera.updateProjectionMatrix();
        t.runScene.assetsEx.controls.update();
      },
      () => {
        fn && fn();
      }
    );
  }
  triggerClick = (model) => {
    if (!model) return;

    if (
      model.name.indexOf("壬子港河道") !== -1 ||
      model.name.indexOf("张庄巷河道") !== -1 ||
      model.name.indexOf("横大江河道") !== -1 ||
      model.name.indexOf("滨湖山水城河道") !== -1 ||
      model.name.indexOf("三家村浜河道") !== -1
    ) {
      router.replace({ name: "river" });
      // console.log('m:', m);
    }

    // console.log(
    //   `cx:${camera.position.x}, cy:${camera.position.y}, cz:${camera.position.z}, tx:${controls.target.x}, ty:${controls.target.y}, tz:${controls.target.z} `,
    //   "位置"
    // );
  };
}

export default Change;
