<template>
  <button @click="onDecrement">Decrement -1</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Decrement",
  methods: {
    ...mapActions(["onDecrement"]),
  },
};
</script>
