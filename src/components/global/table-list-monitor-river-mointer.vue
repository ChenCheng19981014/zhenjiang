<template>
  <div class="table-list">
    <!-- 标题 -->
    <header-title :titleName="title"></header-title>
    <!-- 菜单 -->
    <div class="header">
      <div class="header-item" :key="menuName + 'header-item'" v-for="(menuName, index_1) in menu">
        {{ menuName }}
      </div>
    </div>
    <!-- 内容列表 -->
    <div class="list">
      <!-- 轮播 -->
      <scroll-wrap :distance="distanceHeight">
        <div class="list-item" v-for="(item, index_2) in columns" :key="item + 'list-item'">
          <div :style="`color:${(index_3 === Object.values(item).length - 1)
            ? params === '已处理' ? '#00F9B9' : 'rgba(255, 255, 255, 0.80)' : ''};`"
            v-for="(params, index_3) in Object.values(item)">
            {{ params }}
          </div>
        </div> 
      </scroll-wrap>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    isHover: {
      type: Boolean,
      default: false,
    },
    columns: Array,
    data: Array,
    initData: Array,
    menu: {
      type: Array,
    },
    distanceHeight: {
      type: Number,
      default: 32,
    },
  },
  name: "",
  data() {
    return {};
  },
  mounted() { },
  methods: {},
};
</script>

<style scoped lang="scss">
.table-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .header {
    width: 100%;
    height: 32px;
    padding: 10px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(132, 253, 246, 0.3);
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(38, 186, 195, 0.5) 100%);

    .header-item {
      color: #86d9e9;
      font-size: 12px;
      font-family: "SourceHanSansCN";
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    // box-sizing: border-box;

    .list-item {
      box-sizing: border-box;
      padding: 10px 8px 10px 8px;
      height: 32px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      >div {
        color: rgba(255, 255, 255, 0.8);
        font-family: "SourceHanSansCN";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    .list-item:nth-child(odd) {}

    .list-item:nth-child(even) {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
