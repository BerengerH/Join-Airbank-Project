<script>
export default {
  name: "SearchBar",
};
</script>

<template>
  <form class="m-5 flex gap-4">
    <input
      type="search"
      placeholder=" Search by reference, category, currency, amount ..."
      id="searchBar"
      name="q"
      class="text-ellipsis min-w-[30%] pl-3"
    />
    <input
      type="submit"
      value="Submit"
      class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3 rounded"
    />
  </form>
</template>
