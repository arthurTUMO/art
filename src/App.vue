<template>
  <v-app>
    <v-app-bar app color="#3d3d3d" dark>
      <v-btn width="0" height="0" to="/">
      <img :src="require('@/assets/logo.png')" height="100"/>
      </v-btn>
      <v-toolbar-title>Art</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn class="mx-1" text to="/"> <v-icon class = "mr-2" color="white">mdi-home </v-icon> Home</v-btn>
        <v-btn class="mx-1" text to="/about"><v-icon class = "mr-2" color="white">mdi-information </v-icon> About</v-btn >
        <v-btn class="mx-1" text to="/browse"><v-icon class = "mr-2" color="white">mdi-map-marker </v-icon> Browse</v-btn >
    <v-toolbar color="#3d3d3d" flat>
      <v-text-field
        hide-details
        prepend-icon="mdi-web"
        single-line
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
            <v-list-item-title><v-icon class = "mr-2" color="#3d3d3d">mdi-image-filter-hdr </v-icon>Browse</v-list-item-title>
          </v-list-item>
    <v-toolbar floating>
      <v-text-field
        color="#3d3d3d"
        hide-details
        prepend-icon="mdi-web"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon color="#3d3d3d">mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
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
  },
  components: {
    Cards
  }
}
</script>
