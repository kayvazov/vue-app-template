<script>
  import Navbar from './components/global/Navbar.vue'
  import Footer from './components/global/Footer.vue'
  import vueHeadful from 'vue-headful'
  export default {
    data() {
      return {

      }
    },
    components: {
      'v-navigation': Navbar,
      'v-footer': Footer,
      'settings': vueHeadful
    }
  }
</script>
<template>
  <main>
    <v-navigation />
    <router-view />
    <v-footer />
  </main>
</template>