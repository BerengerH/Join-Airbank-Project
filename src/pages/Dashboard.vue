<script>
import BankFilter from "../components/BankFilter.vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import EndDateFilter from "../components/EndDateFilter.vue";
import SearchBar from "../components/SearchBar.vue";
import StartDateFilter from "../components/StartDateFilter.vue";
import TransactionsTable from "../components/TransactionsTable.vue";

export default {
  name: "Dashboard",
  components: {
    BankFilter,
    CategoryFilter,
    EndDateFilter,
    SearchBar,
    StartDateFilter,
    TransactionsTable,
  },
};
</script>

<template>
  <section class="m-[5%]">
    <form class="my-5 flex gap-4 justify-between">
      <SearchBar />
      <BankFilter />
      <CategoryFilter />
      <StartDateFilter />
      <EndDateFilter />
    </form>
    <TransactionsTable />
  </section>
</template>
