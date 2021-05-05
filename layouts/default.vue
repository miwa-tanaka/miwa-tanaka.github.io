<template>
  <div>
    <topBar class="header" />
    <Nuxt />
  </div>
</template>

<script>
import topBar from './topBar'
export default {
  components: {
    topBar
  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  z-index: 2;
  width: 100%
}
</style>
