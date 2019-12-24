/* eslint-disable vue/valid-template-root */
<template>
  <v-app>
          <v-app-bar app color="#2900AA" dark>
           <img :src="require('@/assets/logo.png')" height="100"/>
           <v-toolbar-title>Art</v-toolbar-title>
           <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-md-and-down">
            <v-btn class="mx-1" text to="/">Home</v-btn >
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
            <v-list-item-title>1. Basic Variables</v-list-item-title>
          </v-list-item>
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
