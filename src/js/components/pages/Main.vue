<script>
  import { mapState } from 'vuex';
  export default {
    data: () => ({}),
    computed: {
      /*
      * testStateItem - computed function name
      * state.draft - "draft" is a module name. We "open" him to take value
      */
      ...mapState({
        testStateItem: state => state.draft.test
      })
    },
    mounted() {

    }
  };
</script>

<template>
  <section class="g-main">
    <p>
      Vue & PWA template by
      <a href="https://kenan.agency">Ayvazov Kenan</a> ;3
      {{ testStateItem }}
    </p>
    <div class="png"></div>
    <img src="~images/technology.png" alt="">
    <img src="~icons/technology.svg" alt="">
  </section>
</template>

