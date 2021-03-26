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
    Navigationbar
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styling/main.scss";
@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-Black.otf") format("opentype");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-ExtraBold.otf") format("opentype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-SemiBold.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-ExtraLight.otf") format("opentype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Metropolis";
  src: url("./assets/fonts/Metropolis-Thin.otf") format("opentype");
  font-weight: 100;
  font-style: normal;
}

#app {
  font-family: $font-family;
  padding-top: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black-color;
  padding: 1em;
}

</style>
