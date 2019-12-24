<template>
  <v-container id="exercise-two">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 2: Composing Components and v-select</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML and/or javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Create a component called Counter.vue which is simply a v-btn. Import it
        to the column below.
      </v-col>
      <v-col cols="12">
       <Counter></Counter>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 2</h2>
        Add in a prop to the component so we can give the button a color.
        For now, make that "color" variable equal to blue.
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 3</h2>
        Declare a "count" variable for the button. Add an action to the v-btn so that
        when we click it, the count increases. Then, compose a few instances of the button below. If
        you click on one, does it affect the count of the others?
      </v-col>
      <v-col cols="12">
        <Counter/>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 4</h2>
        Add a slot to the button so that we can add text to it from here. Compose
        that button below with text between the opening and closing tags.
        <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank">For reference</a>
      </v-col>
      <v-col cols="12">
       <Counter v-bind:color="one_color">Submit</Counter>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        Now, make a v-select below with different color choices. For now, just go with "red", "blue", "green", "yellow".
        Bind the choice that is selected from that list to the "color" variable. The buttons should all change color.
        <a href="https://vuetifyjs.com/en/components/selects" target="_blank">For reference</a>
      </v-col>
      <v-col cols="12">
        <v-select v-model="one_color" :items = "colors" label="Colors"></v-select>
        <Counter v-bind:color="one_color">Color Button</Counter>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 6</h2>
        We want to color selector to have capitalized colors, but send in lowercase colors to our component.<br>
        Change "colors" to a list of objects with a "text" and "value" field.<br>
        The text is what we will show users and the value is the value that will be associated
        with the text they click on. For example, green object would like like:<br>
        { text: 'Green', value: 'green' }<br>
        Incorporate this into the v-select.
        <a href="https://vuetifyjs.com/en/components/selects#customized-item-text-and-value" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 7</h2>
        Does the select still work properly if you change "value" to "val"? Observe the value of
        color below: <br>
        {{ color }}
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Challenge</h2>
        Can you figure out how to make a button rounded? Hint: Search the vuetify documentation for buttons.
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Counter from '@/components/Counter.vue'
export default {
  name: 'exercise-two',
  components: {
    Counter
  },
  data: () => ({
    count: 0,
    colors: [
      { text: 'Red', value: 'red' },
      { text: 'Green', value: 'green' },
      { text: 'Blue', value: 'blue' },
      { text: 'Yellow', value: 'yellow' }
    ],
    one_color: null
  })
}
</script>
