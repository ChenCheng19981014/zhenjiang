<style lang="scss" scoped>
.custom-pie {
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chart {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    position: relative;

    .pie-bg {
      width: 64px;
      height: 64px;
      position: absolute;
      // background: red;
      border: 27px solid rgba(0, 0, 0, 0.12);
      border-radius: 50%;
      z-index: 1;
    }

    .chart-main {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3333;
    }

    .chart-div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .value {
        height: 100%;
        color: white;
        font-family: "number";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        display: flex;
        align-items: center;
      }

      .title {
        font-size: 16px;
        color: white;
      }
    }
  }

  .main {
    width: 138px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      color: #86d9e9;
      font-family: "SourceHanSansCN";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .state {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .unit {
        color: rgba(255, 255, 255, 0.7);
        font-family: "SourceHanSansCN";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .offline-num {
        color: #fff;
        font-family: "TCloudNumber-Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 4px;
      }

      .online-num {
        color: #00f9b9;
        font-family: "TCloudNumber-Regular";
        font-size: 16px;
        font-style: normal;
        margin-left: 4px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
</style>

<template>
  <div class="custom-pie">
    <div class="chart" v-if="data.length != 0">
      <div class="pie-bg"></div>
      <div class="chart-main">
        <chart-base-cc :option="option"></chart-base-cc>
      </div>
      <div class="chart-div">
        <div class="value">{{ getAll }}</div>
      </div>
    </div>
    <div class="main" v-if="data.length != 0">
      <div class="title"> {{ title }}</div>
      <div class="state">
        <div class="online">
          <span class="unit">在线</span>
          <span class="online-num">{{ online }}</span>
        </div>
        <div class="offline">
          <span class="unit">离线</span>
          <span class="offline-num">{{ offline }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-pie",
  props: {
    data: Array,
    title: String,
    color: Array,
    online: Number,
    offline: Number,
  },
  computed: {
    getAll() {
      let all = 0;
      this.data.map((e) => {
        all += e.value;
      });
      // return all.toFixed(2);
      return parseFloat(all.toFixed(2));
    },
  },
  data() {
    return {
      option: {},
    };
  },
  watch: {
    data() {
      this.loadOption();
    },
  },
  methods: {
    loadOption() {
      //处理合计问题
      let all = this.getAll;
      let setup = 0.03 * all;
      let color = [];
      this.color.map((e) => {
        color.push(e);
        color.push("rgba(0,0,0,0)");
      });
      let data = [];
      this.data.map((item) => {
        if (all == 0) {
          item.per = 0;
        } else {
          item.per = ((item.value / all) * 100).toFixed(2);
        }
        if (item.value != 0) {
          data.push({ name: item.name, value: item.value });
          data.push({ name: "", value: setup });
        }
      });

      this.option = {
        series: {
          name: "",
          radius: [30, 25],
          type: "pie",
          data,
          itemStyle: {
            borderRadius: 5,
            // borderRadius: 0,
          },
          emphasis: {
            //使用emphasis
            disabled: false,
            scale: true, //不缩放
          },
          label: {
            show: false,
          },
        },
        color,
      };
    },
  },
  created() {
    this.loadOption();
  },
};
</script>
