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
                               class="ml-3"
                                    label="Title"
                                ></v-text-field>
                         </v-col>
                     </v-row>
                 </v-card>
             </v-col>
             <v-col cols="shrink">
                <v-row justify="center" align="center">
                    <v-col class="py-0" cols="12" align-self="center">
                        <v-card tile flat>
                              <v-file-input dense class="py-3 px-1" v-model="api" outlined accept="image/*" label="Upload image"></v-file-input>
                              <div>
                                <v-card tile flat height="100">
                                    <v-card-text>
                                        image here////
                                    </v-card-text>
                                </v-card>
                              </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="mt-2" justify="center" align="center">
                    <v-col cols="12" class="py-0">
                        <span>Tags</span>
                    </v-col>
                         <v-col align-self="center" cols="12">
                                 <v-combobox
                                    v-model="chips"
                                    :items="items"
                                    chips
                                    clearable
                                    label="Tags"
                                    multiple
                                    solo
                                    >
                                    <template v-slot:selection="{ attrs, item, select, selected }">
                                    <v-chip
                                        color="blue-grey lighten-3"
                                        v-bind="attrs"
                                        dense
                                        :input-value="selected"
                                        label
                                        outlined
                                        close
                                        @click="select"
                                        @click:close="remove(item)"
                                    >
                                        <strong>{{ item }}</strong>&nbsp;
                                    </v-chip>
                                    </template>
                                 </v-combobox>
                         </v-col>
                     </v-row>
             </v-col>
         </v-row>
     </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radioGroup: null,
      api: '',
      chips: ['computer'],
      items: ['computer', 'science', 'bialogy', 'working', 'Cisco', 'Data Flow']
    }
  },
  methods: {
    maydahmad () {
      const image = URL.createObjectURL(this.api.target.files[0])
      console.log(image)
      console.log(this.api.target)
    },
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }

}
</script>

<style>

</style>
