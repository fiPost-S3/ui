<template>
  <button class="btn-back" @click="onClick()">
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
  text: string = "Terug";

  onClick(): void {
    this.$emit("btn-clicked");
  }
}
</script>


<style scoped lang="scss">
.btn-back {
  width: 100px;
  height: 40px;

  background: transparent;
  color: #000000;

  border-radius: 10px;
  border: 0px;

  font-family: Helvetica;
  font-weight: bold;
  font-size: 16px;
}
</style>