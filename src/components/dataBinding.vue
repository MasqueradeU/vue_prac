<template>
  <div class="databinding">
    <span>count2:{{ count }}</span>
    <button @click="handleclick2($event)">click2</button>
    <count1
    @child-incr="childCount"/>
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
    count: {
      type: Number
    }
  },

  methods: {
    handleclick2: function (e) {
      this.$emit('child-ev', this.count)
    },

    childCount: function (e) {
      this.count += 1
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
