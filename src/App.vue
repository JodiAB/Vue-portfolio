<template>
<div id="id">
  <PortNavbar />
  <router-view />
  <!-- <PortHome />
  <PortAbout />
  <PortProjects />
  <PortContact /> -->

</div>
</template>

<script>

import PortNavbar from './components/PortNavbar.vue';

export default {
components:{
  PortNavbar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
