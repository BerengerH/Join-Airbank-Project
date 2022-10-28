<script>
export default {
  name: "BankFilter",
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <label for="bank-select" class="text-slate-500 text-sm pl-4">Bank</label>

    <select name="banks" id="bank-select" class="pl-3 h-6 border border-gray-300">
      <option value="" class="">No filter applied</option>
      <option value="bank1">Bank 1</option>
      <option value="bank2">Bank 2</option>
      <option value="bank3">Bank 3</option>
      <option value="bank4">Bank 4</option>
    </select>
  </div>
</template>
