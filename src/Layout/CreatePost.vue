<template>
  <div>
     <v-container>
         <v-row justify="space-between">
             <v-col cols="12">
                 <v-card flat tile>
                       <p class="nunito fs_28 pa-3">New Post</p>
                     <v-row justify="space-between">
                         <v-col cols="auto"><v-btn @click="saveAsDraft" large outlined class="mx-2"><v-icon left>mdi-eye-settings</v-icon> Default</v-btn></v-col>
                         <v-col cols="auto" class="mx-2">
                             <v-row justify="center" class="py-0">
                                    <v-col class="py-0" cols="auto"><v-btn large outlined color="grey" to="/blog" class="">Cancel</v-btn></v-col>
                                    <v-col class="py-0" cols="auto"><v-btn large :disabled="!isPublishAllowed" color="primary" class="" @click="publish">Publish <v-icon right>mdi-menu-right-outline</v-icon></v-btn></v-col>
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
                                v-model="title"
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
                    <v-col cols="12" v-if="!mainImage.url.length >0">
                      <input v-show="false" type="file" id="file" ref="fileInput"  v-on:change="handleFileUpload"/>
                         <div @click="onPickFile" class="input_img_layout flex flex-center justify-center">
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
                    <v-col cols="12" v-else>
                        <v-img :src="mainImage.url">
                          <div class="hover__img" >
                              <v-row justify="end">
                                  <v-col cols="auto" class="py-0" @click="removeImage(mainImage.id)">
                                     <v-icon color="white" size="30" dark>mdi-close-circle</v-icon>
                                  </v-col>
                              </v-row>
                          </div>
                        </v-img>
                    </v-col>
                </v-row>
                <v-row class="mt-2" justify="center" align="center">
                    <v-col cols="12" class="py-0">
                        <span>Tags</span>
                    </v-col>
                         <v-col align-self="center" cols="12">
                                 <v-combobox
                                    return-object
                                    v-model="selectedTags"
                                    :items="tagsList"
                                     item-text="name"
                                    chips
                                    clearable
                                    label="tags"
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
                                        @click="select"
                                    >
                                        <strong>{{item.name}}</strong>&nbsp;
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
                                         <span class="flex justify-space-between">Save as Draft: </span><v-switch v-model="saveStatus"></v-switch>
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
import Blogs from '../services/Blogs'
import Tags from '../services/Tags'
export default {
  data () {
    return {
      commentAllowed: true,
      saveStatus: false,
      radioGroup: null,
      tagsList: [],
      attrs: { id: 'sadsa' },
      title: '',
      mainImage: {
        url: '',
        id: ''
      },
      imageFile: new FormData(),
      api: '',
      selected: [],
      selectedTags: [],
      content: '<span class="nunito fs_28_bold" >Stay home</span>',
      editorOption: {
        // Some Quill options...
      }
    }
  },
  watch: {
    // selectedTags: {
    //   handler (val) {
    //     console.log(val)
    //   },
    //   deep: true
    // }
  },
  computed: {
    isPublishAllowed () {
      return this.title && this.mainImage.url && this.content && this.selectedTags.length > 0
    },
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    removeImage (id) {
      Blogs.deleteMainImage(id).then(res => {
        this.mainImage.url = ''
        this.imageFile = new FormData()
        console.log(res)
      }).catch(err => console.log(err))
    },
    saveAsDraft () {
    },
    publish () {
      const formData = {
        body: this.content,
        title: this.title,
        mainImageId: this.mainImage.id,
        isCommentable: this.commentAllowed ? 1 : 0,
        tags: this.selectedTags.map(el => { return { id: el.id } }),
        status: this.saveStatus ? 0 : 1
      }
      console.log(formData)
      Blogs.postNewBlog(formData).then(res => {
        console.log(res)
        this.$notify({
          group: 'foo',
          title: 'Article has posted successfully',
          type: 'success'
        })
        this.$router.push('/blog')
      }).catch(err => console.log(err))
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    handleFileUpload (event) {
      const files = event.target.files
      const filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please, input correct image file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
      })
      fileReader.readAsDataURL(files[0])
      this.imageFile.append('file', files[0])

      Blogs.postMainImage(this.imageFile).then(res => {
        this.mainImage = res
      }).catch(err => console.log(err))
    },
    getAll () {
      Tags.getAll().then(res => {
        this.tagsList = res
      }).catch(err => console.log(err))
    },
    onEditorBlur (quill) {
      // console.log('editor blur!', quill)
    },
    onEditorFocus (quill) {
      // console.log('editor focus!', quill)
    },
    onEditorReady (quill) {
      // console.log('editor ready!', quill)
    },
    onEditorChange ({ quill, html, text }) {
      // console.log('editor change!', quill, html, text)
      this.content = html
    },
    eventAccured (val) {
      alert('Drag and drop zone')
      console.log(val)
    },
    getType (val) {
      console.log(val)
    },
    remove (item) {
      // console.log(item)
      // const num = this.selectedTags.filter((el, index) => {
      //   if (el.id === item.id) { this.selectedTags = this.selectedTags.slice(index, -1) }
    //  })
    // console.log(num)
    }
  },
  created () {
    this.getAll()
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
.hover__img{
  transition: all 0.7s ease;
  padding: 2px;
  height: 100%;
  cursor: pointer;

}
.hover__img:hover{
  background:rgba(31, 31, 31, 0.788);
  height: 100%;

}
</style>
