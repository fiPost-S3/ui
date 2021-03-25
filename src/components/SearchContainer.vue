<template>
  <div class="search-main">
    <div class="search-title">Zoeken</div>
    <Search @valueChanged="valueChanged" />
    <QrReader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./Search.vue";
import QrReader from "./QrReader.vue";

const SearchContainer = defineComponent({
  components: {
    Search,
    QrReader,
  },
  methods: {
    valueChanged(val) {
      // Needs implementation.
      console.log(val);
    },
  },
  data () {
    return {
      result: ''
    }
  },
});

export default SearchContainer;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";

.search-main {
  display: flex;
  align-self: middle;
  background-color: white;
  width: 90vw;
  padding: 2em 0.7em;
  box-shadow: $shadow;
  border-radius: $border-radius;

  .search-title {
    margin: auto 0.5em;
    text-align: center;
    font-family: $font-family;
    font-weight: 550;
  }
}

.qr {
  background-image: url("../assets/QRIcoon.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  margin: auto 15px;
  cursor: pointer;
}

.stream {
  width: 400px;
  height: 400px;
}
</style>
