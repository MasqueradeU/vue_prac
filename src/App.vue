<template>
  <div id="app">
    <span>normal count:{{ ary.length }}</span>
    <button @click="push">click</button>
    <div class="hoge" v-for="(msg) in msgs" v-bind:key="msg">
      <dataBinding :mes="msg.frames"/>
    </div>
  </div>
</template>

<script>
import dB from './components/dataBinding'
export default {
  components: {
    dataBinding: dB
  },

  data () {
    return {
      msgs: [{
        name: 'text1',
        count: 20,
        frames: [{
          id: 20,
          name: 'hoge1'
        }]
      }, {
        name: 'text2',
        count: 20,
        frames: [{
          id: 20,
          name: 'hoge1'
        }]
      }, {
        name: 'text3',
        count: 20,
        frames: [{
          id: 20,
          name: 'hoge1'
        }]
      }],
      ary: ['1', '2', '3', '4']
    }
  },
  methods: {
    push: function (e) {
      this.ary.push('10')
    },
    handleclick: function (e) {
      this.msgs.push([])
      console.log(this.msgs)
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
