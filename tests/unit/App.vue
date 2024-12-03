<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>

  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>

  <div>PostID: {{ postId }}</div>
</template>

<script>
import { computed, inject } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  computed: {
    postId() {
      return this.$route.params.postId;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>
