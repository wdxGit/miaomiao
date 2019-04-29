<template>
<div id="content">
  <div :style="{height: windowHeight}">
    <cube-index-list :data="cityData" @select="selectItem" @title-click="clickTitle"></cube-index-list>
  </div>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'city',
  data() {
    return {
      windowHeight: window.innerHeight + "px",
      hotList:[],
      cityData: [
        {
          "name": "A",
          "items": [{
              "name": "ANSHAN",
              "value": 3
            },
            {
              "name": "ANQING",
              "value": 4
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.axios.get('/api/cityList')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err);
      })
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    }
  },
  components: {

  }
}
</script>

<style scoped lang='scss'>

</style>