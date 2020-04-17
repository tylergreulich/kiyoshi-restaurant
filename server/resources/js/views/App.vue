<script>
import Navigation from '../components/Navigation';
export default {
  components: {
    Navigation,
  },
};
</script>

<template>
  <div id="app-layout">
    <Navigation />
    <router-view />
  </div>
</template>

<style lang="scss">
@import '../../sass/app.scss';
</style>
