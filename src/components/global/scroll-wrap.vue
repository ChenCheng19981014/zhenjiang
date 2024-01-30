<style lang="scss" scoped>
.scroll-wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.scroll-wrap::-webkit-scrollbar {
  width: 0;
}
</style>

<template>
  <div class="scroll-wrap" ref="scoll" @mouseenter="c" @mouseleave="autoScroll">
    <slot></slot>
  </div>
</template>

<script>
import * as TWEEN from "@tweenjs/tween.js";
export default {
  name: "scroll-wrap",
  props: {
    distance: {
      type: Number,
      default: 1000,
    },
    times: {
      type: Number,
      default: 5000,
    },
    times1: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    c() {
      clearInterval(this.intv);
      this.intv = null;
    },
    autoScroll() {
      this.c();
      let dom = this.$refs.scoll;
      this.intv = setInterval(() => {
        let height = dom.scrollTop + this.distance;
        let isBottom = dom.scrollTop + dom.clientHeight - dom.scrollHeight;
        if (Math.abs(isBottom) <= 5) {
          height = 0;
        }

        new TWEEN.Tween({ top: dom.scrollTop })
          .to({ top: height }, this.times1)
          .onUpdate(function(data) {
            if (dom.scrollTo) {
              dom.scrollTo(0, data.top);
            }
          })
          .start();
      }, this.times);
    },
  },
  mounted() {
    this.autoScroll();
  },
  destroyed() {
    clearInterval(this.intv);
  },
};
</script>
