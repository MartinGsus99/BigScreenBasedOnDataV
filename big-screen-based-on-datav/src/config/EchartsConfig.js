const colors = [
    "#191970",
    "#22c3aa",
    "#0000cd",
    "#1e90ff",
    "#00bfff",
    "#4682b4"
]

var sortedData = function (data) {
    return data.sort(function (a, b) {
        return a - b; // 按照从大到小的顺序排列
    });
}

export const webOption = {
    title: {
        show: true,
        text: 'Web应用',
        textStyle: {
            color: '#fff',
        }
    },

    //设置标签样式
    label: {
        show: false,
        position: 'right',
        color: '#fff',
    },
    labelLine: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
    },
    series: [{
        name: 'Web',
        type: 'pie',
        radius: ['40%', '48%'],
        avoidLabelOverlap: true,
        label: {
            show: true,
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
};

export const webFrameOption = {
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
    //设置标签样式
    label: {
        show: false,
        position: 'center',
        color: '#fff',
    },
    labelLine: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
    },
    series: [{
        name: 'Web',
        type: 'pie',
        radius: ['40%', '48%'],
        avoidLabelOverlap: true,
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
};

export const webContainerOption = {
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
    tooltip: {
        trigger: 'item',
        formatter: '{c}个.'
    },
    yAxis: {
        type: 'category',
        data: ['Nginx', 'Apache Httpd', 'MiscroSoft IIS Httpd', 'LiteSpeed1', 'Tengine', 'LiteSpeeds', 'Tengine3', 'LiteSpeed3',],
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
        data: sortedData([8110, 9312, 9011, 9134, 1190, 2156, 12385, 9956]),
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
};

export const webEquipmentOption = {
    title: {
        show: true,
        text: '设备',
        textStyle: {
            color: '#fff',
        }
    },
 
    //设置标签样式
    label: {
        show: false,
        position: 'center',
        color: '#fff',
    },
    labelLine: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
    },
    series: [{
        name: 'Web',
        type: 'pie',
        radius: ['40%', '48%'],
        avoidLabelOverlap: true,
        label: {
            show: true,
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
};

export const portOption = {
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
    tooltip: {
        trigger: 'item',
        formatter: '{c}个.'
    },
    xAxis: {
        type: 'category',
        data: ['80', '7547', '443', '22', '21',],
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
        data: sortedData([34562356, 33562356, 45602356, 55562356, 34562356]),
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
};

export const serviceOption = {
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
        layout: 'none',
        draggable: true,
        symbolSize: 50,
        roam: true,
        label: {
            show: true
        },
        data: [{
            name: 'FTP',
            x: 300,
            y: 300,
            value: 96546135
        },
        {
            name: 'Unknown',
            x: 400,
            y: 300,
            value: 71565936
        },
        ],

    }]
};