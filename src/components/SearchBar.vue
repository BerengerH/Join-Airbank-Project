<script>
export default {
  name: "SearchBar",
};
</script>

<template>
  <div class="flex flex-col gap-1 min-w-[35%]">
    <label for="searchbar" class="text-slate-500 text-sm pl-4">Search</label>
    <input
      type="search"
      placeholder=" Search by reference, category, currency, amount, bank ..."
      id="searchbar"
      name="q"
      class="text-ellipsis pl-3 h-6 border border-gray-300"
    />
<!-- MAYBE ADD A SUBMIT BUTTON - TO SEE AFTER ADDING FILTERS     
    <input
      type="submit"
      value="Submit"
      class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3 rounded"
    /> -->
  </div>
</template>
