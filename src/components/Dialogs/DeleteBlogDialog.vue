<template>
  <div>
    <v-dialog v-model="post.flag" persistent max-width="290">
      <v-card>
        <v-card-title class="title nunito"
          >Do you want to remove ?
         </v-card-title>
        <v-card-text
          >Doing so, your content will be archive in System. Later you can restore them
          it</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="post.flag = false"
            >cancel</v-btn
          >
          <v-btn color="red darken-1" text @click="deletePost"
            >archive</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Blogs from '../../services/Blogs'
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    updateTable: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    deletePost () {
      console.log(this.post)
      Blogs.deleteSinglePost(this.post.data).then(res => {
        console.log(res)
        this.updateTable()
        this.post.flag = false
      }).catch(err => console.log(err))
    }
  },
  created () {
    console.log(this.post)
  }
}
</script>

<style></style>
