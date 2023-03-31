<template>
    <div>
      <div ref="myEchart" :style="{ height: height, width: width }"></div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'DynamicEchart',
    props: {
      optionData: { default: null, type: Object },
      height: { default: '100%', type: String },
      width: { default: '400px', type: String },
    },
    data() {
      return {
        option: null,
        myEchart: null,
      }
    },
    computed: {},
    watch: {
      optionData: {
        handler(e, value) {
          if (e !== undefined) {
            this.initCharts()
          }
        },
      },
      deep: true,
    },
    created() {},
    mounted() {},
    methods: {
      initCharts() {
        //初始化容器
        this.$nextTick(() => {
          this.myEchart = this.$echarts.init(this.$refs.myEchart)
          let option = { ...this.optionData }
          option && this.myEchart.setOption(option)
          
          window.addEventListener("resize", () => {
              this.reLoadEchart();
          })
        })
      },
      beforeDestroy() {
        window.removeEventListener("resize", () => {
          this.myEchart.resize();
        });
      },
      reLoadEchart() {
        if(this.myEchart) {
          this.myEchart.resize()
        }
      }
    },
  }
  </script>
  <style lang="css" scoped></style>
  