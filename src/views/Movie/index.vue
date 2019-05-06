<template>
<div id="main">
  <Header title="喵喵电影" />
  <div id="content">
    <div class="movie_menu">
      <router-link to="/movie/City" class="city_name">
        <span>{{$store.state.nm}}</span><i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <div class="hot_swtich">
        <router-link to="/movie/NowPlanying" class="hot_item">正在热映</router-link>
        <router-link to="/movie/ComingSoon" class="hot_item">即将上映</router-link>
      </div>
      <router-link to="/movie/Search" class="search_entry">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <Taber/>
  <MessageBox/>
</div>
</template>

<script type='text/ecmascript-6'>
import Header from '@/components/Header'
import Taber from '@/components/Tabar'
import MessageBox from '@/components/js/MessageBox'
export default {
  name: 'Movie',
  data() {
    return {

    };
  },
  components: {
    Header,
    Taber,
    MessageBox
  }
}
</script>

<style scoped >
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
}
</style>