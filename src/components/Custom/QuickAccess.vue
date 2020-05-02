<template>
     <div>
         <v-row>
             <v-col cols="12" class="px-0 py-0">
                 <p class="nunito fs_28">Dashboard</p>
             </v-col>
         </v-row>
         <v-row justify="start" align="start">
             <v-col v-for="(item, i) in sidebar" :key="i" cols="4" align-self="center">
                 <v-card flat>
                    <v-row>
                        <v-col class="mx-3" cols="2">
                            <v-icon size="50" color="#68A3E7">{{item.icon}}</v-icon>
                        </v-col>
                         <v-col class="mt-2" cols="8">
                             <v-row>
                                 <v-col cols="12" class="px-0 py-0">
                                     <p>{{item.name}}</p>
                                 </v-col>
                                 <v-col cols="12" class="px-0 py-0">
                                     <span>Organize, edit or delete your posts</span>
                                 </v-col>
                                 <v-col cols="12" class="px-0 py-0">
                                     <v-row justify="start">
                                         <v-col cols="auto">
                                             <v-btn :to="item.path" outlined color="#5695EB">Add new</v-btn>
                                         </v-col>
                                         <v-col cols="auto">
                                             <v-btn target="_blank" :href="item.href" text tile color="#5695EB" class="text-capitalize">browse <v-icon right>mdi-arrow-right</v-icon></v-btn>
                                         </v-col>
                                     </v-row>
                                 </v-col>
                             </v-row>
                         </v-col>
                    </v-row>
                 </v-card>
             </v-col>
         </v-row>
     </div>
</template>

<script>
export default {
  data () {
    return {
      sidebar: [
        {
          name: 'Blog',
          path: '/create-post',
          icon: 'mdi-feather'
        },
        {
          name: 'Projects',
          path: '/porfolio/new-project',
          icon: 'mdi-file-document-edit-outline'
        },
        {
          name: 'Comments & mails',
          path: '/comments-list',
          icon: 'mdi-comment-eye-outline'
        }
      ]
    }
  }
}
</script>

<style>

</style>
