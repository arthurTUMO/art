<template>
  <v-app>
    <v-app-bar app color="#2900AA" dark>
      <img :src="require('@/assets/logo.png')" height="100"/>
      <v-toolbar-title>Art</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
       <v-btn class="mx-1" text to="/"> <v-icon class = "mr-2" color="white">mdi-home </v-icon> Home</v-btn >
        <v-btn class="mx-1" text to="/about"><v-icon class = "mr-2" color="white">mdi-information </v-icon> About</v-btn >
        <v-btn class="mx-1" text to="/browse"><v-icon class = "mr-2" color="white">mdi-map-marker </v-icon> Browse</v-btn >
        <v-btn class="mx-1" text to="/display"><v-icon class = "mr-2" color="white">mdi-map-marker </v-icon> Display</v-btn >
    <v-toolbar color="#2900AA" flat>
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
            <v-list-item-title><v-icon class = "mr-2" color="#6279b8">mdi-home </v-icon> Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title><v-icon class = "mr-2" color="#6279b8">mdi-information </v-icon> About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/browse">
            <v-list-item-title><v-icon class = "mr-2" color="#6279b8">mdi-image-filter-hdr </v-icon>Browse</v-list-item-title>
          </v-list-item>
    <v-toolbar floating>
      <v-text-field
        color="#6279b8"
        hide-details
        prepend-icon="mdi-web"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon color="#6279b8">mdi-magnify</v-icon>
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
    // eslint-disable-next-line vue/no-unused-components
    Cards
  }
}
</script>
