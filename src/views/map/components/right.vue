<template>
  <div class="right">
    <!-- 监控点数据 表格1 -->
    <header-title style="margin-top: 21px" :titleName="'监测设备情况'"></header-title>
    <!-- 监测设备情况图标 -->
    <mointerEcharts :mointerMachinelist="mointerMachinelist" class="mointer-echarts"></mointerEcharts>
    <!-- 监控点数据 表格2 -->
    <table-list style="margin-top: 32px; height: 290px" class="table-2" title="监控点数据" :menu="tablelist2.menu"
      :columns="tablelist2.columns" :flex="tablelist2.flex"></table-list>

    <!-- 监控点数据 表格3 -->
    <table-list style="margin-top: 32px; height: 324px" :listHeight="224" class="table-3" title="出水/入水口数据" :menu="tablelist3.menu"
      :columns="tablelist3.columns" :flex="tablelist2.flex"></table-list>
  </div>
</template>
<script>
import mointerEcharts from "./components/mointerEcharts.vue";
export default {
  components: {
    mointerEcharts,
  },
  data() {
    return {
      // 监测设备情况
      mointerMachinelist: [
        {
          title: "变焦筒型网络摄像机",
          online: {
            value: 1200,
          },
          offline: {
            value: 117,
          }
        },
        {
          title: "400万像素变筒型摄像机",
          online: {
            value: 1200,
          },
          offline: {
            value: 117,
          }
        },
        {
          title: "抢球一体警戒联动摄像机",
          online: {
            value: 19,
          },
          offline: {
            value: 11,
          }
        },
        {
          title: "双光谱热成像筒机",
          online: {
            value: 10,
          },
          offline: {
            value: 4,
          }
        },
        {
          title: "水尺球摄像机",
          online: {
            value: 10,
          },
          offline: {
            value: 0,
          }
        },
        {
          title: "网络智能高清球机",
          online: {
            value: 40,
          },
          offline: {
            value: 4,
          }
        },
      ],
      // 表二
      tablelist2: {
        menu: ["河道名称", "监控点", "设备类型", "监控朝向", "状态"],
        columns: [
          {
            name: {
              field: "南浜浜",
            },
            pointer: {
              field: "南浜排劳站",
            },
            type: {
              field: "智能高清球机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "寺后底浜",
            },
            pointer: {
              field: "寺后底非劳站",
            },
            type: {
              field: "智能高清球机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "鲍恋浜",
            },
            pointer: {
              field: "鲍态浜非劳站",
            },
            type: {
              field: "枪机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "张庄巷河",
            },
            pointer: {
              field: "张庄巷排劳站",
            },
            type: {
              field: "枪机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "胡桥河",
            },
            pointer: {
              field: "南浜排涝站",
            },
            type: {
              field: "智能高清球机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "胡桥河",
            },
            pointer: {
              field: "南浜排涝站",
            },
            type: {
              field: "智能高清球机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "胡桥河",
            },
            pointer: {
              field: "南浜排涝站",
            },
            type: {
              field: "智能高清球机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
          {
            name: {
              field: "胡桥河",
            },
            pointer: {
              field: "南浜排涝站",
            },
            type: {
              field: "智能高清球机",
            },
            direction: {
              field: "朝向岸边",
            },
            state: {
              field: "在线",
              color: "#6BFFF6",
            },
          },
        ],
        flex: [1, 1, 1.2, 1, 0.5],
      },
      // 表三
      tablelist3: {
        menu: ["河道名称", "排涝站名称", "出水口数据", "进水口数据"],
        columns: [
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "寺后底浜",
            },
            nameOfDrainageStation: {
              field: "寺后底排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "鲍家浜",
            },
            nameOfDrainageStation: {
              field: "鲍家浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "张庄替河",
            },
            nameOfDrainageStation: {
              field: "张庄巷排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
          {
            name: {
              field: "南浜",
            },
            nameOfDrainageStation: {
              field: "南浜排涝站",
            },
            outWater: {
              field: "4.00 m³/s",
            },
            inWater: {
              field: "4.00 m³/s",
            },
          },
        ],
        flex: [1, 1, 1, 1],
      },
    };
  },
  mounted() { },
  methods: {},
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

  .mointer-echarts {
    margin-top: 16px;
    width: 428px;
    height: 240px;
  }

  .table-2 {
    width: 428px;
  }

  .table-3 {
    width: 428px;
  }
}
</style>
