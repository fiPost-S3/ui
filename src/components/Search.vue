<template>
  <div class="search-container">
    <input v-model="inputValue" placeholder="Search..." />
    <font-awesome-icon class="s-btn" icon="search" size="1x" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

const Search = defineComponent({
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(newValue, oldValue) {
      this.$emit("valueChanged", newValue);
    },
  },
});
export default Search;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";

.search-container {
  background-color: $background-color;
  width: 300px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: $shadow;

  input {
    border: none;
    width: 100%;
    height: 100%;
    font-family: $font-family;
    font-size: 15px;
    background-color: $background-color;
    color: $black-color;

    &:focus {
      outline: none;
    }
  }

  .s-btn {
    cursor: pointer;
  }
}
</style>
