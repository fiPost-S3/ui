<template>
  <button class="btn-voltooi" @click="onClick()">
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
export default class BtnVoltooi extends Vue {
  text!: string;

  onClick(): void {
    this.$emit("btn-clicked");
  }
}
</script>


<style scoped lang="scss">
.btn-voltooi {
  width: 200px;
  height: 50px;

  background-color: #42b883;
  color: #ffffff;

  border-radius: 10px;
  border: 0px;

  font-family: Helvetica;
  font-weight: bold;
  font-size: 18px;
}
</style>