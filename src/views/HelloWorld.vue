<template>
  <div class="hw-container">
    <NextStep :ticket="ticketModels[0]" />
    <PrintQR />
    <RoutePackageInfo :ticketModels="ticketModels" />
    <input type="file" accept="image/*">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrintQR from "@/components/PrintQR.vue";
import RoutePackageInfo from "@/components/route/RoutePackageInfo.vue";
import NextStep from "@/components/NextStep.vue";
import TicketModel from "@/classes/TicketModel";

@Options({
  components: {
    PrintQR,
    RoutePackageInfo,
    NextStep,
  },
})
export default class HelloWorld extends Vue {
  private ticketModels: TicketModel[] = [
    new TicketModel(
      1,
      1,
      1,
      "10 februari 13:16",
      405273,
      405273,
      false,
      2,
      "9 februari 12:32",
      false,
      "Zending is geregistreerd bij Fontys"
    ),
    new TicketModel(
      2,
      1,
      1,
      "12 februari 10:28",
      405273,
      405273,
      false,
      3,
      "",
      true,
      "Zending onderweg naar Fontys HVK"
    ),
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";
.hw-container {
  min-height: 100vh;
  background-color: $background-color;
}

h3 {
  margin: 40px 0 0;
}
</style>
