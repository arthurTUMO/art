<template>
  <v-container id="exercise-one">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 1: Variables and Conditional Rendering</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML and/or javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Play around with the v-text-field a little.
      </v-col>

      <v-col cols="12">
        <b>Value of msg:</b> {{ msg }}
      </v-col>

      <v-col cols="5">
        <v-card>
          <v-card-text>
            <v-text-field v-model="msg" label="Vue variables dynamically update"></v-text-field>
          </v-card-text>
          <v-card-actions>
      <v-btn @click = "refresh()" text>Refresh</v-btn>
      </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-divider class="my-4"/>
      </v-col>

      <v-col cols="12">
        <h2>Part 2</h2>
        Now, make a new variable (newMsg) and text field that allows us to change its value like above.
      </v-col>

      <v-col cols="12">
        <b>Value of newMsg:</b> {{ newMsg }}
      </v-col>
       <v-col cols="5">
        <v-card>
          <v-card-text>
            <v-text-field v-model="newMsg" label="Vue variables dynamically update"></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 3</h2>
        Now, type in "Vue.js rocks!" for the msg text field and see what happens...
      </v-col>
      <v-col cols="4" v-if="msg=='Vue.js rocks!'">
        <v-img
        alt="hayko"
        src="../assets/hayko.jpg"
        max-width="500"
        max-height="300"/>
      </v-col>
      <v-col cols="4" v-else-if="msg=='Vue.js kinda rocks!'">
        <v-img
        alt="mko"
        src="../assets/mko.jpeg"
        max-width="500"
        max-height="300"/>
      </v-col>
        <v-col cols="4" v-else>
        <v-img
        alt="vue"
        src="../assets/logo.png"
        max-width="500"
        max-height="300"/>
      </v-col>

    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 4</h2>
        Our friend above is lonely. See if you can find a friend of his in the /assets folder
        and add him in, making sure that they are in the same row and both conditionally rendered on
        msg being "Vue.js rocks!"
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        How does the rendered HTML change when we use v-show instead of v-if?
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 6</h2>
        Add an HTML element using v-else-if that will pop up if msg is "Vue.js kinda rocks!"
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 7</h2>
        Add an HTML element using v-else that will pop up if msg is anything else.
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 8</h2>
        Add a v-btn to the first card that will call a function to reset msg to "Hello".
        <a href="https://vuetifyjs.com/en/components/cards#examples" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 9</h2>
        Move the reset logic into a method in the javascript section.
        <a href="https://vuejs.org/v2/guide/#Handling-User-Input" target="_blank">For reference</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ExerciseOne',

  data: () => ({
    msg: 'Hello',
    newMsg: 'Hi'
  }),
  methods: {
    refresh: function () {
      this.msg = 'Hello'
    }
  }
}
</script>
