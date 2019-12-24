<template>
<v-card>
  <v-form v-model = "valid">
    <v-container>
      <v-row>
      <v-col cols="12" class = "px-4">
      <h2>Sign Up</h2>
      <v-text-field class = "my-6" clearable v-model = "firstname" label="First Name" aria-required :rules="[v => !!v || 'Name is required']">
       </v-text-field>
       <v-text-field class = "my-6" clearable v-model = "lastname" label="Last Name" aria-required :rules="[v => !!v || 'Last is required']">
       </v-text-field>
      <v-text-field class = "my-6" error-count = "5" clearable :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" v-model = "password" label="Password" aria-required :rules="passwordRules">
       </v-text-field>
        <v-text-field class = "my-6" error-count = "3" clearable type = 'email' v-model = 'email' label="E-mail" aria-required :rules="emailRules">
       </v-text-field>
        <v-text-field class = "my-6" error-count = "3" clearable type = 'email_confirm' v-model = 'email_confirm' label="Confirmation E-mail" aria-required :rules="emailConfirmationRules">
       </v-text-field>
       <v-btn :disabled = "!valid" color="success">Login</v-btn>
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
    firstname: null,
    lastname: null,
    password: null,
    email: null,
    email_confirm: null,
    valid: true,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have 8+ characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }),
  computed: {
    emailConfirmationRules () {
      return [
        () => (this.email_confirm === this.email) || 'E-mail must match',
        v => !!v || 'Confirmation E-mail is required'
      ]
    }
  }
}
</script>
