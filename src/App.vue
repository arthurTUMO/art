<template>
  <v-app>
    <v-app-bar app color="#3d3d3d" dark >
      <img class="clickable ml-0" :src="require('@/assets/logo.png')" height="100" @click="$router.push('/')">
      <v-toolbar-title class = "hidden-sm-and-down clickable display-1" @click="$router.push('/')">ART</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-slide-x-reverse-transition>
        <v-text-field
        v-show="searchShow"
          clearable
          filled
          hide-details
          dark
          label = "Search for Places"
          v-model="search">
        </v-text-field>
      </v-slide-x-reverse-transition>
      <v-btn icon @click="searchShow = !searchShow">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-toolbar-items class="hidden-md-and-down">
        <v-btn class="mx-1" text to="/"> <v-icon class = "mr-2" color="white">mdi-home </v-icon> Home</v-btn>
        <v-btn class="mx-1" text to="/about"><v-icon class = "mr-2" color="white">mdi-information </v-icon> About</v-btn >
        <v-btn class="mx-1" text to="/browse"><v-icon class = "mr-2" color="white">mdi-map-marker </v-icon> Browse</v-btn >
        <v-btn class="mx-1" text to="/contact"><v-icon class = "mr-2" color="white">mdi-help </v-icon> Contact</v-btn >
      </v-toolbar-items>
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      disable-route-watcher
      disable-resize-watcher
    >
       <v-list
        dense
      >
        <v-list-item @click="$router.push('/');drawer=false;">
          <v-list-item-title><v-icon class = "mr-2">mdi-home </v-icon> Home</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$router.push('/about');drawer=false;">
          <v-list-item-title><v-icon class = "mr-2">mdi-information </v-icon> About</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$router.push('/browse');drawer=false;">
          <v-list-item-title><v-icon class = "mr-2">mdi-map-marker </v-icon>Browse</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$router.push('/contact');drawer=false;">
          <v-list-item-title><v-icon class = "mr-2">mdi-help </v-icon>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
       <transition name = "router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
       </transition>
    </v-content>
    <v-footer
       dark
       padless
     >
       <v-card
         flat
         tile
         class="grey darken-2 white--text text-center"
       >
         <v-card-text>
           <v-btn
             v-for="icon in icons"
             :key="icon"
             class="mx-4 white--text"
             icon
           >
             <v-icon size="24px">{{ icon }}</v-icon>
           </v-btn>
         </v-card-text>

         <v-card-text class="white--text pt-0">
           This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury.
         </v-card-text>

         <v-divider></v-divider>

         <v-card-text class="white--text grey darken-3">
           {{ new Date().getFullYear() }} — <strong>TUMO WORKSHOP</strong>
         </v-card-text>
       </v-card>
     </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    searchShow: false,
    search: null,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }
</style>
