<template>
  <div id="databinding">
    <p>{{ countClick }}</p>
    <button v-on:click="increment">Increment click</button>
  </div>
</template>

<script>
export default {
  name: 'databinding',
  data () {
    return {
      countClick: 0
    }
  },
  methods: {
    increment: function () {
      this.countClick += 1
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
