<template>
  <div id="databinding">
    <p>Hello test</p>
    <input :value="msgf">
  </div>
</template>

<script>
export default {
  name: 'databinding',
  data () {
    return {
      msgf: 'Banana'
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
