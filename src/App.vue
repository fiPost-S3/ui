<template>
  <Navigationbar />
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navigationbar from "@/components/Navigationbar.vue";

@Options({
  components: {
    Navigationbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styling/main.scss";

#app {
  font-family: $font-family;
  padding-top: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black-color;
  background-color: $background-color;
  padding: 1em;
}
</style>
