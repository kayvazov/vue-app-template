<script>
  import Vue from 'vue'
  import Navbar from './components/global/Navbar.vue'
  import Footer from './components/global/Footer.vue'
  import { VueMaskDirective } from 'v-mask'
  export default {
    data() {
      return {

      }
    },
    components: {
      'v-navigation': Navbar,
      'v-footer': Footer

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