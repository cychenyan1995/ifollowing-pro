<template>
  <section class="section">
    <!--  <el-progress type="circle" :percentage="25" color="#8e71c7"></el-progress> -->
    <!-- #5ca3ff -->
    <el-row>
      <el-col :span="12">
        <div id="onlineChart" style="height: 300px"></div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import echarts from 'echarts'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // notOnlineNum: 0
    }
  },
  methods: {
    initOnlineInfoChart() {
      const myChart = echarts.init(document.getElementById('onlineChart'))
      myChart.showLoading()
      myChart.setOption(this.option)
      myChart.hideLoading()
    },
    getOnlineChartData() {
      let params = {}
      this.$store.dispatch('deviceManage/fetchOnlineNum', params)
    }
  },
  computed: {
    //从state中取出数据
    ...mapState({
      totalNum: state => state.deviceManage.totalNum,
      onlineNum: state => state.deviceManage.onlineNum,
    }),
    origin () {
      return this.$state.deviceManage
    },
    notOnlineNum () {
      return this.totalNum - this.onlineNum
    },
    option() {
      let obj = {
        title: {
          text: this.origin[totalNum],
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '30'
          }
        },
        color: ['rgba(176, 212, 251, 1)'],
        legend: {
          show: true,
          itemGap: 12,
          data: ['01', '02']
        },

        series: [{
          name: 'Line 1',
          type: 'pie',
          clockWise: true,
          radius: ['50%', '56%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          data: [{
            value: this.origin[totalNum],
            name: '01',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#00cefc' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#367bec' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '02',
            value: this.origin[onlineNum]
          }]
        }]
      }
      return obj
    }
  },
  mounted() {
    this.getOnlineChartData()
    this.initOnlineInfoChart()
  },
  updated () {
    //this.$nextTick(function () {
      this.initOnlineInfoChart()
    //})
  }
}

</script>
