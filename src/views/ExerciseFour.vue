<template>
  <v-container id="exercise-four">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 4: Login, Form Validation, v-tab</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML and/or javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Create a component called Login.vue which is a v-card with a v-form containing
        two v-text-fields: email and password.
        It doesn't have to be pretty, just get the basic outline (don't forget the login button).
        Also import that newly-created component into this one and add it in the
        column below so we can see what it looks like.
      </v-col>
      <v-col cols="12">
       <Login/>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 2</h2>
        Add an append-icon for the password field that reveals the letters upon clicking.
        <a href="https://vuetifyjs.com/en/components/text-fields#password-input" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 3</h2>
        Create a component called Register.vue which is a card with a
        form containing four text fields: first name, last name, email, and password.
        Don't forget the sign up button!
        Just as above, import it and add it below so we can see what it looks like.
      </v-col>
      <v-col cols="12">
        <Register/>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 4</h2>
        Again, an append-icon for the password field that reveals the letters upon clicking.
        <a href="https://vuetifyjs.com/en/components/text-fields#password-input" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        Now, we will do some validation. For only the register component, all fields are required.
        Additionally, make sure that email is a valid email using a regular expression.
        Also, make sure that password is at least 8 length and has 1 number.
        <a href="https://dev.to/ratracegrad/form-validation-with-vuetify-in-a-vue-app-1a16" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Challenge</h2>
        Try to enter a blank password. How many error messages do you get? (Hint: The answer is one.)
        We would want the user to know of all password rules. See if you can look around the Vuetify
        documentation to see how to change v-text-field to fix that.
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row justify="center">
      <v-col cols="12">
        <h2>Challenge 2</h2>
        Read through the v-tabs documentation to figure out how to make a v-tabs for our login and
        register form below.
        <a href="https://vuetifyjs.com/en/components/tabs" target="_blank">For reference</a>
      </v-col>
      <v-col cols="8">
        <v-tabs grow = "true">
          <v-tab>Register</v-tab>
          <v-tab-item>
            <Register/>
          </v-tab-item>
          <v-tab>Login</v-tab>
          <v-tab-item>
            <Login/>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Challenge 3</h2>
        Add another v-text-field to confirm the email address for the sign up component. Make sure that it matches the
        other email field. You will need to use a computed function.
        <a href="https://stackoverflow.com/questions/47213703/vuetify-form-validation-defining-es6-rules-for-matching-inputs" target="_blank">For reference</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
export default {
  name: 'ExerciseFour',

  data: () => ({

  }),
  components: {
    Login,
    Register
  },
  methods: {
    add () {

    }
  }
}
</script>
