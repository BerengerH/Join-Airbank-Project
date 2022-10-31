<script>
import BtnBackToDashboard from "../components/BtnBackToDashboard.vue";

export default {
  name: "DetailedTransaction",
  components: {
    BtnBackToDashboard,
  },
};
</script>

<template>
  <section class="m-[5%]">
    <BtnBackToDashboard />
    <div class="mt-[3%] bg-white p-5 flex flex-wrap justify-between gap-4">
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-0 items-center sm:gap-2">
          <h3 class="font-bold">Transaction's reference:</h3>
          <p class="text-sm">purchase (info will be fetched)</p>
        </div>
        <div class="flex flex-wrap gap-0 items-center sm:gap-2">
          <h3 class="font-bold">Transaction's category:</h3>
          <p class="text-sm">business (info will be fetched)</p>
        </div>
        <div class="flex flex-wrap gap-0 items-center sm:gap-2">
          <h3 class="font-bold">Transaction's date:</h3>
          <p class="text-sm">2017-09-01 (info will be fetched)</p>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-0 items-center sm:gap-2">
          <h3 class="font-bold">Transaction's amount:</h3>
          <p class="text-sm">-100 (info will be fetched)</p>
        </div>
        <div class="flex flex-wrap gap-0 items-center sm:gap-2">
          <h3 class="font-bold">Transaction's currency:</h3>
          <p class="text-sm">EUR (info will be fetched)</p>
        </div>
      </div>
    </div>
  </section>
</template>
