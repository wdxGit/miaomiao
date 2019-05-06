<template>
<div class="city">

  <div class="city_hot" ref="city_hot" v-if="isloading">
    <!-- <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul class="clearfix">
                            <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.nm , item.id)">{{ item.nm }}</li>
                        </ul>
                    </div>
  <div :style="{height: windowHeight}">
    <cube-index-list :data="cityList" @select="selectItem" @title-click="clickTitle"></cube-index-list>
  </div> -->

    <mt-index-list>
      <mt-index-section index="热门">
        <mt-cell v-for="(item, index) in hotList" :key="index" :title="item.nm" class="hot" @touchend.native="handleTocity(item.nm,item.id)"></mt-cell>
      </mt-index-section>
      <mt-index-section :index="item.name" v-for="(item, index) in cityList" :key="index" style="clear:both;">
        <mt-cell v-for="(item, index) in item.items" :key="index" :title="item.name" @touchend.native="handleTocity(item.name,item.value)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
  <loading v-else></loading>
</div>
</template>

<script type='text/ecmascript-6'>
import {
  mapState
} from 'vuex'
export default {
  name: 'city',
  data() {
    return {
      hotList: [],
      cityList: [],
      isloading: false
    };
  },
  mounted() {
    if (this.storeCityList.length && this.hotCityList.length) {
      this.cityList = this.storeCityList;
      this.hotList=this.hotCityList;
      this.isloading = true;
    } else {
      this.axios.get('/api/cityList')
        .then(res => {
          var msg = res.data.msg;
          if (msg === 'ok') {
            var cities = res.data.data.cities;
            //[ { name : 'A' , list : [{ name : '阿城' , value : 123 }] } ]
            var {
              cityList,
              hotList
            } = this.formatCityList(cities);
            this.cityList = cityList;
            this.hotList = hotList;
            this.isloading = true;
            this.$store.dispatch('getCityList', cityList);
            this.$store.dispatch('getHotCityList', hotList);
          }
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];

      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) { //新添加index
          cityList.push({
            name: firstLetter,
            items: [{
              name: cities[i].nm,
              value: cities[i].id
            }]
          });
        } else { //累加到已有index中
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].name === firstLetter) {
              cityList[j].items.push({
                name: cities[i].nm,
                value: cities[i].id
              });
            }
          }
        }
      }

      cityList.sort((n1, n2) => {
        if (n1.name > n2.name) {
          return 1;
        } else if (n1.name < n2.name) {
          return -1;
        } else {
          return 0;
        }
      });



      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].name === firstLetter) {
            return false;
          }
        }
        return true;
      }

      return {
        cityList,
        hotList
      };

    },
    handleTocity(nm,id){
      this.$store.dispatch('getNm',nm);
      this.$store.dispatch('getId',id);
      this.$router.push('/movie');
    }
  },
  computed: {
    ...mapState(['storeCityList', 'hotCityList'])
  },
  components: {}
}
</script>

<style scoped lang='scss'>
.city_hot {
  flex: 1;
  height: 100%;
  margin-top: 40px;
  overflow: hidden;
}

.hot {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
</style>