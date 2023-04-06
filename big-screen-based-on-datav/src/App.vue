<template>
  <div class="dashboard">
    <div class="left-container">
      <div id="web-application-chart" class="widget-container-left"></div>
      <div id="web-frame-chart" class="widget-container-left"></div>
      <div id="web-polar-chart" class="widget-container-left"></div>
    </div>

    <div class="middle-container">
      <div class="mid-container">
        <staticBar v-show="showWebBar" :StaticData="StaticData" :timeShow="false"></staticBar>
      </div>
      <div class="mid-container">
        <MapCharts></MapCharts>
      </div>
    </div>

    <div class="right-container">
      <div id="web-qeupiment-chart" class="widget-container-right"></div>
      <div id="web-port-chart" class="widget-container-right"></div>
      <div class="widget-container-right">
        <div style="color: white">组件</div>
        <Table :index="true" :listData="listData" :uiData="uiData"></Table>
      </div>
      <div id="web-point-chart" class="widget-container-right"></div>
    </div>
  </div>
</template>

<script>
import MapCharts from "./components/DataContainer/MapComponent.vue";
import Table from "./components/Table/dynamicTable.vue";
import StaticBar from "./components/StaticData/index.vue";
import {
  webOption,
  webFrameOption,
  webContainerOption,
  webEquipmentOption,
  portOption,
  serviceOption,
} from "./config/EchartsConfig";

export default {
  components: {
    MapCharts,
    Table,
    StaticBar,
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      StaticData: [
        {
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
      listData: [
        {
          name: "Unknown",
          number: 123456,
        },
        {
          name: "Apache",
          number: 123456,
        },
        {
          name: "Nginx",
          number: 123456,
        },
      ],
      uiData: [
        {
          label: "名称",
          prop: "name",
        },
        {
          label: "数量",
          prop: "number",
        },
      ],
      charts: [],
      showWebBar:true,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    // 初始化获取窗口大小
    this.getWindowSize();
    this.generateWebChart();
    this.generateWebFrameChart();
    this.generateWebFramePolarChart();
    this.generateWebqEupimentPolarChart();
    this.generateWebqPortPolarChart();
    this.generateWebqPointPolarChart();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
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
    handleResize() {
      console.log('window resize');
      console.log(this.windowWidth);
      console.log(this.windowHeight);
      if(this.windowWidth<=1000){
          this.showWebBar=false;
      }
      for (let i = 0; i < this.charts.length; i++) {
        this.charts[i].resize();
      }
    },
    getWindowSize() {
      // 获取窗口大小
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    refreshChart(chartName, option) {
      var chart = document.getElementById(chartName);
      var chartInstance = this.$echarts.getInstanceByDom(chart);
      chartInstance.setOption(option);
    },

    generateWebChart() {
      var myChart = this.$echarts.init(
        document.getElementById("web-application-chart")
      );
      myChart.setOption(webOption);
      this.charts.push(myChart);
    },

    generateWebFrameChart() {
      var myChart = this.$echarts.init(
        document.getElementById("web-frame-chart")
      );
      myChart.setOption(webFrameOption);
      this.charts.push(myChart);
    },

    generateWebFramePolarChart() {
      var myChart = this.$echarts.init(
        document.getElementById("web-polar-chart")
      );
      myChart.setOption(webContainerOption);
      this.charts.push(myChart);
    },

    generateWebqEupimentPolarChart() {
      var myChart = this.$echarts.init(
        document.getElementById("web-qeupiment-chart")
      );
      myChart.setOption(webEquipmentOption);
      this.charts.push(myChart);
    },

    generateWebqPortPolarChart() {
      var myChart = this.$echarts.init(
        document.getElementById("web-port-chart")
      );
      myChart.setOption(portOption);
      this.charts.push(myChart);
    },

    generateWebqPointPolarChart() {
      var myChart = this.$echarts.init(
        document.getElementById("web-point-chart")
      );
      myChart.setOption(serviceOption);
      this.charts.push(myChart);
    },
  },
};
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
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
}

.left-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  height: 100%;
  gap: 10px;
}

.widget-container-left {
  padding: 20px;
  text-align: center;
  font-size: 24px;
}

.widget-container-left-polar {
  padding: 20px;
  text-align: center;
  font-size: 24px;
}

.middle-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 3fr;
  height: 100%;
  gap: 10px;
}

.mid-container{
  padding: 20px;
  
  font-size: 24px;
}

.right-container{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 100%;
  gap: 10px;
}

.widget-container-right{
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
}

@media screen and (max-width: 1000px) {
  body {
    overflow: auto;
  }
  .dashboard{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .left-container{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .middle-container{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .right-container{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
}


</style>
