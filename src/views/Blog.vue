<template>
  <div>
     <v-container>
          <v-row justify="start" align="center">
             <v-col v-for="(item, i) in analysis" :key="i" sm="4" md="3" xl="3" cols="12">
                 <v-card tile flat>
                    <v-row justify="start" class="mx-auto">
                        <v-col align-self="center" cols="auto">
                            <v-avatar size="70" color="light-blue lighten-5">
                                 <v-icon class="#081F2E" size="40">
                                {{item.icon}}
                            </v-icon>
                            </v-avatar>
                        </v-col>
                        <v-col cols="auto" align-self="center">
                                <p class="pb-0 body-1 text--secondary">{{item.name}}</p>
                                <span class="display-1 font-weight-thin">{{item.value}}</span>
                        </v-col>
                    </v-row>
                 </v-card>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="auto">
                 <v-card color="transparent" flat tile>
                     <v-row>
                         <v-col cols="auto">
                             <v-btn rounded to="/create-post" tile color="primary">Create Post <v-icon right>mdi-plus</v-icon></v-btn>
                         </v-col>
                     </v-row>
                 </v-card>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="12">
                 <v-card class="px-3 mb-3" flat tile>
                     <v-row justify="space-between">
                     <v-col cols="2" align-self="center">
                          <v-select
                            dense
                            return-object
                            v-model="chosenType"
                            :items="filters"
                            item-text="name"
                            label="sort by"
                            outlined
                            hide-details
                            ></v-select>
                     </v-col>
                     <v-col cols="6">
                          <v-text-field
                            color="primary"
                            v-model="search"
                            append-icon="mdi-image-search-outline"
                            label="Search"
                            class="pt-0"
                            single-line
                            hide-details
                            ></v-text-field>
                     </v-col>
                 </v-row>
                 </v-card>
                 <v-card class="py-4 px-4" tile flat>
                      <v-data-table
                        :loading="false"
                         loading-text="Loading... Please wait"
                        :headers="headers"
                        :search="search"
                        :items="desserts"
                        :items-per-page="15"
                        class="elevation-0">
                        <template v-slot:header.name="{ header }">
                         {{ header.text.toUpperCase() }}
                        </template>
                        <template v-slot:item.image="{ item }">
                          <v-card tile flat color="transparent" max-width="120" class="pa-3">
                              <v-img contain width="120" height="100" :src="item.mainImage.mainImageUrl"></v-img>
                          </v-card>
                        </template>
                         <template v-slot:item.status="{ item }">
                          <v-chip :color="item.status==1 ? 'light-green lighten-4' : 'red lighten-4'">{{item.status==1 ? 'published': 'unpublished'}}</v-chip>
                        </template>
                          <template v-slot:item.date="{ item }">
                         <span>{{item.createdAt | moment('Do MMM, YYYY')}}</span>
                        </template>
                        <template v-slot:item.time="{ item }">
                         <span>{{item.createdAt | moment('HH:mm:ss a')}}</span>
                        </template>
                        <template v-slot:item.action="{ item }">
                          <v-row v-if="item.status == 1">
                              <v-col cols="auto">
                                  <v-btn text color="" :to="'/edit-post/'+item.id" small fab><v-icon>mdi-fountain-pen-tip</v-icon></v-btn>
                              </v-col>
                               <v-col cols="auto">
                                  <v-btn @click="pw(item)" text small fab><v-icon>{{ item.status ? 'mdi-eye-outline':  'mdi-eye-off-outline'}}</v-icon></v-btn>
                              </v-col>
                              <v-col cols="auto">
                                  <!-- <delete-blog-dialog :postId="item.id" /> -->
                                   <v-btn text color="red lighten-1" @click="deletePost(item.id)" small fab><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                              </v-col>
                          </v-row>
                        </template>
                    </v-data-table>
                 </v-card>
                 <delete-blog-dialog v-if="deleteSinglePost.flag" :updateTable="this.getAll"  :post="deleteSinglePost" />
             </v-col>
         </v-row>
     </v-container>
  </div>
</template>

<script>
import DeleteBlogDialog from '../components/Dialogs/DeleteBlogDialog'
import Blogs from '../services/Blogs'
import Stats from '../services/Stats'
export default {
  data () {
    return {
      chosenType: { path: '', name: 'Active posts' },
      deleteSinglePost: {
        flag: false,
        data: ''
      },
      filters: [{
        path: '?archived=true',
        name: 'Archived posts'
      },
      {
        path: '',
        name: 'Active posts'
      }
      ],
      search: '',
      eye: 'mdi-eye-off-outline',
      analysis: [
        {
          icon: 'mdi-bullhorn',
          name: 'Total Post',
          value: '394'
        },
        {
          icon: 'mdi-note-text',
          name: 'Total Visitors',
          value: '494'
        }
        // },
        // {
        //   icon: 'mdi-note-text',
        //   name: 'Total Drafts',
        //   value: '3'
        // },
        // {
        //   icon: 'mdi-seal',
        //   name: 'Total assets',
        //   value: '394'
        // }

      ],
      headers: [
        {
          text: 'Image',
          align: 'start',
          value: 'image'
        },
        { text: 'Title', value: 'title' },
        { text: 'Author', value: 'author' },
        { text: 'Date', value: 'date' },
        { text: 'Time', value: 'time' },
        { text: 'View', value: 'timesSeen' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'action' }
      ],
      desserts: []
    }
  },
  methods: {
    pw (item) {
      item.status = !item.status
    },
    deletePost (id) {
      this.deleteSinglePost = {
        flag: true,
        data: id
      }
    },
    getStats () {
      Stats.getAll().then(res => {
        console.log(res)
        this.analysis[0].name = res[0].status
        this.analysis[0].value = res[0].count
        this.analysis[1].name = res[1].status
        this.analysis[1].value = res[1].count
      }).catch(err => {
        console.log(err)
      })
    },
    getAll (val) {
      Blogs.getAllPosts(val).then(res => {
        console.log(res)
        this.desserts = res
      }).catch(err => console.log(err))
    }
  },
  watch: {
    chosenType: {
      handler (val) {
        this.getAll(val.path)
      },
      deep: true
    }
  },
  components: {
    DeleteBlogDialog
  },
  created () {
    this.getStats()
    this.getAll('')
  }
}
</script>

<style>

</style>
