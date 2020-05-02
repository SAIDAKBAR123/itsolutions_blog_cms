<template>
  <div>
     <v-container>
         <v-row justify="space-between">
             <v-col cols="12">
                 <v-card flat tile>
                       <p class="nunito fs_28 pa-3">New Project</p>
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
             <v-col  cols="9">
                 <v-card tile flat>
                     <v-row justify="start">
                         <v-col class="mx-2">
                             <p class="py-0">Article Title</p>
                               <v-text-field
                               class=""
                                label="Title"
                                outlined
                                dense
                                ></v-text-field>
                         </v-col>
                     </v-row>
                     <v-row>
                         <v-col class="mx-2">
                               <quill-editor
                                ref="myQuillEditor"
                                v-model="content"
                                :options="editorOption"
                                @blur="onEditorBlur($event)"
                                @focus="onEditorFocus($event)"
                                @ready="onEditorReady($event)"
                                />
                         </v-col>
                     </v-row>
                     <v-row>
                         <v-col>
                             <v-card>
                                 <v-card-text v-html="content"></v-card-text>
                             </v-card>
                         </v-col>
                     </v-row>
                 </v-card>
             </v-col>
             <v-col cols="3">
                 <v-card tile flat class="pa-3">
                      <v-row justify="center" align="center">
                    <v-col cols="py-0">
                        <span class="py-0">Image for article</span>
                    </v-col>
                    <v-col class="py-0" cols="12" align-self="center">
                        <v-card tile flat>
                              <!-- <v-file-input dense class="py-3 px-1" v-model="api" outlined accept="image/*" label="Upload image"></v-file-input> -->
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                         <div @click="eventAccured($event)" class="input_img_layout flex flex-center justify-center">
                             <v-row justify="center">
                                 <v-col cols="auto">
                                     <v-icon color="grey lighten-4" size="80">mdi-cloud-upload-outline</v-icon>

                                 </v-col>
                                 <v-col cols="12">
                                    <p class="text-center text--secondary">Upload your image with Drag & Drop</p>
                                 </v-col>
                             </v-row>
                         </div>
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
                     <v-row>
                         <v-col class="py-0">
                             <v-card tile flat>
                                 <v-list>
                                     <v-list-item>
                                        <span class="flex justify-space-between"> Leave Comments: </span><v-switch v-model="commentAllowed"></v-switch>
                                     </v-list-item>
                                     <v-divider></v-divider>
                                     <v-list-item>
                                         <span class="flex justify-space-between">Show visitors amount: </span><v-switch v-model="commentAllowed"></v-switch>
                                     </v-list-item>
                                 </v-list>
                             </v-card>
                         </v-col>
                     </v-row>
                 </v-card>
                 </v-col>
              </v-row>
     </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentAllowed: true,
      radioGroup: null,
      attrs: 'asa',
      api: '',
      chips: ['computer'],
      items: ['computer', 'science', 'bialogy', 'working', 'Cisco', 'Data Flow'],
      content: '<span class="nunito fs_28_bold" >Stay home</span>',
      editorOption: {
        // Some Quill options...
      }
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorBlur (quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus (quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady (quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange ({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
    eventAccured (val) {
      alert('Drag and drop zone')
      console.log(val)
    },
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

<style scoped>
.input_img_layout{
  border-style: dashed;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 2px dashed rgba(95, 95, 95, 0.288);
  padding: 10px;
  width: 100%;
  height: 10rem;
}
</style>
