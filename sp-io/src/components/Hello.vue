<template lang="jade" rel="stylesheet/jade" type="text/jade">
  .hello
    h1 {{ msg }}
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World2!'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/css">
  .hello
    color green
</style>
