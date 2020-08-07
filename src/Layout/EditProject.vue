<template>
  <div>
     <v-container>
         <v-row justify="space-between">
             <v-col cols="12">
                 <v-card flat tile>
                       <p class="nunito fs_28 pa-3">New Project</p>
                     <v-row justify="end">
                         <v-col cols="auto" class="mx-2">
                             <v-row justify="center" class="py-0">
                                    <v-col class="py-0" cols="auto"><v-btn to="/portfolio" large outlined color="grey" class="">Cancel</v-btn></v-col>
                                    <v-col class="py-0" cols="auto"><v-btn @click="updateProject" large color="success" class="">Save <v-icon right>mdi-menu-down-outline</v-icon></v-btn></v-col>
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
                                v-model="title"
                                outlined
                                dense
                                ></v-text-field>
                         </v-col>
                         <v-col class="mx-2">
                             <p class="py-0">Site url</p>
                               <v-text-field
                               class=""
                                label="http://example.com"
                                v-model="url"
                                outlined
                                dense
                                ></v-text-field>
                         </v-col>
                         <v-col cols="12">
                           <v-row justify="center">
                             <v-col cols="12">
                                <v-card elevation="0" class="input_img_layout">
                                    <v-row>
                                      <v-col cols="12" md="2" xl="2" sm="4" lg="2" class="fill-height" v-for="item in imageList" :key="item.url">
                                        <v-card ripple class=" fill-height">
                                            <v-img height="120" width="200" :src="item.url">
                                              <div class="hover__img" >
                                                     <v-row justify="end">
                                                        <v-col cols="auto" class="py-0 affectRemove" @click="removeImage(item.id)">
                                                           <v-hover v-slot:default="{  }">
                                                              <v-icon  color="#F6F5F2" size="30" dark>mdi-close-circle</v-icon>
                                                           </v-hover>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                            </v-img>
                                        </v-card>
                                      </v-col>
                                      <v-col cols="12" md="2" xl="2" sm="4" lg="2" class="fill-height">
                                        <v-card ripple height="120" width="200" class=" fill-height" @click="onPickImages">
                                          <v-card-text>
                                            <input v-show="false" multiple type="file" id="file" ref="imagesList"  v-on:change="handleImageUpload"/>
                                            <v-row justify="center" align="center">
                                              <v-col cols="auto" align-self="center">
                                                <v-icon size="50">mdi-image-plus</v-icon><br>
                                              </v-col>
                                              <v-col cols="auto" class="my-0 py-0">
                                                <span>upload image</span>
                                              </v-col>
                                            </v-row>
                                          </v-card-text>
                                        </v-card>
                                      </v-col>
                                    </v-row>
                                </v-card>
                             </v-col>
                           </v-row>
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
                          <v-col cols="12">
                           <v-select
                              v-model="chosenCategory"
                              return-object
                              :items="categories"
                              item-value="name"
                              item-text="name"
                              clearable
                              label="Product category"
                            ></v-select>
                          </v-col>
                     <v-col cols="auto">
                        <span class="flex justify-space-between">Save as Draft: </span><v-switch v-model="saveStatus"></v-switch>
                    </v-col>
                </v-row>
                 </v-card>
                 </v-col>
              </v-row>
     </v-container>
  </div>
</template>

<script>
import Portfolio from '../services/Portfolio'
import Blogs from '../services/Blogs'
import Categories from '../services/Categories'
export default {
  data () {
    return {
      saveStatus: false,
      chosenCategory: {},
      categories: [],
      title: '',
      url: 'http://example.com',
      content: '<span class="nunito fs_28_bold" >Stay home</span>',
      editorOption: {
        // Some Quill options...
      },
      mainImage: {
        url: '',
        id: ''
      },
      imagesForm: new FormData(),
      imageList: []
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    getSingleProject () {
      Portfolio.getSingle(this.$route.params.id).then(res => {
        console.log(res)
        this.content = res.content
        this.imageList = res.images
        this.url = res.url
        this.title = res.title
        this.chosenCategory = res.category
      }).catch(err => {
        console.log(err)
      })
    },
    onPickImages () {
      this.$refs.imagesList.click()
    },
    onPickFile () {

    },
    updateProject () {
      const data = {
        title: this.title,
        content: this.content,
        url: this.url,
        images: this.imageList.map(el => el.id),
        categoryId: this.chosenCategory.id
      }
      console.log(data)
      Portfolio.updateProject(this.$route.params.id, data).then(res => {
        console.log(res)
        this.$notify({
          group: 'foo',
          title: 'Portfolio has posted successfully',
          type: 'success'
        })
        this.$router.push('/portfolio')
      }).catch(err => {
        console.log(err)
      })
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
    },
    handleImageUpload (event) {
      const files = event.target.files
      files.forEach((element, i) => {
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {})
        fileReader.readAsDataURL(files[i])
        this.imagesForm.append('file', files[i])
        Blogs.postMainImage(this.imagesForm).then(res => {
          console.log(res)
          this.imageList.push(res)
        }).catch(err => console.log(err))
        this.imagesForm = new FormData()
      })
      console.log(files)
      console.log(this.imagesForm)
    },
    removeImage (id) {
      Blogs.deleteMainImage(id).then(res => {
        const idx = this.imageList.findIndex(el => el.id === id)
        this.imageList.splice(idx, 1)
        console.log(res)
      }).catch(err => console.log(err))
    },
    getCategories () {
      Categories.getCategories().then(res => {
        this.categories = res
      }).catch(err => { console.log(err) })
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
    }
  },
  created () {
    this.getCategories()
    this.getSingleProject()
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
  background:rgba(228, 35, 35, 0.788);
  height: 100%;

}
</style>
