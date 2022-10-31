<script>
import { useTransactionsStore } from "../stores/transactions";

export default {
  name: "TransactionsTable",

  setup() {
    const transactionsStore = useTransactionsStore();
    const transactions = transactionsStore.transactions;

    return {
      transactionsStore,
      transactions,
    };
  },

  methods:{

    accessTransactionDetails(){
        this.$router.push({ path: "/detailed-transaction" });
    },

  },
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full text-left">
      <thead class="border-y border-slate-300 bg-slate-200 sticky">
        <tr>
          <th class="w-[55%] min-w-[250px] pl-3">Reference</th>
          <th class="w-[25%] min-w-[120px]  pl-3">Category</th>
          <th class="w-[10%] min-w-[120px]  pl-3">Date</th>
          <!-- Later one, add the possibility to organise tab through dates: newest to oldest or oppposite -->
          <th class="w-[10%] min-w-[120px]  pl-3">Amount</th>
        </tr>
      </thead>
      <tbody>
        <!-- Later one, check the best option between adding endless scrolling or pagination -->
        <tr
          v-for="transaction in this.transactions"
          :key="transaction.id"
          @click="accessTransactionDetails"
          class="border-b border-slate-300 hover:bg-black hover:text-white hover:cursor-pointer"
        >
          <td class="pl-3">{{transaction.reference}}</td>
          <td class="pl-3">{{transaction.category}}</td>
          <td class="pl-3">{{transaction.date}}</td>
          <td class="pl-3">{{transaction.amount}} {{transaction.currency}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
