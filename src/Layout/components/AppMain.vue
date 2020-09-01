<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
        <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style scoped lang="scss">
.app-main {
  /*50 = navbar  */
  min-height:300px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: white;
}
.fixed-header+.app-main {
  padding-top: 50px;
}


</style>

