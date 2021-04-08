<template>
  <div class="hw-container">
    <NextStep :ticket="ticketModels[0]" />
    <PrintQR />
    <RoutePackageInfo :ticketModels="ticketModels" />
    <SearchContainer />
    <PackageDetails />
    <section class="component-container">
      <date-time-input name="date-time-input" labelText="date time input: "/>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PackageDetails from '@/components/packageInfo/PackageDetails.vue';
import PrintQR from "@/components/PrintQR.vue";
import RoutePackageInfo from "@/components/route/RoutePackageInfo.vue";
import NextStep from "@/components/NextStep.vue";
import SearchContainer from "@/components/SearchContainer.vue";
import TicketModel from "@/classes/TicketModel";
import PackageModel from '@/classes/RegisterPackageModel';
import { pakketService } from "@/services/pakketservice";
import DateTimeInput from "@/components/DateTimeInput.vue"

// Mock data.
import tickets from "@/data/tickets_mock";

@Options({
  components: {
    PackageDetails,
    PrintQR,
    RoutePackageInfo,
    NextStep,
    SearchContainer,
    DateTimeInput
  },
})
export default class HelloWorld extends Vue {
  private ticketModels: TicketModel[] = tickets;
  private results : Array<PackageModel> = [];
  async created(){
    this.results = await pakketService.getAll();
    console.log(this.results);
  }
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
