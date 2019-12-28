<template>
  <v-app>
    <v-app-bar height="50" app color="#3d3d3d" dark >
      <v-btn class = "mx-3" width="0" height="0" to="/">
      <img :src="require('@/assets/logo.png')" height="100"/>
      </v-btn>
      <v-toolbar-title class = "display-1">ART</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn class="mx-1" text to="/"> <v-icon class = "mr-2" color="white">mdi-home </v-icon> Home</v-btn>
        <v-btn class="mx-1" text to="/about"><v-icon class = "mr-2" color="white">mdi-information </v-icon> About</v-btn >
        <v-btn class="mx-1" text to="/browse"><v-icon class = "mr-2" color="white">mdi-map-marker </v-icon> Browse</v-btn >
         <v-btn class="mx-1" text to="/contact"><v-icon class = "mr-2" color="white">mdi-help </v-icon> Contact</v-btn >
        <v-btn class="mx-1" text to="/display"><v-icon class = "mr-2" color="white">mdi-human </v-icon> Display</v-btn >
         <v-btn class="mx-1" text to="/test"><v-icon class = "mr-2" color="white">mdi-test </v-icon> Test</v-btn >
    <v-toolbar color="#3d3d3d" flat height="auto">
      <v-text-field
        hide-details
        prepend-icon="mdi-web"
        single-line
        label = "Search for Places"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="auto"
      width="100%"
    >
       <v-list
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item to="/">
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-home </v-icon> Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-information </v-icon> About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/browse">
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-map-marker </v-icon>Browse</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-help </v-icon>Contact</v-list-item-title>
          </v-list-item>
           <v-list-item to="/display">
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-human </v-icon>Display(Single Page for Cards)</v-list-item-title>
          </v-list-item>
           <v-list-item to="/test">
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-test </v-icon>TEST</v-list-item-title>
          </v-list-item>
    <v-toolbar>
      <v-text-field
        color="#3d3d3d"
        hide-details
        prepend-icon="mdi-web"
        single-line
       label = "Search for Places"
      ></v-text-field>

      <v-btn icon>
        <v-icon color="#3d3d3d">mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
       <transition name = "router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
       </transition>
    </v-content>
  </v-app>
</template>
<script>
import Cards from '@/components/Cards.vue'
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  .v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close), .v-navigation-drawer--temporary:not(.v-navigation-drawer--close){
    height: 100%;
    position: fixed;
  }
</style>
