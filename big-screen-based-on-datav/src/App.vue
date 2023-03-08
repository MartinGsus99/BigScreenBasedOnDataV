<template lang="">
<dv-full-screen-container class='container-wrapper'>
    <dv-border-box-8>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light">

                            <dv-digital-flop :config="configNumber1" style="width:100%;height:100%;" />
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                            <dv-digital-flop :config="configNumber2" style="width:100%;height:100%;" />
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <h3 class='title'>无锡市智慧城市指挥系统</h3>
                            <dv-decoration-10 style="width:90%;height:5px;" />
                        </div>
                    </el-col>

                    <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                            <dv-digital-flop :config="configNumber3" style="width:100%;height:100%;" />
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                            <dv-digital-flop :config="configNumber4" style="width:100%;height:100%;" />
                        </div>
                    </el-col>
                </el-row>
            </el-header>

            <el-container class='body-wrapper'>
                <el-aside width="20%">

                    <el-row class="el-row-item ">

                        <dv-scroll-board :config="config1" style="width:500px;height:300px" />

                    </el-row>
                    <el-row class="el-row-item ">
                        <dv-capsule-chart :config="config3" style="width:500px;height:300px" />
                    </el-row>

                    <el-row class="el-row-item ">

                    </el-row>
                </el-aside>

                <el-main>

                    <dv-border-box-8 :reverse="true">
                        <dv-flyline-chart-enhanced :config="mapConfig" style="width:100%;height:100%;" />
                    </dv-border-box-8>
                </el-main>

                <el-aside width="20%">
                    <el-row class="el-row-item ">
                        <dv-scroll-ranking-board :config="config2" style="width:500px;height:300px" />
                    </el-row>
                    <el-row class="el-row-item ">
                        <dv-active-ring-chart :config="config4" style="width:300px;height:300px" />
                    </el-row>

                    <el-row class="el-row-item ">
                        <dv-decoration-2 style="width:300px;height:5px;" />
                    </el-row>
                </el-aside>
            </el-container>
        </el-container>

    </dv-border-box-8>

</dv-full-screen-container>
</template>

<script>
export default {
    data() {
        return {
            loadingFlag: false,
            polarConfig: {
                value: 85,
            },
            numberConfig1: {
                number: [100],
                content: '{nt}个'
            },
            polarDataConfig: {
                data: [{
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 123
                    },
                    {
                        name: '漯河',
                        value: 98
                    },
                    {
                        name: '郑州',
                        value: 75
                    },
                    {
                        name: '西峡',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位',
                showValue: true
            },
            option: {
                title: {
                    text: '剩余油量表',
                    style: {
                        fill: '#fff'
                    }
                },
                series: [{
                    type: 'gauge',
                    data: [{
                        name: 'itemA',
                        value: 55
                    }],
                    center: ['50%', '55%'],
                    axisLabel: {
                        formatter: '{value}%',
                        style: {
                            fill: '#fff'
                        }
                    },
                    axisTick: {
                        style: {
                            stroke: '#fff'
                        }
                    },
                    animationCurve: 'easeInOutBack'
                }]
            },
            configNumber1: {
                number: [100],
                content: '在线数量:{nt}个'
            },
            configNumber2: {
                number: [1280],
                content: '网络摄像头:{nt}个'
            },
            configNumber3: {
                number: [35],
                content: '平均道路流量:{nt}%'
            },
            configNumber4: {
                number: [98],
                content: '出警数量:{nt}人'
            },
            config1: {
                header: ['列1', '列2', '列3'],
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ],
                index: true,
                columnWidth: [],
                align: ['center']
            },
            config2: {
                data: [{
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    }
                ],
                unit: '单位'
            },
            config3: {
                data: [{
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 123
                    },
                    {
                        name: '漯河',
                        value: 98
                    },
                    {
                        name: '郑州',
                        value: 75
                    },
                    {
                        name: '西峡',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '个'
            },
            config4: {
                data: [{
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    }
                ]
            },
            option: {
                title: {
                    text: '系统拥挤度',
                    style: {
                        fill: '#fff'
                    }
                },
                series: [{
                    type: 'gauge',
                    data: [{
                        name: 'itemA',
                        value: 55
                    }],
                    center: ['50%', '55%'],
                    axisLabel: {
                        formatter: '{value}%',
                        style: {
                            fill: '#fff'
                        }
                    },
                    axisTick: {
                        style: {
                            stroke: '#fff'
                        }
                    },
                    animationCurve: 'easeInOutBack'
                }]
            },
            mapConfig: {
                points: [{
                        name: '郑州',
                        coordinate: [0.48, 0.35],
                        halo: {
                            show: true,
                        },
                        icon: {
                            src: '/img/flylineChart/mapCenterPoint.png',
                            width: 30,
                            height: 30
                        },
                        text: {
                            show: false
                        }
                    },
                    {
                        name: '新乡',
                        coordinate: [0.52, 0.23]
                    },
                    {
                        name: '焦作',
                        coordinate: [0.43, 0.29]
                    },
                    {
                        name: '开封',
                        coordinate: [0.59, 0.35]
                    },
                    {
                        name: '许昌',
                        coordinate: [0.53, 0.47]
                    },
                    {
                        name: '平顶山',
                        coordinate: [0.45, 0.54]
                    },
                    {
                        name: '洛阳',
                        coordinate: [0.36, 0.38]
                    },
                    {
                        name: '周口',
                        coordinate: [0.62, 0.55],
                        halo: {
                            show: true,
                            color: '#8378ea'
                        }
                    },
                    {
                        name: '漯河',
                        coordinate: [0.56, 0.56]
                    },
                    {
                        name: '南阳',
                        coordinate: [0.37, 0.66],
                        halo: {
                            show: true,
                            color: '#37a2da'
                        }
                    },
                    {
                        name: '信阳',
                        coordinate: [0.55, 0.81]
                    },
                    {
                        name: '驻马店',
                        coordinate: [0.55, 0.67]
                    },
                    {
                        name: '济源',
                        coordinate: [0.37, 0.29]
                    },
                    {
                        name: '三门峡',
                        coordinate: [0.20, 0.36]
                    },
                    {
                        name: '商丘',
                        coordinate: [0.76, 0.41]
                    },
                    {
                        name: '鹤壁',
                        coordinate: [0.59, 0.18]
                    },
                    {
                        name: '濮阳',
                        coordinate: [0.68, 0.17]
                    },
                    {
                        name: '安阳',
                        coordinate: [0.59, 0.10]
                    }
                ],
                lines: [{
                        source: '新乡',
                        target: '郑州'
                    },
                    {
                        source: '焦作',
                        target: '郑州'
                    },
                    {
                        source: '开封',
                        target: '郑州'
                    },
                    {
                        source: '周口',
                        target: '郑州',
                        color: '#fb7293',
                        width: 2
                    },
                    {
                        source: '南阳',
                        target: '郑州',
                        color: '#fb7293',
                        width: 2
                    },
                    {
                        source: '济源',
                        target: '郑州'
                    },
                    {
                        source: '三门峡',
                        target: '郑州'
                    },
                    {
                        source: '商丘',
                        target: '郑州'
                    },
                    {
                        source: '鹤壁',
                        target: '郑州'
                    },
                    {
                        source: '濮阳',
                        target: '郑州'
                    },
                    {
                        source: '安阳',
                        target: '郑州'
                    },
                    {
                        source: '许昌',
                        target: '南阳',
                        color: '#37a2da'
                    },
                    {
                        source: '平顶山',
                        target: '南阳',
                        color: '#37a2da'
                    },
                    {
                        source: '洛阳',
                        target: '南阳',
                        color: '#37a2da'
                    },
                    {
                        source: '驻马店',
                        target: '周口',
                        color: '#8378ea'
                    },
                    {
                        source: '信阳',
                        target: '周口',
                        color: '#8378ea'
                    },
                    {
                        source: '漯河',
                        target: '周口',
                        color: '#8378ea'
                    }
                ],
                icon: {
                    show: true,
                    src: '/img/flylineChart/mapPoint.png'
                },
                text: {
                    show: true,
                },
                k: 0.5,
                bgImgSrc: '/img/flylineChart/map.jpg'
            }
        };
    },
};
</script>

<style lang="css">
body,
html {
    width: 100%;
    overflow-x: hidden;
}

.container-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-image: url("./assets/img/bg2.jpeg");
    position: fixed;

    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    padding-bottom: 20px;
}

.body-wrapper {
    padding-top: 30px;
    margin: 30px;
}

.title {
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.item-title {
    color: #fff;
    font-size: 15px;
    text-align: center;
}

.grid-content-mid {
    height: 1000px;
}

.el-row-item {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-top: 20px;
}

.el-card {
    min-width: 100%;
    height: 100%;
    margin-right: 20px;
    transition: all .5s;
}
</style>
