<script>
import Navbar from "./components/global/Navbar.vue";
import Footer from "./components/global/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    "v-navigation": Navbar,
    "v-footer": Footer
  }
};
</script>
<template>
  <main>
    <v-navigation/>
    <router-view/>
    <v-footer/>
  </main>
</template>