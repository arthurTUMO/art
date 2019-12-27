<template>
<v-card class = "ma-12" outlined>
<v-row justify="center" align="center">
<v-col cols = "6" xl = "6" lg = "6" md="12" sm = "12" xs = "12">
  <v-form v-model = "valid">
    <v-container>
  <v-row>
    <v-col cols="12" class = "px-4">
      <h2>Contact Us</h2>
      <v-text-field class = "my-6" clearable v-model = "firstname" label="First Name" aria-required :rules="[v => !!v || 'Name is required']">   
       </v-text-field>
       <v-text-field class = "my-6" clearable v-model = "lastname" label="Last Name" aria-required :rules="[v => !!v || 'Last Name is required']">   
       </v-text-field>
        <v-text-field class = "my-6" error-count = "3" clearable type = 'email' v-model = 'email' label="E-mail" aria-required :rules="emailRules">   
       </v-text-field>
        <v-text-field class = "my-6" error-count = "3" clearable type = 'subject' v-model = 'subject' label="Subject" aria-required :rules="[v => !!v || 'Subject is required']">   
       </v-text-field>
       <v-btn :disabled = "!valid" color="success">Send the Message</v-btn>
     </v-col>
  </v-row>
    </v-container>
  </v-form>
    </v-col>
    <v-col cols = "6" xl = "6" lg = "6" md="12" sm = "12" xs = "12">
      <v-img aspect-ratio="1.77" height="100%" src = "@/assets/img/contact/contact.jpg"></v-img>
   </v-col>
   </v-row>
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
      valid:true,
      emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid'
],
  }),
  computed: {
    emailConfirmationRules() {
      return [
        () => (this.email_confirm === this.email) || 'E-mail must match',
        v => !!v || 'Confirmation E-mail is required'
      ];
    },
}
}
</script>