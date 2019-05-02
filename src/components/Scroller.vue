<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
export default {
  name:"Scroller",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
}
</style>
