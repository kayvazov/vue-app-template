<script>
export default {
  data: () => ({}),
  computed: {
    takeItem() {
      return this.$store.state.oneItem
    }
  }
};
</script>

<template>
  <section class="g-main">
    <p>
      Vue & PWA template by
      <a href="https://kenan.agency">Ayvazov Kenan</a> ;3
      {{ takeItem }}
    </p>
    <div class="png"></div>
  </section>
</template>

