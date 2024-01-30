<template>
  <div class="table-list">
    <!-- 标题 -->
    <header-title :titleName="title"></header-title>
    <!-- 菜单 -->
    <div class="header">
      <div class="header-item" :key="index_1 + 'header-item'" v-for="(menuName, index_1) in menu"
        :style="`flex:${flex[index_1]};`">
        {{ menuName }}
      </div>
    </div>
    <!-- 内容列表 -->
    <div class="list" :style="`height:${listHeight}px;`">
      <!-- 轮播 -->
      <scroll-wrap :distance="distanceHeight">
        <div class="list-item" v-for="(item, index_2) in columns" :key="index_2 + 'list-item'">
          <div v-for="(params, index_3) in Object.values(item)"
            :style="`flex:${flex[index_3]};color:${params.color ? params.color : 'rgb(255, 255, 255, 0.80)'};`">
            {{ params.field }}
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
    listHeight:{
      type: Number,
      default: 192,
    },
    isHover: {
      type: Boolean,
      default: false,
    },
    flex: Array,
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
  justify-content: start;

  .header {
    margin-top: 16px;
    width: 100%;
    height: 32px;
    padding-left: 8px;
    padding-right: 8px;
    border-bottom: 1px solid rgba(132, 253, 246, 0.3);
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(38, 186, 195, 0.5) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-item {
      color: #86d9e9;
      font-size: 12px;
      font-family: "SourceHanSansCN";
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;
      justify-content: start;
      align-items: center;
    }
  }

  .list {
    margin-top: 2px;
    width: 100%;
    height: 192px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    .list-item {
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
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

    .list-item:nth-child(even) {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
