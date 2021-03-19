<template>
  <div class="route-comp">
    <div v-for="ticket in ticketModels" :key="ticket.Id">
      <Ticket :ticket="ticket" />
    </div>
  </div>
</template>

<script lang="ts">
import TicketModel from "@/classes/TicketModel";
import { Options, Vue } from "vue-class-component";
import Ticket from "@/components/route/Ticket.vue";

@Options({
  components: {
    Ticket,
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
      true,
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

<style scoped lang="scss">
@import "@/styling/main.scss";

.route-comp {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: 2em;
  height: 100%;
}


</style>