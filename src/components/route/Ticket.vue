<template>
  <div class="ticket">
    <div class="ticket-image">
        <font-awesome-icon icon="check-circle" size="2x" :class="ticket.IsFinished ? 'finished' : 'unfinished'"/>
    </div>
    <div class="ticket-info">
      <div class="ticket-info-top">
        <div v-if="ticket.IsFinished">
          {{ ticket.FinishedAt }}
        </div>
        <div v-else-if="ticket.IsCurrent">
          Te doen
        </div>
        <div v-else>
          N.V.T.
        </div>
      </div>
      <div class="ticket-info-bot">
        {{ ticket.Description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TicketModel from "@/classes/TicketModel";

@Options({
  props: {
    ticket: TicketModel,
  },
})
export default class Ticket extends Vue {
  ticket!: TicketModel;

}
</script>


<style scoped lang="scss">
@import "@/styling/main.scss";
.ticket {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 500px;
  min-width: 500px;
  column-gap: 0.3em;
  z-index: 0;
}

.ticket-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: left;
  min-width: 300px;
  align-items: flex-start;
  row-gap: 0.3em;
}

.ticket-info-top {
  font-weight: bold;
}

.ticket-image {
  min-width: 100px;
}

.finished {
 color: $fontys-purple;
}
.unfinished{
 color: $gray-color;
}
</style>
