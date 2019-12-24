<template>
  <v-container>
    <v-btn rounded v-bind:color="color" @click = "count++"><slot>Button</slot> {{count}}</v-btn>
    </v-container>
</template>
<script>
export default {
  name: 'Counter',
  props: {
    color: String
  },
  data: () => ({
    count: 0
  })
}
</script>
