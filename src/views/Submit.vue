<template>
  <v-row style="height: 100%;" justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="pa-8" outlined>
        <v-form v-model="valid">
          <v-container>
            <h2>Submit a Piece of Art</h2>
            <v-text-field
              class="my-6"
              clearable
              v-model="title"
              label="Title of the piece"
              outlined
              :rules="[v => !!v || 'Title is required']"
            ></v-text-field>
            <v-textarea
              v-model="description"
              label="Description"
              outlined
              :rules="[v => !!v || 'Description is required']"
            ></v-textarea>
            <v-text-field
            v-model="item"
            @click:append-outer="addLink"
            label="Add links to images and click +"
            outlined
            :rules="existsLink"
            append-outer-icon="mdi-plus">
            </v-text-field>
            <v-list>
              <v-list-item v-for="image in images" :key="image">
                <p><b>URL: </b> {{ image }}</p>
              </v-list-item>
            </v-list>
            <v-btn :disabled="!valid" @click="postArt" color="success">Submit</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    images: [],
    item: null,
    title: null,
    description: null,
    valid: true
  }),
  methods: {
    addLink: function () {
      this.images.push(this.item)
      this.item = null
    },
    postArt: async function () {
      let response = await axios.post('https://arm-art.herokuapp.com/postArt', { title: this.title, description: this.description, images: this.images })
      let id = response.data
      this.$router.push(`/display/${id}`)
    }
  },
  computed: {
    existsLink () {
      return [
        () => (this.images && this.images.length > 0) || 'Must provide at least 1 link'
      ]
    }
  }
}
</script>
