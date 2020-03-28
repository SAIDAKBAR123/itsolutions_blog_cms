<template>
  <div>
     <v-container>
         <v-row justify="space-between">
             <v-col cols="12">
                 <v-card flat tile>
                       <p class="nunito fs_28 pa-3">New Post</p>
                     <v-row justify="space-between">
                         <v-col cols="auto"><v-btn large outlined class="mx-2"><v-icon left>mdi-eye-settings</v-icon> Preview</v-btn></v-col>
                         <v-col cols="auto" class="mx-2">
                             <v-row justify="center" class="py-0">
                                    <v-col class="py-0" cols="auto"><v-btn large outlined color="grey" class="">Cancel</v-btn></v-col>
                                    <v-col class="py-0" cols="auto"><v-btn large color="primary" class="">Publish <v-icon right>mdi-menu-right-outline</v-icon></v-btn></v-col>
                             </v-row>
                         </v-col>
                     </v-row>
                 </v-card>
             </v-col>
         </v-row>
         <v-row>
             <v-col  cols="8">
                 <v-card height="600">
                     <v-row justify="start">
                         <v-col class="mx-2" cols="11">
                             <p class="py-0">Article Title</p>
                               <v-text-field
                                    label="Title"
                                ></v-text-field>
                         </v-col>
                     </v-row>
                 </v-card>
             </v-col>
             <v-col cols="shrink
             ">
                 <v-card height="600">sidebasr</v-card>
             </v-col>
         </v-row>
     </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
