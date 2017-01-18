<template>
  <div><games-list></games-list></div>
</template>

<script>
  import GamesList from './GamesList.vue'
  export default {
    components: {
      GamesList
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
</style>
