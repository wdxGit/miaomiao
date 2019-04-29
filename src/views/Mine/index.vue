<template>
  <div class='page'>
    <Header title="我的喵喵"/>
    <Login/>
    <Taber/>
  </div>
</template>

<script type='text/ecmascript-6'>
import Header from '@/components/Header'
import Taber from '@/components/Tabar'
import Login from '@/components/Login'
export default {
  name:'Mine',
  data() {
    return {

    };
  },
  components: {
    Header,
    Taber,
    Login
  }
}
</script>

<style scoped lang='scss'>

</style>