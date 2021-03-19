<template>
  <div class="route-comp">
    <div v-for="ticket in ticketModels" :key="ticket.Id">
      <Ticket :ticket="ticket" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Ticket from "@/components/route/Ticket.vue";
import TicketModel from "@/classes/TicketModel";

@Options({
  components: {
    Ticket,
  },
  props: {
    ticketModels: Array,
  }
})
export default class RouteComp extends Vue {
  ticketModels!: TicketModel[];

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