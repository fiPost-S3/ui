<template>
  <div class="hw-container">
    <input type="file" accept="image/*">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


const Home = defineComponent({
  data() {
    return {
    }
  },
  methods: {
  }
})
export default Home;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styling/main.scss";

.hw-container {
  min-height: 100vh;
  background-color: $background-color;
}

</style>
