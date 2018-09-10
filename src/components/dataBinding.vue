<template>
  <div class="databinding">
    <span>count2:{{ count }}</span>
    <button @click="handleclick2(idx, $event)">click2</button>
  </div>
</template>

<script>
import aP from '../App'
export default {
  components: {
    ap: aP
  },
  name: 'databinding',

  props: {
    count: {
      type: Number
    },

    idx: {
      type: Number
    }
  },

  data () {
    return {
      countClick: 0
    }
  },
  methods: {
    handleclick2: function () {
      this.$emit('child-ev')
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
