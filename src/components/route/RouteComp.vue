<template>
  <div class="route-comp">
    <div v-for="ticket in ticketModels" :key="ticket.Id">
      <div v-if="ticket.IsLast">
        <FinalTicket :ticket="ticket" />
      </div>
      <div v-else>
        <Ticket :ticket="ticket" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Ticket from "@/components/route/Ticket.vue";
import FinalTicket from "@/components/route/FinalTicket.vue";
import TicketModel from "@/classes/TicketModel";

@Options({
  components: {
    Ticket,
    FinalTicket
  },
  props: {
    ticketModels: Array,
  }
})
export default class RouteComp extends Vue {
  ticketModels!: TicketModel[];

  created(){
    if(this.ticketModels != null && this.ticketModels.length >= 1){
      this.ticketModels[0].IsLast = true;
    }
  }
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