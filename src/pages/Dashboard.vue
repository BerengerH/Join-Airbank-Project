<script>
import SearchBar from "../components/SearchBar.vue";
import BankFilter from "../components/BankFilter.vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import StartDateFilter from "../components/StartDateFilter.vue";
import EndDateFilter from "../components/EndDateFilter.vue";

export default {
  name: "Dashboard",
  components: {
    BankFilter,
    CategoryFilter,
    EndDateFilter,
    SearchBar,
    StartDateFilter,
  },
};
</script>

<template>
  <main class="m-[5%]">
    <form class="flex gap-4 justify-between">
      <SearchBar />
      <BankFilter />
      <CategoryFilter />
      <StartDateFilter />
      <EndDateFilter />
    </form>
  </main>
</template>
