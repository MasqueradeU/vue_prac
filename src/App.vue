<template>
  <div id="app">
    <div class="hoge" v-for="(msg, idx) in msgs" v-bind:key="msg">
      <span>{{ msg.name }} count:{{ msg.count }}</span>
      <button @click="handleclick(idx, $event)">click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msgs: [{
        name: 'text1',
        count: 20
      }, {
        name: 'text2',
        count: 20
      }, {
        name: 'text3',
        count: 20
      }]
    }
  },
  methods: {
    handleclick: function (idx, e) {
      this.msgs[idx].count += 1
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
