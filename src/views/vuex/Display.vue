<template>
  <div>
    <div class="coupon">
      <h2>Display</h2>
      <h1>{{ counter }}</h1>
    </div>
    <div class="coupon">
      <Increment /> ||
      <Decrement />
    </div>
  </div>
</template>

<script>
import Increment from "../../components/Increment";
import Decrement from "@/components/Decrement";
import { mapGetters } from "vuex";

export default {
  name: "display",
  components: { Increment, Decrement },
  computed: {
    ...mapGetters(["counter"]),
  },
};
</script>

<style scoped>
.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 15px;
}
</style>
