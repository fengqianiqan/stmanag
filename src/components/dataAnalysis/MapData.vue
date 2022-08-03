<template>
<div class="map-data">
  <div id="main"></div>
</div>
</template>

<script>
import echarts from 'echarts'
import geoJson from '../../assets/data.json'
export default {
  name: 'MapData',
  data () {
    return {

    }
  },
  mounted () {
    var myChart = this.$echarts.init(document.getElementById('main'))
    echarts.registerMap('china', geoJson)
    var points = [
      {value: [118.604511, 38.971452], itemStyle: { color: '#A44AE5'}},
      {value: [127.912586, 44.064687], itemStyle: { color: '#ad49e5'}},
      {value: [110.976103, 34.706456], itemStyle: { color: '#a39af5'}},
      {value: [125.039845, 49.17623], itemStyle: { color: '#804ae5'}},
      {value: [116.049595, 29.761881], itemStyle: { color: '#9b80cd'}},
      {value: [123.50862, 25.722867], itemStyle: { color: '#9d87bf'}},
      {value: [114.902716, 41.695715], itemStyle: { color: '#79649a'}},
      {value: [116.597165, 41.935679], itemStyle: { color: '#6e68aa'}},
      {value: [117.074518, 37.848837], itemStyle: { color: '#836cbb'}},
      {value: [111.29208, 34.806759], itemStyle: { color: '#9e8eec'}},
      {value: [110.793169, 37.650567], itemStyle: { color: '#5677d0'}},
      {value: [123.323838, 44.179823], itemStyle: { color: '#654a99'}},
      {value: [118.788061, 46.687227], itemStyle: { color: '#9a7bec'}},
      {value: [119.586934, 40.375381], itemStyle: { color: '#ddd4f1'}},
      {value: [124.431913, 42.930803], itemStyle: { color: '#c8adee'}},
      {value: [129.467833, 43.874741], itemStyle: { color: '#8b93e3'}},
      {value: [119.084944, 32.452602], itemStyle: { color: '#7a52ba'}},
      {value: [118.493026, 28.262509]}
    ]
    var option = {
      backgroundColor: 'rgb(121,145,209)',
      geo: {
        map: 'china',
        aspectScale: 0.75,
        zoom: 1.1,
        itemStyle: {
          normal: {
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: '#09132c'
              }, {
                offset: 1,
                color: '#274d68'
              }],
              globalCoord: true
            },
            shadowColor: 'rgb(58,115,192)',
            shadowOffsetX: 10,
            shadowOffsetY: 11
          }
        },
        regions: [{
          name: '南海诸岛',
          itemStyle: {
            opacity: 0
          }
        }]
      },
      series: [{
        type: 'map',
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#f6d9fc'
            }
          },
          emphasis: {
            textStyle: {
              color: 'rgb(181,144,205)'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgb(147,235,248)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 1,
                color: 'rgb(31,54,150)'
              }, {
                offset: 0,
                color: 'rgb(67,126,187)'
              }],
              globalCoord: true
            }
          },
          emphasis: {
            areaColor: 'rgb(7,32,161)',
            borderWidth: 0.1
          }
        },
        zoom: 1.1,
        map: 'china'
      },
        // 散点图
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        zlevel: 1,
        symbolSize: 5,
        data: points,
        rippleEffect: {
          period: 15,
          scale: 4,
          brushType: 'fill'
        }
      },
        // 线图
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          traillength: 0.4,
          show: true,
          period: 4,
          symbol: 'arrow',
          symbolSize: 7
        },
        lineStyle: {
          normal: {
            color: '#1de986',
            width: 1,
            opacity: 0.1,
            curveness: 0.3
          }
        },
        data: [
          {coords: [[127.912586, 44.064687], [115.95166, 40.281852]], lineStyle: { color: '#ad49e5'}},
          {coords: [[118.604511, 38.971452], [115.95166, 40.281852]], lineStyle: { color: '#d4c0e2'}},
          {coords: [[110.976103, 34.706456], [115.95166, 40.281852]], lineStyle: { color: '#a39af5'}},
          {coords: [[125.039845, 49.17623], [115.95166, 40.281852]], lineStyle: { color: '#d2bcfa'}},
          {coords: [[116.049595, 29.761881], [115.95166, 40.281852]], lineStyle: { color: '#9b80cd'}},
          {coords: [[123.50862, 25.722867], [115.95166, 40.281852]], lineStyle: { color: '#9d87bf'}},
          {coords: [[114.902716, 41.695715], [115.95166, 40.281852]], lineStyle: { color: '#d6c2f5'}},
          {coords: [[116.597165, 41.935679], [115.95166, 40.281852]], lineStyle: { color: '#bbb5fa'}},
          {coords: [[117.074518, 37.848837], [115.95166, 40.281852]], lineStyle: { color: '#836cbb'}},
          {coords: [[111.29208, 34.806759], [115.95166, 40.281852]], lineStyle: { color: '#9e8eec'}},
          {coords: [[110.793169, 37.650567], [115.95166, 40.281852]], lineStyle: { color: '#9db0e5'}},
          {coords: [[123.323838, 44.179823], [115.95166, 40.281852]], lineStyle: { color: '#eae2fa'}},
          {coords: [[118.788061, 46.687227], [115.95166, 40.281852]], lineStyle: { color: '#9a7bec'}},
          {coords: [[119.586934, 40.375381], [115.95166, 40.281852]], lineStyle: { color: '#c3aef1'}},
          {coords: [[124.431913, 42.930803], [115.95166, 40.281852]], lineStyle: { color: '#d3c9e0'}},
          {coords: [[129.467833, 43.874741], [115.95166, 40.281852]], lineStyle: { color: '#c6cbfd'}},
          {coords: [[119.084944, 32.452602], [115.95166, 40.281852]], lineStyle: { color: '#7a52ba'}},
          {coords: [[118.493026, 28.262509], [115.95166, 40.281852]]}
        ]
      }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style lang="scss">
.map-data{
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
