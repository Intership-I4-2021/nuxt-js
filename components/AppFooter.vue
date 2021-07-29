<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
