<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="#081F2E" dark>
      <v-card color="#081F2E" tile flat>
        <v-row justify="center">
          <v-col cols="auto">
            <v-img max-width="120" :src="require('../../assets/images/icon.png')"></v-img>
        <span class="title font-weight-thin">
          IT SOLUITONS</span>
          </v-col>
        </v-row>
      </v-card>
      <v-list dense>
        <v-list-item
          color="white darken-1"
          active-class="border"
          :to="item.path"
          link
          v-for="item in sidebar"
          :key="item.name"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <span class="nunito fs_18">
                {{ item.name }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat tile app>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title class="nunito fs_20">CMS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row justify="end" align="center">
        <v-col cols="auto">
          <v-menu left bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                :ripple="false"
                icon
                v-on="on"
                small
                text
                fab
                @click="open = !open"
              >
                <v-badge bordered color="primary" dot overlap>
                  <v-icon size="30">mdi-bell-outline</v-icon>
                </v-badge>
              </v-btn>
            </template>

            <v-list class="bk" dark>
      <v-list-item
        v-for="item in sda"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon v-if="item.icon" color="pink">mdi-cards-heart</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
          </v-menu>
        </v-col>
        <v-col cols="auto">
          <v-btn color="blue lighten-3" small fab dark>
            <v-avatar size="37"
              ><v-img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ></v-img
            ></v-avatar>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <span class="blue--text">Saidakbar Makhmudkhujaev</span>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: null,
    drawer: null,
    picker: new Date().toISOString().substr(0, 10),
    sda: [
      { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
      { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
    ],
    sidebar: [
      {
        name: 'Dashboard',
        path: '/',
        icon: 'mdi-view-dashboard'
      },
      {
        name: 'Blog',
        path: '/blog',
        icon: 'mdi-feather'
      },
      {
        name: 'Projects',
        path: '/projects',
        icon: 'mdi-file-document-edit-outline'
      },
      {
        name: 'Banners',
        path: '/banners',
        icon: 'mdi-image-size-select-actual'
      },
      {
        name: 'Comments & mails',
        path: '/comments-list',
        icon: 'mdi-comment-eye-outline'
      }
    ]
  })
}
</script>

<style>
.border {
  border-bottom-color: #61cfe6;
  border-left-style: solid;
  border-left-width: 7px;
}
.bk{
  background: rgba(59, 59, 63, 0.856) !important;
  filter: blur('2px');
}
</style>
