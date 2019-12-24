<template>
<v-card>
  <v-form>
    <v-container>
      <v-row>
      <v-col cols="12">
      <h2 class = "mx-4">Sign In</h2>
      <v-text-field autofocus v-model = "email" label="Email" class = "px-4">
       </v-text-field>
      <v-text-field :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" v-model = "password" label="Password" class = "px-4">
       </v-text-field>
       <v-btn color="success" @click = "add()" class = "mx-4">Login</v-btn>
       </v-col>
      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    password: null,
    email: null
  })
}
</script>
