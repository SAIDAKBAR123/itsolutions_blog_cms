<template>
  <div>
      <v-container fluid class="px-0">
        <v-row justify="center" align="center">
          <v-col cols="12" md="auto">
            <v-btn color="primary" large to="/portfolio/new-project">Add Project</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col md="6" cols="8" align-self="center">
              <v-text-field
              placeholder="Search project"
              hide-details
              class="pb-0"
              outlined
              dense
          ></v-text-field>
          </v-col>
          <v-col cols="auto" align-self="center">
            <v-btn dark color="primary" fab small elevation="1"><v-icon small>mdi-folder-search</v-icon></v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-col md="3" cols="12" v-for="(item,i) in projects" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card class="px-0" :elevation="hover ? 12: 0" outlined>
                  <v-card-title class="py-0 px-1">
                      <span class="text-caption nunito">{{ item.createdAt | moment('Do MMM, YYYY HH:mm') }}</span>
                      <v-spacer></v-spacer>
                      <v-btn color="#081F2E" fab text small :to="`/portfolio/${item.id}`"><v-icon>mdi-pen</v-icon></v-btn>
                      <v-btn color="red lighten-1" fab text small @click="deleteProject(item.id)"><v-icon>mdi-delete</v-icon></v-btn>
                  </v-card-title>
                    <v-img
                     class="white--text align-end"
                    :src="item.images[0].url"
                    height="300px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                  >
                  <v-card-title class="nunito" v-text="item.title"></v-card-title>
                  </v-img>
              </v-card>
              </v-hover>
          </v-col>
        </v-row>
        <v-row justify="center" justify-md="end">
          <v-col cols="auto" >
             <div class="text-center">
              <v-pagination
                v-if="projects.length > 11"
                v-model="page"
                :length="Math.ceil(projects.length/3)"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import Portfolio from '../services/Portfolio'
export default {

  data () {
    return {
      menu2: '',
      page: 1,
      date: new Date(),
      projects: []
    }
  },
  methods: {
    getPortfolios () {
      Portfolio.getAll().then(res => {
        console.log(res)
        this.projects = res
      }).catch(err => console.log(err))
    },
    deleteProject (id) {
      Portfolio.deleteProject(id).then(res => {
        console.log(res)
        // eslint-disable-next-line eqeqeq
        const index = this.projects.findIndex(el => el.id == id)
        this.projects.splice(index, 1)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getPortfolios()
  }
}
</script>

<style scoped>
.rightBorder{
  border-right-color: red !important;
  border-right-style: dotted !important;
  border-right-width: 10px;
}
</style>
