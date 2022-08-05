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
      {value: [118.604511, 38.971452], itemStyle: { color: '#f667a6'}},
      {value: [127.912586, 44.064687], itemStyle: { color: '#fc3c4c'}},
      {value: [110.976103, 34.706456], itemStyle: { color: '#fc8646'}},
      {value: [125.039845, 49.17623], itemStyle: { color: '#f55a46'}},
      {value: [116.049595, 29.761881], itemStyle: { color: '#f6a274'}},
      {value: [123.50862, 25.722867], itemStyle: { color: '#eea670'}},
      {value: [114.902716, 41.695715], itemStyle: { color: '#e87162'}},
      {value: [116.597165, 41.935679], itemStyle: { color: '#f5639c'}},
      {value: [117.074518, 37.848837], itemStyle: { color: '#e8848d'}},
      {value: [111.29208, 34.806759], itemStyle: { color: '#e85b9d'}},
      {value: [110.793169, 37.650567], itemStyle: { color: '#f6a5a0'}},
      {value: [123.323838, 44.179823], itemStyle: { color: '#f160c9'}},
      {value: [118.788061, 46.687227], itemStyle: { color: '#f65299'}},
      {value: [119.586934, 40.375381], itemStyle: { color: '#f81d61'}},
      {value: [124.431913, 42.930803], itemStyle: { color: '#ff5345'}},
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
          {coords: [[127.912586, 44.064687], [115.95166, 40.281852]], lineStyle: { color: '#f667a6'}},
          {coords: [[118.604511, 38.971452], [115.95166, 40.281852]], lineStyle: { color: '#fc3c4c'}},
          {coords: [[110.976103, 34.706456], [115.95166, 40.281852]], lineStyle: { color: '#fc8646'}},
          {coords: [[125.039845, 49.17623], [115.95166, 40.281852]], lineStyle: { color: '#f55a46'}},
          {coords: [[116.049595, 29.761881], [115.95166, 40.281852]], lineStyle: { color: '#f6a274'}},
          {coords: [[123.50862, 25.722867], [115.95166, 40.281852]], lineStyle: { color: '#eea670'}},
          {coords: [[114.902716, 41.695715], [115.95166, 40.281852]], lineStyle: { color: '#e87162'}},
          {coords: [[116.597165, 41.935679], [115.95166, 40.281852]], lineStyle: { color: '#f5639c'}},
          {coords: [[117.074518, 37.848837], [115.95166, 40.281852]], lineStyle: { color: '#e8848d'}},
          {coords: [[111.29208, 34.806759], [115.95166, 40.281852]], lineStyle: { color: '#e85b9d'}},
          {coords: [[110.793169, 37.650567], [115.95166, 40.281852]], lineStyle: { color: '#f6a5a0'}},
          {coords: [[123.323838, 44.179823], [115.95166, 40.281852]], lineStyle: { color: '#f160c9'}},
          {coords: [[118.788061, 46.687227], [115.95166, 40.281852]], lineStyle: { color: '#f65299'}},
          {coords: [[119.586934, 40.375381], [115.95166, 40.281852]], lineStyle: { color: '#f81d61'}},
          {coords: [[124.431913, 42.930803], [115.95166, 40.281852]], lineStyle: { color: '#ff5345'}},
          {coords: [[129.467833, 43.874741], [115.95166, 40.281852]], lineStyle: { color: '#8b93e3'}},
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
    height: 900px;
  }
}
</style>
