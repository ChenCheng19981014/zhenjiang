<template>
  <div class="overview-Information">
    <scroll-wrap :distance="91">
      <div
        class="content"
        v-for="(list, index_1) in listInfo"
        :key="'listInfo' + index_1"
      >
        <!-- 二级标题 -->
        <diamond-title :titleName="list.title"></diamond-title>
        <!-- 信息 -->
        <div class="info-item">
          <div
            v-for="(item, index_2) in list.data"
            class="item"
            :key="'item' + index_2"
          >
            <div class="title">{{ item.name }}</div>
            <div class="value">
              <div class="num" :style="'color:' + item.color">
                {{ item.num }}
              </div>
              <div class="unit">{{ item.unit }}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-wrap>
  </div>
</template>
<script>
export default {
  props: ["listInfo"],
  name: "",
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.overview-Information {
  width: 428px;
  height: 645px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    margin-top: 16px;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    backdrop-filter: blur(7px);
    overflow: hidden;
    .info-item {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 6px 4px 6px 24px;
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title {
          color: #47deff;
          color: #86d9e9;
          font-family: "SourceHanSansCN";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .value {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .num {
            font-family: "TCloudNumber-Bold";
            color: #fff;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .unit {
            margin-left: 4px;
            color: rgba(134, 217, 233, 0.6);
            font-family: "SourceHanSansCN";
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
  }
}
</style>
