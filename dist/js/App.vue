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
    <p>
      Vue & PWA template by <a href="https://vk.com/kenan_aivazov">Aivazov Kenan</a> ;3
    </p>
    <v-footer />
  </main>
</template>