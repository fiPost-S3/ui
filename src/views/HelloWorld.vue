<template>
  <div class="hw-container">
    <PrintQR />
    <RoutePakketInfo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrintQR from "@/components/PrintQR.vue";
import RoutePakketInfo from "@/components/route/RoutePakketInfo.vue"

@Options({
  components: {
    PrintQR,
    RoutePakketInfo
  }
})
export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";

.hw-container {
  min-height: 100vh;
  background-color: $background-color;
}

</style>
