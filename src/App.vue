<template>
  <div id="app">
    <div class="hoge" v-for="(msg, idx) in msgs" v-bind:key="msg">
      <span>{{ msg.name }} count:{{ msg.count }}</span>
      <button @click="handleclick(idx, $event)">click</button>
      <dataBinding
      @child-ev="countSynchronized(idx, $event)"
      v-bind:count="msg.count"
      :v-bind:idx="idx"/>
    </div>
  </div>
</template>

<script>
import dB from './components/dataBinding'
export default {
  components: {
    dataBinding: dB
  },

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
    },
    countSynchronized: function (idx, count, e) {
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
