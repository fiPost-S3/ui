<template>
  <div class="ticket">
    <div class="ticket-image">
      <img class="image" src="@/assets/PakketRouteVoltooidIcon.png" />
    </div>
    <div class="ticket-info">
      <div class="ticket-info-top">
        {{ ticket.FinishedAt }}
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
  justify-content: flex-start;
  max-width: 500px;
  column-gap: 0.5em;
  z-index: 0;
}

.ticket-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: left;
  align-items: flex-start;
  row-gap: 0.3em;
}

.ticket-info-top {
  font-weight: bold;
}

.ticket-info-bot {
  font-weight: bold;
  color: $pink_color;
  font-size: 18px;
}

.ticket-image {
  margin-right: 1em;
  width: 50px;
  align-self: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}

.image {
  width: 3em;
  height: 3em;
}

@media only screen and (max-width: 700px) {
  .ticket {
    width: 80vw;
  }

  .ticket-info-bot {
    font-size: 12px;
  }
}
</style>