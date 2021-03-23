<template>
  <div class="hw-container">
    <NextStep :ticket="ticketModels[0]" />
    <PrintQR />
    <RoutePackageInfo :ticketModels="ticketModels" />
    <PackageDetails />
    <input type="file" accept="image/*">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PackageDetails from '@/components/PackageDetails.vue';
import PrintQR from "@/components/PrintQR.vue";
import RoutePackageInfo from "@/components/route/RoutePackageInfo.vue";
import NextStep from "@/components/NextStep.vue";
import TicketModel from "@/classes/TicketModel";

@Options({
  components: {
    PackageDetails,
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
      "13 februari 13:16",
      405273,
      405273,
      true,
      2,
      "14 februari 16:32",
      false,
      "Zending is aangekomen bij Fontys HVK"
    ),
    new TicketModel(
      2,
      1,
      1,
      "12 februari 10:28",
      405273,
      405273,
      true,
      3,
      "12 februari 14:23",
      false,
      "Zending onderweg naar Fontys HVK"
    ),
     new TicketModel(
      1,
      1,
      1,
      "10 februari 13:16",
      405273,
      405273,
      true,
      2,
      "11 februari 10:32",
      false,
      "Zending is geregistreerd bij Fontys"
    )
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
