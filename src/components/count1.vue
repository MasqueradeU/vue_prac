<template>
  <div class="count1">
    <span>count3:{{ count }}</span>
    <button @click="handleclick3($event)">click3</button>
  </div>
</template>

<script>
export default {
  name: 'count1',

  methods: {
    handleclick3: function (e) {
      this.$emit('child-incr')
    }
  }
}
</script>

<style>
</style>
