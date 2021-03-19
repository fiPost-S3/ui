<template>
  <div class="route-pakket-info-container" @click="Toggle()">
    <div class="header">
      <div class="text">Route</div>
      <div v-if="mobile" class="arrow">
        <div v-if="toggled">
          <font-awesome-icon icon="sort-up" size="2x" />
        </div>
        <div v-else>
          <font-awesome-icon icon="sort-down" size="2x" />
        </div>
      </div>
    </div>
    <div v-if="toggled">
      <RouteComp />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RouteComp from "@/components/route/RouteComp.vue";

@Options({
  components: {
    RouteComp,
  },
})
export default class HelloWorld extends Vue {
  private toggled: Boolean = true;
  private mobile: Boolean = false;

  Toggle() {
    if(this.mobile){
      this.toggled = !this.toggled;
    }
  }

  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.toggled = false;
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styling/main.scss";

.route-pakket-info-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  overflow: hidden;
  max-width: 700px;
  padding: 3em;
  box-shadow: $shadow;
  border-radius: $border-radius;
  row-gap: 4em;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.text {
  font-family: $font-family;
  color: $black-color;
  text-align: left;
  font-size: 30px;
  font-weight: 600;
  width: 90%;
}

.arrow {
 color: $fontys-purple;
}

@media only screen and (max-width: 600px) {

  .route-pakket-info-container {
    padding: 2em;

    .text {
    font-size: 25px;
    }
  }
}
</style>

