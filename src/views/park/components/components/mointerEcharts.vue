<template>
    <div class="mointer-echarts">
        <!-- 饼图 -->
        <custom-pie-mointer class="pie-mointer" v-for="(item, index_1) in mointerMachinelist" :title="item.title"
            :color="['#FB6140', '#05F4F4',]" :data="[item.offline, item.online]" :online = item.offline.value :offline = item.online.value
            :key="index_1 + '_mointerMachinelist'"></custom-pie-mointer>
    </div>
</template>
<script>
export default {
    name: "",
    props: { mointerMachinelist: { type: Array } },
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};
</script>

<style scoped lang="scss">
.mointer-echarts {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .pie-mointer {
        width: 206px;
        height: 64px;
    }
}
</style>
