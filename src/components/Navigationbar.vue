<template>
  <div class="nav-container">
    <div class="nav-main">
      <!-- <Logo style="margin-left: 2em" width="35px" /> -->
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <div class="other">
        Peter
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const Navigationbar = defineComponent({});
export default Navigationbar;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styling/main.scss";

.nav-container {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: #fff;
  width: 100%;
}

.nav-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  align-content: center;
  font-family: $font-family;

  .logo-container {
    max-width: 100px;
    width: 20%;
    height: 90%;
    cursor: pointer;
    display: flex;
    
    .logo {
      background: url("../assets/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      height: 30px;
      width: 100px;
      align-self: center;
    }
  }
}

.nav-extra {
  display: none;
}

@media only screen and (max-width: 1000px) {
  .nav-extra {
    overflow: hidden;
    display: flex;
    padding: 10px 0;

    .btn-container-extra {
      display: flex;
      justify-content: space-evenly;
      margin: auto;
    }
  }
}
</style>
