export const CPUoption = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'CPU Usage',
        type: 'gauge',
        detail: {
            valueAnimation: true,
            fontSize: 20,
            formatter: '{value}%'
        },
        data: [{
            value: 0,
            name: 'CPU占用'
        }]
    }]
}
