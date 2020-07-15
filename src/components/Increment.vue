<template>
  <button @click="increment">Increment +1</button>
</template>

<script>
export default {
  name: "Increment",
  methods: {
    increment() {
      this.$store.dispatch("onIncrement");
    },
  },
};
</script>
