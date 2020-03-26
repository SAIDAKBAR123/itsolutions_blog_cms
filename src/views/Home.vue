<template>
  <div class="home">
   <v-container fluid>
     <v-row class="mx-auto">
       <v-col class="my-0 py-0" cols="12">
         <quick-access />
       </v-col>
       <v-col class="px-0 mt-3" cols="12">
         <application />
       </v-col>
        <v-col class="px-0 mt-3" cols="12">
         <last-posts/>
       </v-col>
     </v-row>
   </v-container>
  </div>
</template>

<script>
import QuickAccess from '../components/Custom/QuickAccess'
import Application from '../components/Custom/Application'
import LastPosts from '../components/Custom/LastPosts'

export default {
  components: {
    QuickAccess,
    Application,
    LastPosts
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>

</style>
