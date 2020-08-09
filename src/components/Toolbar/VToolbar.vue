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
            <v-list two-line dark width="300">
              <v-list-item-group
                v-model="selected"
                multiple
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.headline"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                        <v-icon
                          color="red darken-2"
                        >
                          mdi-cards-heart
                        </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index + 1 < items.length"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-col>
        <v-col cols="auto">
             <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn  v-on="on" color="blue lighten-3" small fab dark>
                    <v-avatar size="37"
                      ><v-img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </template>
                <v-list two-line multiple width="260">
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>
                            <span class=" nunito">
                                ITSOLUTIONS
                            </span>
                          </v-list-item-title>
                          <v-list-item-subtitle class=" nunito-sans-default">
                            admin
                          </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  <v-list-item>
                    <v-btn text tile block @click="logout">  Leave<v-icon right>mdi-exit-to-app</v-icon></v-btn>
                  </v-list-item>
                </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    open: null,
    drawer: null,
    picker: new Date().toISOString().substr(0, 10),
    items: [
      {
        action: '15 min',
        headline: 'Like your post at: 20/12/2020',
        title: 'Saida Azimova',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: '15 min',
        headline: 'Like your post at: 20/12/2020',
        title: 'Saida Azimova',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: '15 min',
        headline: 'Like your post at: 20/12/2020',
        title: 'Saida Azimova',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      }
    ],
    sidebar: [
      // {
      //   name: 'Dashboard',
      //   path: '/',
      //   icon: 'mdi-view-dashboard'
      // },
      {
        name: 'Blog',
        path: '/blog',
        icon: 'mdi-feather'
      },
      {
        name: 'Portfolio',
        path: '/portfolio',
        icon: 'mdi-file-document-edit-outline'
      }
      // {
      //   name: 'Settings',
      //   path: '/settings',
      //   icon: 'mdi-tools'
      // }
      // {
      //   name: 'Comments & mails',
      //   path: '/comments-list',
      //   icon: 'mdi-comment-eye-outline'
      // }
    ]
  }),
  methods: {
    logout () {
      this.$router.push('/pages/login')
    }
  }
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
