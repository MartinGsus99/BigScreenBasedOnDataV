<template>
    <div class="view-container">
        <div class="header-box">
            <el-card id="projectType">
                <Dynamic-Echarts
                    class="mgt10"
                    ref="projectTypeEchart"
                    :height="lineHeight"
                    :width="lineWidth"
                    :optionData="projectTypeOptionsObj"
                    ></Dynamic-Echarts>
            </el-card>
            <el-card id="analysisAccount">
                <Dynamic-Echarts
                    class="mgt10"
                    ref="analysisAccountEchart"
                    :height="lineHeight"
                    :width="lineWidth"
                    :optionData="analysisAccountptionsObj"
                ></Dynamic-Echarts>
            </el-card>
        </div>
        <div class="footer-box">
            <el-card id="pythonTop">
                <Dynamic-Echarts
                    class="mgt10"
                    ref="pythonTopEchart"
                    :height="lineHeight"
                    :width="lineWidth"
                    :optionData="pythonTopOptionsObj"
                    ></Dynamic-Echarts>
            </el-card>
            <el-card id="javaTop">
                <Dynamic-Echarts
                    class="mgt10"
                    ref="javaTopEchart"
                    :height="lineHeight"
                    :width="lineWidth"
                    :optionData="javaTopOptionsObj"
                ></Dynamic-Echarts>
            </el-card>
            <el-card id="jsTop">
                <Dynamic-Echarts
                    class="mgt10"
                    ref="jsTopEchart"
                    :height="lineHeight"
                    :width="lineWidth"
                    :optionData="jsTopOptionsObj"
                ></Dynamic-Echarts>
            </el-card>
        </div>
    </div>
</template>
<script>
import { analysisAccountOption, projectTypeOption, pythonTopOption, javaTopOption, jsTopOption } from '@/config/indexOption'

import { getIndexChart } from '@/api/chart'

export default {
    name: 'index',
    components: {},
    data() {
        return {
            screenWidth: '',
            screenHeight: '',
            lineHeight:'',
            lineWidth: '100%',
            projectTypeOptionsObj: {},
            analysisAccountptionsObj: {},
            pythonTopOptionsObj: {},
            javaTopOptionsObj: {},
            jsTopOptionsObj: {},
        }
    },
    computed: {},
    watch: {
        screenWidth(val) {
            this.resetSize()
        },
       screenHeight(val) {
           this.initBoxStyle()
           this.resetSize()
       },
    },
    created() {},
    mounted() {
        this.getData()
        this.initBoxStyle()
        window.onresize = () => {
        //屏幕尺寸变化就重新赋值
            return (() => {
                this.screenWidth = document.documentElement.clientWidth
                this.screenHeight = document.documentElement.clientHeight
            })()
        }
    },
    methods : {
        initBoxStyle() {
            this.lineHeight = (document.getElementById('projectType').clientHeight - 20) + 'px';
        },
        getData() {
            getIndexChart().then((res)=>{
                if(res.success){
                    console.log(res.data)
                    this.getProjectTypeOption(res.data.distribution)
                    this.getAnalysisAccountOption(res.data.frequency[2023])
                    this.getPythonTopOption(res.data.dependenciesTop5.python_TOP5)
                    this.getJavaTopOption(res.data.dependenciesTop5.java_TOP5)
                    this.getJsTopOption(res.data.dependenciesTop5.JavaScript_TOP5)

                    this.projectTypeOptionsObj = { ...projectTypeOption }
                    this.analysisAccountptionsObj = { ...analysisAccountOption }
                    this.pythonTopOptionsObj = { ...pythonTopOption }
                    this.javaTopOptionsObj = { ...javaTopOption }
                    this.jsTopOptionsObj = { ...jsTopOption }
                }
            })
        },
        getProjectTypeOption(data){
            projectTypeOption.series[0].data[0].value = data.Java.number
            projectTypeOption.series[0].data[1].value = data.python.number
            projectTypeOption.series[0].data[2].value = data.JavaScript.number
        },
        getAnalysisAccountOption(data){
            analysisAccountOption.xAxis.data = []
            analysisAccountOption.series.forEach(element=>{
                element.data = []
            })
            data.sort((a,b)=>{
                return a.month - b.month
            })
            data.forEach(element => {
                if(element.month + '月' !== analysisAccountOption.xAxis.data.at(-1)){
                    analysisAccountOption.xAxis.data.push(element.month + '月')
                }
                switch(element.language){
                    case 0:
                        analysisAccountOption.series[0].data.push(element.number)
                        break
                    case 1:
                        analysisAccountOption.series[1].data.push(element.number)
                        break
                    case 2:
                        analysisAccountOption.series[2].data.push(element.number)
                        break
                    case 3:
                        analysisAccountOption.series[3].data.push(element.number)
                        break
                    default:
                        break
                }
            })
        },
        getPythonTopOption(data){
            pythonTopOption.xAxis.data = []
            pythonTopOption.series[0].data = []
            data.forEach((element)=>{
                pythonTopOption.xAxis.data.push(element.name)
                pythonTopOption.series[0].data.push(element.number)
            })
        },
        getJavaTopOption(data){
            javaTopOption.xAxis.data = []
            javaTopOption.series[0].data = []
            data.forEach((element)=>{
                javaTopOption.xAxis.data.push(element.name[0][1]+'\n'+element.name[1][1])
                javaTopOption.series[0].data.push(element.number)
            })
        },
        getJsTopOption(data){
            jsTopOption.xAxis.data = []
            jsTopOption.series[0].data = []
            data.forEach((element)=>{
                jsTopOption.xAxis.data.push(element.name)
                jsTopOption.series[0].data.push(element.number)
            })
        },
        resetSize(){
            this.$refs.projectTypeEchart.reLoadEchart();
            this.$refs.analysisAccountEchart.reLoadEchart();
            this.$refs.pythonTopEchart.reLoadEchart();
            this.$refs.javaTopEchart.reLoadEchart();
            this.$refs.jsTopEchart.reLoadEchart();
        },
    }
}
</script>
<style lang="scss" scoped>
   .view-container {
       position: relative;
       padding: 10px;
       margin: 0;
       width: 100%;
       height: calc(100vh - 50px);
       overflow: hidden;
   }

   .header-box {
       display: grid;
       grid-template-columns: 1fr 2fr;
       grid-column-gap: 10px;
       height: 45vh;
       width: 100%;
       margin-bottom: 2vh;
   }

   .footer-box {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr;
       grid-column-gap: 10px;
       height: 45vh;
       width: 100%;
   }
</style>