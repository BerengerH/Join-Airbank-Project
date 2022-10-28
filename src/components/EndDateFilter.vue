<script>
export default {
  name: "EndDateFilter",
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <label for="end-date" class="text-slate-500 text-sm pl-3"
      >Ending date</label
    >
    <input
      type="date"
      id="end-date"
      name="end-date"
      class="pl-3 h-6 border border-gray-300"
    />
  </div>
</template>
