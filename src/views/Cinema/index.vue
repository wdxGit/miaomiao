<template>
  <div class='page'>
    <Header title="喵喵影院"/>
    <div id="content">
      <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
    </div>
    <Cilist/>
    <Taber/>
  </div>
</template>

<script type='text/ecmascript-6'>
import Header from '@/components/Header'
import Taber from '@/components/Tabar'
import Cilist from '@/components/Cilist'
export default {
  name:'Cinema',
  data() {
    return {

    };
  },
  components: {
    Header,
    Taber,
    Cilist
  }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>