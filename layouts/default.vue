<template>
  <v-app dark>
    <!--  SideBar  -->
    <app-drawer
      :clipped="clipped"
      :miniVariant="miniVariant"
      :items="items"
      v-model="drawer"/>

    <!--  NavBar  -->
    <app-toolbar
      :clipped="clipped"
      :miniVariant="miniVariant"
      v-on:drawer="drawer = !drawer"
      v-on:clipped="clipped = !clipped"
      v-on:miniVariant="miniVariant = !miniVariant"
      v-on:rightDrawer="rightDrawer = !rightDrawer"
      v-on:fixed="fixed = !fixed"
    />

    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

    <!--  Right Sidebar  -->
    <app-right-drawer
      v-model="rightDrawer"
      :right="right"
      v-on:right="right = !right"/>

    <!--  Footer  -->
    <app-footer :fixed="fixed"/>
  </v-app>
</template>

<script>
import menu from '~/datas/menu'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: menu,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
