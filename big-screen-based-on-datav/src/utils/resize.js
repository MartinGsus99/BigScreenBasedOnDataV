import elementResizeDetectorMaker from 'element-resize-detector'
 
// Echart  监听div容器和窗口变化，自适应图表
 
/*
*  that: 当前调用方法的this对象
*  myChart：echart图对象
*  domId：容器id
*/
export function chartResizeListen(that, myChart, domId) {
  // 监听window窗口变化
  window.addEventListener('resize', () => {
    myChart.resize()
  })
  
  // 监听div大小变化
  const erd = elementResizeDetectorMaker()
  erd.listenTo(document.getElementById(domId), element => {
    that.$nextTick(() => {
      myChart.resize()
    })
  })
}