<template>
  <div class="left">
    <!-- 标题1 -->
    <header-title class="data-screening-title" style="margin-top: 21px" :titleName="'数据总览（山水城）'"></header-title>
    <!-- 总览 -->
    <overview style="margin-top: 24px" :info="overviewData"></overview>
    <!-- 标题2 -->
    <header-title style="margin-top: 32px" :titleName="'河道概况'"></header-title>
    <!-- 搜索框 -->
    <el-input v-model="riverName" prefix-icon="el-icon-search" class="searchRiver " placeholder="请输入河道名称" />
    <!-- 河道概况 -->
    <riverChannel :listInfo="listInfo"></riverChannel>
  </div>
</template>
<script>
import overview from "./components/overview.vue";
import riverChannel from "./components/riverChannel.vue";
export default {
  components: {
    overview,
    riverChannel
  },
  name: "",
  data() {
    return {
      // 河道名称
      riverName: "",
      // 总览数据
      overviewData: [
        {
          icon: "overview1",
          title: "辖区范围河道数量",
          value: "92",
          unit: "条",
        },
        {
          icon: "overview2",
          title: "辖区范围河道长度",
          value: "82958",
          unit: "米",
        },
        {
          icon: "overview3",
          title: "辖区范围内涝站",
          value: "8",
          unit: "个",
        },
        {
          icon: "overview4",
          title: "全区水域总量占比",
          value: "38",
          unit: "%",
        },
      ],
      // 列表信息
      listInfo: [
        {
          title: "长广溪河道",
          data: [
            { name: "河道长度", num: "8960", unit: "m", color: "#fff" },
            { name: "水域面积", num: "90", unit: "万m²", color: "#fff" },
            { name: "沿河设备", num: "120", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "壬子港河道",
          data: [
            { name: "河道长度", num: "3280", unit: "m", color: "#fff" },
            { name: "水域面积", num: "3.3", unit: "万m²", color: "#fff" },
            { name: "沿河设备", num: "70", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "横大江河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "19240", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "23", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "钓桥港河道",
          data: [
            { name: "河道长度", num: "2550", unit: "m", color: "#fff" },
            { name: "水域面积", num: "4.08", unit: "万m²", color: "#fff" },
            { name: "沿河设备", num: "12", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },

        {
          title: "横大江河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "老庙港河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "老庙港河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "滨湖山水城河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "张庄巷河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "三家村浜河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "壬子港河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "横大江河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "老庙港河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
        {
          title: "老庙港河道",
          data: [
            { name: "河道长度", num: "123", unit: "m", color: "#fff" },
            { name: "水域面积", num: "320", unit: "m²", color: "#fff" },
            { name: "沿河设备", num: "320", unit: "个", color: "#fff" },
            { name: "在线率", num: "87.78", unit: "%", color: "#00F9B9" },
            { name: "今日告警", num: "1", unit: "件", color: " #FF6565" },
            { name: "今日事件", num: "2", unit: "件", color: " #FF6565" },
          ],
        },
      ],
    };
  },
  mounted() {
  },
  methods: {},
};
</script>
<style lang="scss">
.left {
  .searchRiver {
    margin-top: 24px;
    box-sizing: border-box;
    width: 428px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #65b8dc;
    background: rgba(0, 0, 0, 0.3) !important;

    .el-input__inner {
      padding: 10px 16px;
      padding-left: 30px;
      background: rgba(0, 0, 0, 0.3);
      border: none;
    }
  }
}
</style>
<style scoped lang="scss">
.left {
  width: 508px;
  height: 1007px;
  background-image: url("./../../../assets/img/左边框.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
</style>
