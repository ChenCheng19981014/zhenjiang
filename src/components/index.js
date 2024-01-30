/**
 * @description 全局组件
 * @tips 全局扫描 自动注册 {@components} 中所有组件,组件名称字段是name
 */

import Vue from 'vue'

const requireComponent = require.context('./global', true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/(\.\/|\.vue)/g, '').replace(new RegExp('/', 'g'), "");
    // 全局注册组件
    Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，否则回退到使用模块的根。
        componentConfig.default || componentConfig
    );
    // console.log('全局注册组件', componentName)
});
