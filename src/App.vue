<template>
  <Banner />
  <ConteudoPrincipal />
</template>

<script lang="ts">
import Banner from "./components/Banner.vue";
import ConteudoPrincipal from "./components/ConteudoPrincipal.vue";

export default {
  components: { Banner, ConteudoPrincipal },
};
</script>
