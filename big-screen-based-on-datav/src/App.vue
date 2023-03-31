<template>
<div class="dashboard">
    <div class="right-container">
        <div id="web-application-chart" class="widget-container">

        </div>
        <div id="web-frame-chart" class="widget-container">

        </div>
        <div id="web-polar-chart" class="widget-container-polar">

        </div>
    </div>

    <div class="middle-container">
        <div class="header-container">
            <staticBar :StaticData='StaticData' :timeShow="false"></staticBar>
        </div>
        <div class="map-container">
            <MapCharts></MapCharts>
        </div>
    </div>

    <div class="right-container">
        <div id="web-qeupiment-chart" class="widget-container">

        </div>
        <div id="web-port-chart" class="widget-container">

        </div>
        <div class="widget-container">
            <div style="color:white">组件</div>
            <Table :index="true" :listData="listData" :uiData="uiData"></Table>
        </div>
        <div id="web-point-chart" class="widget-container">

        </div>
    </div>
</div>
</template>

<script>
import MapCharts from './components/DataContainer/MapComponent.vue';
import Table from './components/Table/dynamicTable.vue';
import StaticBar from './components/StaticData/index.vue';

const colors = [
    "#191970",
    "#22c3aa",
    "#0000cd",
    "#1e90ff",
    "#00bfff",
    "#4682b4"
]

export default {
    components: {
        MapCharts,
        Table,
        StaticBar
    },
    data() {
        return {
            StaticData: [{
                    key: "site",
                    value: 3287303017,
                    title: "站点",
                    precision: 0,
                    tag: "个",
                    preIcon: "el-icon-top",
                    style: "color:red",
                    type: "value",
                },
                {
                    key: "qeuipment",
                    value: 5927696468,
                    title: "设备",
                    preIcon: "el-icon-top",
                    style: "color:red",
                    type: "value",
                },
                {
                    key: "component",
                    value: 146832,
                    title: "组件",
                    type: "value",
                },
            ],

            webOption: {
                title: {
                    show: true,
                    text: 'Web应用',
                    textStyle: {
                        color: '#fff',
                    }
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: '3%',
                    top: '20%',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [{
                    name: 'Web',
                    type: 'pie',
                    radius: ['40%', '45%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'right'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold',
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                            value: 9988,
                            name: 'WordPress',
                            itemStyle: {
                                color: colors[0],
                            }
                        },
                        {
                            value: 1288,
                            name: 'LiteSpeed',
                            itemStyle: {
                                color: colors[1],
                            }
                        },
                        {
                            value: 580,
                            name: 'phpMyAdmin',
                            itemStyle: {
                                color: colors[2],
                            }
                        },
                        {
                            value: 484,
                            name: 'Shopify',
                            itemStyle: {
                                color: colors[3],
                            }
                        },
                        {
                            value: 300,
                            name: 'DedeCMS',
                            itemStyle: {
                                color: colors[4],
                            }
                        }
                    ]
                }]
            },

            webFrameOption: {
                title: {
                    show: true,
                    text: 'Web框架',
                    textStyle: {
                        color: '#fff',
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold',
                        textStyle: {
                            color: '#fff',
                        }
                    }
                },
                labelLine: {
                    show: true,
                    lineStyle: {
                        color: "#fff"
                    }
                },
                series: [{
                    name: 'Web',
                    type: 'pie',
                    radius: ['40%', '45%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'right',
                        color: '#fff'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold',
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    data: [{
                            value: 4586,
                            name: 'ASP.NET MVC',
                            itemStyle: {
                                color: colors[0],
                            }
                        },
                        {
                            value: 2235,
                            name: 'Codelgniter',
                            itemStyle: {
                                color: colors[1],
                            }
                        },
                        {
                            value: 1203,
                            name: 'ThinkPhp',
                            itemStyle: {
                                color: colors[2],
                            }
                        },
                        {
                            value: 1108,
                            name: 'Apache Coyote',
                            itemStyle: {
                                color: colors[3],
                            }
                        },
                        {
                            value: 300,
                            name: 'ExpressJS',
                            itemStyle: {
                                color: colors[4],
                            }
                        }
                    ]
                }]
            },

            webContainerOption: {
                title: {
                    text: 'Web 容器',
                    textStyle: {
                        color: '#fff',
                    }
                },
                grid: {
                    left: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false // 取消 x 轴标签显示
                    },
                    axisTick: {
                        show: false // 取消 x 轴刻度线显示
                    },
                    splitLine: {
                        show: false
                    },

                },
                yAxis: {
                    type: 'category',
                    data: ['Nginx', 'Apache Httpd', 'MiscroSoft IIS Httpd', 'LiteSpeed1', 'Tengine', 'LiteSpeeds', 'Tengine3', 'LiteSpeed3', ],
                    axisLabel: {
                        show: false // 取消 y 轴标签显示
                    },
                    axisTick: {
                        show: false // 取消 y 轴刻度线显示
                    },
                    axisLabel: {
                        color: '#fff'
                    }

                },
                series: [{
                    data:this.sortedData([8110, 9312, 9011, 9134, 1190, 2156, 12385, 9956]),
                    type: 'bar',
                    barMaxWidth: '30%',
                    itemStyle: {
                        color: function (params) {
                            // 自定义颜色
                            var colorList = colors;
                            return colorList[(params.dataIndex) % colorList.length];
                        },
                    },
                    label: {
                        show: true,
                        position: 'right',
                        borderWitdh: 0,
                        borderColor: '#fff',
                        color: '#fff',
                        formatter: function (params) {
                            if (typeof params.value === 'number') {
                                return params.value.toLocaleString(); // 使用千位分隔符的格式显示数字
                            } else {
                                return params.value;
                            }
                        }
                    }
                }],
            },

            webEquipmentOption: {
                title: {
                    show: true,
                    text: '设备',
                    textStyle: {
                        color: '#fff',
                    }
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: '0%',
                    top: '15%',
                    textStyle: {
                        color: '#fff',
                    }
                },
                series: [{
                    name: 'Web',
                    type: 'pie',
                    radius: ['40%', '45%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'right'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 15,
                            fontWeight: 'bold',
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                            value: 1048,
                            name: 'Unknown',
                            itemStyle: {
                                color: colors[0],
                            }
                        },
                        {
                            value: 735,
                            name: 'Broadband Router',
                            itemStyle: {
                                color: colors[1],
                            }
                        },
                        {
                            value: 580,
                            name: 'Webcam',
                            itemStyle: {
                                color: colors[2],
                            }
                        },
                        {
                            value: 484,
                            name: 'VoIP Adapter',
                            itemStyle: {
                                color: colors[3],
                            }
                        },
                        {
                            value: 300,
                            name: 'WAP',
                            itemStyle: {
                                color: colors[4],
                            }
                        }
                    ]
                }]
            },

            portOption: {
                title: {
                    show: true,
                    text: '端口',
                    textStyle: {
                        color: '#fff',
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['80', '7547', '443', '22', '21', ],
                    axisLabel: {
                        color: '#fff'
                    },

                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },

                },
                series: [{
                    data: this.sortedData([34562356, 33562356, 45602356, 55562356, 34562356]),
                    type: 'bar',
                    barMaxWidth: '30%',
                    itemStyle: {
                        color: function (params) {

                            var colorList = colors;
                            return colorList[params.dataIndex];
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        borderWitdh: 0,
                        borderColor: '#fff',
                        color: '#fff',
                        formatter: function (params) {
                            if (typeof params.value === 'number') {
                                return params.value.toLocaleString(); // 使用千位分隔符的格式显示数字
                            } else {
                                return params.value;
                            }
                        }
                    }
                }]
            },

            pointOption: {
                title: {
                    show: true,
                    text: '服务',
                    textStyle: {
                        color: '#fff',
                    }
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [{
                    type: 'graph',
                    layout: 'circular',
                    draggable: true,
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true
                    },
                    data: [{
                            name: 'FTP',
                            x: 300,
                            y: 150,
                            value: 96546135
                        },
                        {
                            name: 'Unknown',
                            x: 500,
                            y: 300,
                            value: 71565936
                        },
                    ],

                }]
            },

            listData: [{
                    name: 'Unknown',
                    number: 123456
                },
                {
                    name: 'Apache',
                    number: 123456
                },
                {
                    name: 'Nginx',
                    number: 123456
                },

            ],
            uiData: [{
                    label: '名称',
                    prop: 'name',
                },
                {
                    label: '数量',
                    prop: 'number'
                }
            ],
        }
    },
    mounted() {
        this.generateWebChart();
        this.generateWebFrameChart();
        this.generateWebFramePolarChart();
        this.generateWebqEupimentPolarChart();
        this.generateWebqPortPolarChart();
        this.generateWebqPointPolarChart();
    },
    destroyed: function () {
        /*
        在调用destroyed的时候, 表示当前组件已经被销毁了
        注意点: 只要组件不被销毁, 那么destroyed就不会调用
                不要在这个生命周期方法中再去操作组件中数据和方法
        * */
        clearInterval(this.refresh);
        this.refresh = null;

    },
    methods: {
        refreshChart(chartName, option) {
            var chart = document.getElementById(chartName);
            var chartInstance = this.$echarts.getInstanceByDom(chart);
            chartInstance.setOption(option);
        },

        generateWebChart() {
            var myChart = this.$echarts.init(document.getElementById('web-application-chart'));
            myChart.setOption(this.webOption);
        },

        generateWebFrameChart() {
            var myChart = this.$echarts.init(document.getElementById('web-frame-chart'));
            myChart.setOption(this.webFrameOption);
        },

        generateWebFramePolarChart() {
            var myChart = this.$echarts.init(document.getElementById('web-polar-chart'));
            myChart.setOption(this.webContainerOption);
        },

        generateWebqEupimentPolarChart() {
            var myChart = this.$echarts.init(document.getElementById('web-qeupiment-chart'));
            myChart.setOption(this.webEquipmentOption);
        },

        generateWebqPortPolarChart() {
            var myChart = this.$echarts.init(document.getElementById('web-port-chart'));
            myChart.setOption(this.portOption);
        },

        generateWebqPointPolarChart() {
            var myChart = this.$echarts.init(document.getElementById('web-point-chart'));
            myChart.setOption(this.pointOption);
        },

        sortedData(data) {
            return data.sort(function (a, b) {
                return a-b; // 按照从大到小的顺序排列
            });
        }
    },
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background: #131124;
    overflow: hidden;
}

.dashboard {
    display: flex;
    flex-direction: row;
    padding: 10px;
    background-color: #131124;
}

.middle-container {
    width: 50%;
    height: 100%;

}

.header-container {
    height: 120px;
    margin: 30px;
}

.map-container {
    height: 100%;
}

.right-container {
    display: flex;
    flex-direction: column;
    width: 25%;
}

.widget-container {
    height: 300px;
}

.widget-container-polar {
    height: 600px;
}
</style>
