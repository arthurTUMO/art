<template>
  <v-app>
    <v-content>
          <v-toolbar app color="#2900AA" dark>
           <img :src="require('@/assets/logo.png')" height="100"/>
           <v-toolbar-title>Art</v-toolbar-title>
           <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-md-and-down">
            <v-btn class="mx-1" text to="/">Home</v-btn >
            <v-btn class="mx-1" text to="/exercise-two">About</v-btn >
            <v-btn class="mx-1" text to="/exercise-three">Browse</v-btn >
            <v-btn class="mx-1" text to="/exercise-four">Smth</v-btn >
            <v-btn class="mx-1" text to="/exercise-five">Smth</v-btn >
          </v-toolbar-items>
            <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </v-toolbar>
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

          <v-list-item to="/exercise-two">
            <v-list-item-title>2. Composing Components</v-list-item-title>
          </v-list-item>

          <v-list-item to="/exercise-three">
            <v-list-item-title>3. V-for, Forms</v-list-item-title>
          </v-list-item>

          <v-list-item to="/exercise-four">
            <v-list-item-title>4. Form Validation</v-list-item-title>
          </v-list-item>
           <v-list-item to="/exercise-five">
            <v-list-item-title>5. App Bar</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
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
