<template>
  <div class="messageMap" v-show="messageShow">
    <div class="messageBox">
      <h2>定位</h2>
      <p>北京</p>
      <div>
        <div @click="toggleShow">取消</div>
        <div>切换定位</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
export default {
  name: "MessageBox",
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['messageShow'])
  },
  methods: {
    toggleShow() {
      this.$store.dispatch('togggleShow', false);
    }
  },
  components: {}
};
</script>

<style scoped>
.messageMap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.messageBox {
  width: 200px;
  height: 200px;
  border-radius: 1px solid #cccccc;
  background-color: white;
  border: 1px solid #cccccc;
  box-shadow: 0 0 3px 3px #ccc;
}

.messageBox h2 {
  text-align: center;
  margin-top: 50px;
  line-height: 30px;
  font-size: 30px;
  font-weight: bold;
}
.messageBox p {
  text-align: center;
  line-height: 40px;
}

.messageBox > div {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.messageBox > div > div {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #cccccc;
}
</style>
