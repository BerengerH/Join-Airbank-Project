<script>
export default {
  name: "BtnBackToDashboard",
  methods: {
    accessDashboard() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<template>
  <button
    @click="accessDashboard"
    class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3 rounded"
  >
    Back to dashboard
  </button>
</template>
