<template>
  <v-navigation-drawer
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    :right="right"
    temporary
    fixed
  >
    <v-list>
      <v-list-item @click.native="$emit('right')">
        <v-list-item-action>
          <v-icon light>
            mdi-repeat
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppRightDrawer",
  props: {
    right: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
