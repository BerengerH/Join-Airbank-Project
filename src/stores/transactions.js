import { defineStore } from "pinia";

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    transactions: [
      {
        reference: "nostrud exercitation ullamco",
        category: "Advertising",
        date: 2017 - 09 - 01,
        amount: -39.05,
        currency: "GBP",
      },
      {
        reference: "ut aliquip ex ea commodo",
        category: "Insurance",
        date: 2017-09-06,
        amount: -63.73,
        currency: "EUR",
      },
      {
        reference: "",
        category: "Financing Income",
        date: 2017-09-11,
        amount: 3835.25,
        currency: "EUR",
      },
      {
        reference: "Nemo enim ipsam",
        category: "Eating Out",
        date: 2017-09-14,
        amount: -17.45,
        currency: "GBP",
      },
    ],
  }),
  actions: {},
});
