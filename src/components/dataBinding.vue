<template>
  <div class="databinding">
    <span>normal count:{{ mes ? mes.length : 0 }}</span>
    <button @click="pushchild">click</button>
  </div>
</template>

<script>
import co from './count1'

export default {
  components: {
    count1: co
  },

  name: 'databinding',

  props: {
    mes: {
      type: Array
    }
  },

  methods: {
    pushchild: function (e) {
      this.mes.push([])
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
