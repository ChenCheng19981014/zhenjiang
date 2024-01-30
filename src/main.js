import Vue from "vue";
import "./style.css";
import "./design/index.scss";
import store from "./../src/store";
import components from "./components/index";
import router from "./router";
import App from "./App.vue";
import { update } from "@tweenjs/tween.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//animatejs
function doTween() {
    function animate() {
        requestAnimationFrame(animate);
        update();
    }
    animate();
}
doTween();

Vue.use(ElementUI);

new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App),
});
