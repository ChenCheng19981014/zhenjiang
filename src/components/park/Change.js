/**
 * 交付项目时场景不可留有log ***
 * 记得开启
 */
// const console = {
//   log: () => { }
// }
import * as Three from "three";
import E from "run-scene-v2";
import bus from "./../../lib/bus.js";
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

    controls.screenSpacePanning = false;

    this.clickEvent = new ClickEvent();

    this.clickEvent.init();

    // 脚本
    t.runScene.script.playAll();
  });

  // 销毁
  this.dispose = () => runScene.dispose();
}

// 点击出现面板事件
class ClickEvent {
  // 视频数组
  buildArr = ["zhuti", 'Sprite_21'];
  // dom
  dom = null;
  // 点击的上一个模型
  lastCameraModel = null;

  init() {
    this.dom = document.querySelector("#app");
    this.refreshDom();
  }

  // 刷新 面板 位置
  refreshBuildPosition(map) {
    const Dom = document.querySelector(`${map.stateDom}`);
    if (!Dom) return;
    const { left: x, top: y } = t.events.get2DVec(map);
    const ps = { x, y };
    this.setPosition(Dom, ps, true, { py: 40, px: 40 });
  }

  // 公共 设置 位置
  setPosition(dom, ps, iscenter = false, offset = { px: 0, py: 0 }) {
    if (!dom) return;
    const { px, py } = offset;
    let x = 0;
    let y = 0;
    let width = 0;
    let height = 0;
    if (ps) {
      x = ps.x;
      y = ps.y;
    } else {
      x = dom.getBoundingClientRect().x;
      y = dom.getBoundingClientRect().y;
      width = dom.getBoundingClientRect().width;
      height = dom.getBoundingClientRect().height;
    }

    if (iscenter) {
      dom.style.left = x + px + "px";
      dom.style.top = y + py + "px";
    } else {
      dom.style.left = width * 2 + x + px + "px";
      dom.style.top = y + py + "px";
    }
  }

  // 刷新dom
  refreshDom() {
    t.runScene.cb.controls.change.add("setDialogPosition", () => {
      if (this.lastCameraModel) {
        // 普通相机移动
        this.refreshBuildPosition({
          stateDom: ".buildInfo",
          camera,
          model: this.lastCameraModel,
          outDom: this.dom,
        });
      }
    });
  }

  // 点击 正常 摄像头
  webClickBuild(name, model) {
    this.lastCameraModel = model;
    if (this.buildArr.includes(name)) this.showBuildSprite();
  }

  showBuildSprite() {

    bus.$emit("showBuildSprite");

    // 转换位置
    Utils.getMacro(() => {
      // 刷新一帧
      this.refreshBuildPosition({
        stateDom: ".buildInfo",
        camera,
        model: this.lastCameraModel,
        outDom: this.dom,
      });
    }, 100);
  }
}

// 基本事件
class Events {
  constructor() {
    t.runScene.cb.model.click.add(
      "trigger-click",
      this.triggerClick.bind(this)
    );
  }

  // 3d坐标转2位坐标
  get2DVec(map) {
    if (!map.outDom) return;
    const { camera, model, outDom } = map;
    const { clientWidth, clientHeight } =
      outDom || document.querySelector("#app");
    const halfWidth = clientWidth / 2;
    const halfHeight = clientHeight / 2;
    const camPos = new Three.Vector3();
    const camDir = new Three.Vector3();
    camera.getWorldPosition(camPos);
    camera.getWorldDirection(camDir);
    const objPos = new Three.Vector3();
    model.updateMatrixWorld();
    objPos.setFromMatrixPosition(model.matrixWorld);
    const ndcPos = objPos.clone();
    ndcPos.project(camera);
    const objDir = new Three.Vector3();
    objDir.subVectors(objPos, camPos);
    objDir.normalize();
    const dotValue = camDir.dot(objDir);
    const sign = dotValue > 0 ? 1 : -1;
    const left = (1 + sign * ndcPos.x) * halfWidth;
    const top = (1 - sign * ndcPos.y) * halfHeight;
    return {
      left,
      top,
    };
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

    t.clickEvent.webClickBuild(model.name, model);

    // console.log(
    //   `cx:${camera.position.x}, cy:${camera.position.y}, cz:${camera.position.z}, tx:${controls.target.x}, ty:${controls.target.y}, tz:${controls.target.z} `,
    //   "位置"
    // );
  };
}

export default Change;
