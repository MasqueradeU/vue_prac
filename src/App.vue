<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
      <button v-on:click="show=!show">Fade out show</button>
      <transition>
        <p v-if="show">Hello Vue</p>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello Vue.js',
      show: true
    }
  },
  methods: {
    handleclick: function (e) {
      alert('Hello Vue.js in alert')
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
.v-enter-active, .v-leave-active {
  transition: apacity 1s;
}

.v-enter, .v-leave-go {
  apacity: 0;
}
</style>
