
<template>
  <div class="chart-box" ref="chartId"></div>
</template>

<style lang="scss" scoped>
.chart-box {
  width: 100%;
  height: 100%;
}
</style>

<script>
import * as echarts from 'echarts'
export default {
  name: 'chartComponent',
  props: {
    option: { type: Object, default: () => { } }, //图表属性
    isLoop: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },// 可不写loading状态
  },
  data() {
    return {
      isFinished: false
    }
  },
  methods: {
    drawChart() {
      this.myChart.setOption(this.option, true);
      if (!this.isLoop) return
      this.$tooltip.loopShowTooltip(this.myChart, this.option, {
        loopSeries: true,
      });
      // 如果需要进行频繁切换数据 需要清空定时器 否则会出现提示框鬼畜现象 使用方法如下
      this.tootipTimer && this.tootipTimer.clearLoop();
      this.tootipTimer = 0;
      this.tootipTimer = this.$tooltip.loopShowTooltip(this.chart, this.option, {
        loopSeries: true,
      });

    },
    chartResize() {
      this.myChart.resize()
    }
  },
  mounted() {
    if (!this.myChart) {
      this.myChart = echarts.init(this.$refs['chartId'])
    }
    //监听窗口大小变化
    window.addEventListener('resize', this.chartResize)
    this.drawChart()

    this.myChart.on('finished', () => {
      if (!this.isFinished) {
        this.isFinished = true
        this.myChart.resize()
      }
    })
  },
  beforeDestroy() {
    //销毁window监听对象
    window.removeEventListener('resize', this.chartResize)
    if (this.myChart) this.myChart.dispose()
    this.myChart = null
  },
  watch: {
    //数据可能是异步的，用watch接听接收
    option: {
      handler(newVal) {
        const options = newVal
        this.drawChart(options)
      },
      deep: true
    }
  }
}
</script>
