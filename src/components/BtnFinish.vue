<template>
  <button class="btn-finish" @click="onClick()">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class BtnFinish extends Vue {
  text: string = "Voltooi";

  onClick(): void {
    this.$emit("btn-clicked");
  }
}
</script>


<style scoped lang="scss">
@import "@/styling/main.scss";

.btn-finish {
  width: 200px;
  height: 50px;

  background-color: $green-color;
  color: #ffffff;

  border-radius: 10px;
  border: 0px;

  font-family: $font-family;
  font-weight: bold;
  font-size: 18px;
}
</style>