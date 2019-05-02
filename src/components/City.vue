<template>
<div id="content">
  <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul class="clearfix">
                            <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.nm , item.id)">{{ item.nm }}</li>
                        </ul>
                    </div>
  <div :style="{height: windowHeight}">
    <cube-index-list :data="cityList" @select="selectItem" @title-click="clickTitle"></cube-index-list>
  </div>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'city',
  data() {
    return {
      windowHeight: (window.innerHeight-149) + "px",
      hotList: [],
      cityList: [ {
    "name": "★Hot City",
    "items": [
      {
        "name": "BEIJING",
        "value": 1
      },
      {
        "name": "SHANGHAI",
        "value": 2
      }
    ]
  }]
    };
  },
  mounted() {
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
        }
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
    },
formatCityList(cities){
            var cityList = [];
            var hotList = [];

            for(var i=0;i<cities.length;i++){
                if(cities[i].isHot === 1){
                    hotList.push( cities[i] );
                }
            }

            for(var i=0;i<cities.length;i++){
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){  //新添加index
                    cityList.push({ name : firstLetter , items : [ { name : cities[i].nm , value : cities[i].id } ] });
                }
                else{   //累加到已有index中
                    for(var j=0;j<cityList.length;j++){
                        if( cityList[j].name === firstLetter ){
                            cityList[j].items.push( { name : cities[i].nm , value : cities[i].id } );
                        }
                    }
                }
            }

            cityList.sort((n1,n2)=>{
                if( n1.name > n2.name ){
                    return 1;
                }
                else if(n1.name < n2.name){
                    return -1;
                }
                else{
                    return 0;
                }
            });

           

            function toCom(firstLetter){
                for(var i=0;i<cityList.length;i++){
                    if( cityList[i].name ===  firstLetter){
                        return false;
                    }
                }
                return true;
            }

            return {
                cityList,
                hotList
            };

        }

  },
  components: {

  }
}
</script>

<style scoped lang='scss'>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>