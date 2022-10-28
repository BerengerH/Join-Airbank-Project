<script>
export default {
  name: "CategoryFilter",
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <label for="category-select" class="text-slate-500 text-sm pl-4"
      >Category</label
    >

    <select
      name="categories"
      id="category-select"
      class="pl-3 h-6 border border-gray-300"
    >
      <option value="" class="">No filter applied</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
      <option value="category4">Category 4</option>
    </select>
  </div>
</template>
