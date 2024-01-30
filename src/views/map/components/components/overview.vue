<template>
    <div class="overview-content">
        <!-- 4类 -->
        <div v-for="(i, index) in info" class="overview-item" :key="'overview-item' + index">
            <!-- icon -->
            <div class="icon" :style="{ 'background-image': `url(${getImageUrl(i.icon)})` }"></div>
            <!-- 右侧数据 -->
            <div class="right-content">
                <!-- 名称 -->
                <div class="title">{{ i.title }}</div>
                <!-- 值和单位 -->
                <div class="value">
                    <div class="num">{{ i.value }}</div>
                    <div class="unit">{{ i.unit }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import overview1 from "../../../../assets/img/overview1.png";
import overview2 from "../../../../assets/img/overview2.png";
import overview3 from "../../../../assets/img/overview3.png";
import overview4 from "../../../../assets/img/overview4.png";
export default {
    props: ["info"],
    name: "",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        getImageUrl(icon) {
            switch (icon) {
                case "overview1":
                    return overview1;
                case "overview2":
                    return overview2;
                case "overview3":
                    return overview3;
                case "overview4":
                    return overview4;
                default:
                    return "";
            }
        },
    },
};
</script>

<style scoped lang="scss">
.overview-content {
    width: 412px;
    height: 122px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:16px;

    .overview-item {
        // width: 186px;
        width: 195px;
        height: 53px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            width: 55px;
            height: 45.2px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .right-content {
            width: 125px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

            .title {
                width: 100%;
                color: #86d9e9;
                font-family: "SourceHanSansCN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 1.12px;
                display: flex;
                justify-content: start;
                align-items: center;
            }

            .value {
                width: 100%;
                display: flex;
                justify-content: start;
                align-items: center;

                .num {
                    color: #fff;
                    font-family: "TCloudNumber-Bold";
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }

                .unit {
                    margin-left: 6px;
                    color: rgba(134, 217, 233, 0.6);
                    font-family: "SourceHanSansCN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 1.12px;
                }
            }
        }
    }
}
</style>
