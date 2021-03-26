<template>
    <div class="pup-content">
      <div class="container-subheader">Afhaalpunt</div>
      <div class="pup-item">{{ pickupPoint }}</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    pickupPoint: String,
  },
})
export default class SenderDetails extends Vue {}
</script>


<style scoped lang="scss">
@import "@/styling/main.scss";


.pup-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.3em;
}

.pup-item {
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
}
</style>