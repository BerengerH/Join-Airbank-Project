<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
},
};
</script>

<template>
<Header/>
<main class="mb-24">
  <RouterView />
</main>
<Footer/>
</template>

<style>
</style>
