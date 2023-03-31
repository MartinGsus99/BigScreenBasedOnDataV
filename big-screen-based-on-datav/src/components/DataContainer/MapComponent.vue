<template>
<div id="app">
    <div id="echart_china" ref="echart_china"></div>
</div>
</template>

<script>
import sxmap from './610000.json'
export default {
    data() {
        return {
            myChart: null,
        }
    },
    mounted() {
        // 1. 创建一个 ECharts 实例，返回 echartsInstance，不能在单个容器上初始化多个 ECharts 实例
        this.myChart = this.$echarts.init(this.$refs.echart_china)

        this.showScatterInGeo()
    },
    methods: {
        showScatterInGeo() {
            this.$echarts.registerMap('sxmap', sxmap)
            let option = {
                geo: {
                    type: 'map',
                    map: 'sxmap',
                    roam: true,
                    selectedMode: 'single', // 设置选中模式为单选
                    itemStyle: {
                        normal: {
                            // 设置正常状态下的样式
                            areaColor: '#a5e7f0', // 区域的填充颜色
                            borderColor: '#fff', // 区域的边框颜色
                            borderWidth: 1 // 区域的边框宽度
                        },
                        emphasis: {
                            // 设置鼠标悬浮时的样式
                            areaColor: '#516b91', // 区域的填充颜色
                            borderColor: '#333', // 区域的边框颜色
                            borderWidth: 1 // 区域的边框宽度
                        }
                    },
                    label: {
                        normal: {
                            color: '#000000',
                            show: true,
                        },
                    },
                },
                title: {
                    text: 'IP分布',
                    textStyle: {
                        color: '#fff'
                    },
                    subtext: 'Data from CurSEC',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c}'
                },
                series: [{
                    name: '在地图中显示散点图',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [{
                            name: 'IP1',
                            value: [109.41995, 36.18994],
                        },
                        {
                            name: 'IP2',
                            value: [108.665412, 36.757975],
                        },
                        {
                            name: 'IP3',
                            value: [108.85412, 36.757975],
                        },
                    ],
                }, ],
            }
            this.myChart.setOption(option)
        },
    },
}
</script>

<style scoped>
#echart_china {
    width: 100%;
    height: 80vh;
}
</style>
