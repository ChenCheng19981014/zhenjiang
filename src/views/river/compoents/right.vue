<template>
  <div class="right">
    <!-- 监控点数据 表格1 -->
    <table-list
      class="table-1"
      title="事件数据"
      :menu="tablelist1.menu"
      :columns="tablelist1.columns"
      :flex="tablelist1.flex"
      style="height: 222px"
      :listHeight="128"
    ></table-list>

    <!-- 监控点数据 表格2 -->
    <table-list
      style="margin-top: 32px; height: 222px"
      class="table-2"
      title="告警数据"
      :menu="tablelist2.menu"
      :columns="tablelist2.columns"
      :flex="tablelist2.flex"
      :listHeight="128"
    ></table-list>

    <div class="right-3">
      <!-- 标题 -->
      <header-title titleName="实时监控"></header-title>
      <!-- 视频 -->
      <div class="video">
        <video
          :src="getVideoSource(index)"
          autoplay
          muted
          loop
          v-for="(i, index) in new Array(6).fill('')"
        ></video>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: "",
  data() {
    return {
      tablelist1: {
        menu: ["事件名称", "事发类型", "事发区域", "处理状态", "事件登记"],
        columns: [
          {
            name: {
              field: "水面塑料罐漂浮",
            },
            type: {
              field: "垃圾监测",
            },
            address: {
              field: "塘前排涝站",
            },
            state: {
              field: "进行中",
            },
            level: {
              field: "一般",
              color: "#6BFFF6",
            },
          },
          {
            name: { field: "水面塑料罐漂浮" },
            type: { field: "垃圾监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: {
              field: "一般",
              color: "#6BFFF6",
            },
          },
          {
            name: { field: "管道入水口油污" },
            type: { field: "油污监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: {
              field: "一般",
              color: "#6BFFF6",
            },
          },
          {
            name: { field: "蓝藻爆发" },
            type: { field: "蓝藻监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: { field: "严重", color: "#FB7659" },
          },
          {
            name: { field: "鸟类在河面停留" },
            type: { field: "家禽监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: {
              field: "一般",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "水面塑料罐漂浮",
            },
            type: {
              field: "垃圾监测",
            },
            address: {
              field: "塘前排涝站",
            },
            state: {
              field: "进行中",
            },
            level: {
              field: "一般",
              color: "#6BFFF6",
            },
          },
          {
            name: { field: "水面塑料罐漂浮" },
            type: { field: "垃圾监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: { field: "一般", color: "#6BFFF6" },
          },
          {
            name: { field: "管道入水口油污" },
            type: { field: "油污监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: { field: "一般", color: "#6BFFF6" },
          },
          {
            name: { field: "蓝藻爆发" },
            type: { field: "蓝藻监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: { field: "严重", color: "#FB7659" },
          },
          {
            name: { field: "鸟类在河面停留" },
            type: { field: "家禽监测" },
            address: { field: "塘前排涝站" },
            state: { field: "进行中" },
            level: { field: "一般", color: "#6BFFF6" },
          },
        ],
        flex: [1.5, 1, 1.2, 1, 1],
      },
      tablelist2: {
        menu: [
          "告警时间",
          "告警类型",
          "告警区域",
          "责任人",
          "告警登记",
          "处理状态",
        ],
        columns: [
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李赫" },
            level: { field: "中", color: "#FFC46B" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "张志超" },
            level: { field: "中", color: "#FFC46B" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李哲天" },
            level: { field: "高", color: "#FB7659" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李哲天" },
            level: { field: "一般", color: "#FFC46B" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李哲天" },
            level: { field: "中", color: "#6BFFF6" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李哲天" },
            level: { field: "中", color: "#FFC46B" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "张志超" },
            level: { field: "中", color: "#FFC46B" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李哲天" },
            level: { field: "中", color: "#FFC46B" },
            state: { field: "进行中" },
          },
          {
            time: { field: "2024-03-18" },
            type: { field: "设备告警" },
            address: { field: "塘前排涝站" },
            person: { field: "李哲天" },
            level: { field: "中", color: "#FFC46B" },
            state: { field: "进行中" },
          },
        ],
        flex: [1.5, 1, 1.5, 1, 1, 1],
      },
    };
  },
  mounted() {},
  methods: {
    getVideoSource(index) {
      // 根据索引返回不同的视频文件路径
      // 这里假设有 6 个视频文件，命名为 normal1.mp4, normal2.mp4, ..., normal6.mp4
      return require(`./../../../assets/video/normal${index + 1}.mp4`);
    },
  },
};
</script>

<style scoped lang="scss">
.right {
  width: 508px;
  height: 1007px;
  background-image: url("./../../../assets/img/右边框.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  .table-1 {
    margin-top: 22px;
    width: 428px;
  }

  .table-2 {
    width: 428px;
  }

  .right-3 {
    margin-top: 24px;
    width: 428px;
    height: 461px;

    .video {
      margin-top: 24px;
      position: absolute;
      width: 428px;
      height: 262px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px 4px;
      flex-wrap: wrap;

      > video {
        width: 210px;
        height: 117px;
        object-fit: fill;
      }
    }
  }
}
</style>
