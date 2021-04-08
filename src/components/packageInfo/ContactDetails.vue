<template>
  <div class="cd-container">
    <div class="container-subheader">Ontvanger</div>
    <div class="cd-item">{{ contact.Name }}</div>
    <div class="cd-item">{{ contact.Email }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Contact from "@/classes/Contact";

@Options({
  props: {
    contact: Contact,
  },
})
export default class ContactDetails extends Vue {}
</script>


<style scoped lang="scss">
@import "@/styling/main.scss";

.cd-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.5em;
}

.cd-item {
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
}
</style>