<template>
  <div class="databinding">
    <span>child count:{{ mes.frames ? mes.frames.length : 0 }}</span>
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
      type: Object
    }
  },

  methods: {
    pushchild: function (e) {
      console.log(this.mes)
      this.mes.frames.push([])
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
