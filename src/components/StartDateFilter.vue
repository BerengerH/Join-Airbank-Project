<script>
export default {
  name: "StartDateFilter",
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <label for="start-date" class="text-slate-500 text-sm pl-3"
      >Starting date</label
    >
    <input
      type="date"
      id="start-date"
      name="start-date"
      class="pl-3 h-6 border border-gray-300"
    />
  </div>
</template>
