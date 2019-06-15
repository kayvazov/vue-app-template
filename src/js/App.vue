<script>
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

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