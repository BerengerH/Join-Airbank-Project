<script>
export default {
  name: "TransactionsTable",
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full text-left">
      <thead class="border-y border-slate-300 bg-slate-200 sticky">
        <tr>
          <th class="w-[55%]">Reference</th>
          <th class="w-[25%]">Category</th>
          <th class="w-[10%]">Date</th>
          <!-- Later one, add the possibility to organise tab through dates: newest to oldest or oppposite -->
          <th class="w-[10%]">Amount</th>
        </tr>
      </thead>
      <tbody>
            <!-- Later one, check the best option between adding endless scrolling or pagination -->
        <tr
          class="border-b border-slate-300 hover:bg-black hover:text-white hover:cursor-pointer"
        >
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
