<template>
  <div>
      <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn text color="red lighten-1" v-on="on" small fab><v-icon>mdi-trash-can-outline</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title class="title">Do you want to <span class="pl-1 red--text"> remove</span>?</v-card-title>
        <v-card-text>Doing so, you will lose your post from Blog store and cannot restore it</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }

}
</script>

<style>

</style>
