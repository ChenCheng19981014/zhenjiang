<template>
    <div class="diamond-title">
        <div class="tips">{{ titleName }}</div>
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        titleName: {
            typeof: "string",
            default: "",
        },
    },
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};
</script>
  
<style scoped lang="scss">
.diamond-title {
    width: 428px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-image: url("./../../assets/img/diamond-title.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .tips {
        margin-left: 24px;
        color: #47DEFF;
        font-family: "SourceHanSansCN";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
</style>
  