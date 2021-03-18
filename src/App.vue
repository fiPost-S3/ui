<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import "styling/main.scss";

body {
  width: 100vw;
  height: 100vh;
  background-color: $background-color;
  font-family: $font-family;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: $background-color;
}
</style>
