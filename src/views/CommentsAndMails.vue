<template>
  <div>
    <v-container fluid class="fill-height">
      <v-row no-gutters class="px-0">
        <v-col class="px-0" cols="3">
          <v-navigation-drawer :height="height.y/1.13" width="380" v-model="drawer" permanent>
            <v-row justify="start">
                <v-col cols="auto">
                  <v-btn active-class="primary" :ripple="false" text>All</v-btn>
                </v-col>
                <v-col cols="auto" class="px-0">
                  <v-btn  text :ripple="false">Unread</v-btn>
                </v-col>
            </v-row>
            <v-list two-line>
              <v-list-item-group v-model="selected" active-class="blue--text">
                  <v-skeleton-loader
                    v-if="false"
                    ref="skeleton"
                    :boilerplate="false"
                    type="list-item-three-line"
                    class="mx-auto"
                  ></v-skeleton-loader>
                <v-card  @click="getMessage(item)" tile v-for="(item, index) in items" :key="index">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ }">
                      <v-list-item-content>
                        <v-list-item-title
                        :class="`text-uppercase ${item.seen ? '' : 'blue--text'}`"
                          v-text="item.name"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.email"
                        ></v-list-item-subtitle>
                        <v-list-item-subtitle
                          v-text="item.text"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text
                        >
                        {{item.createdAt | moment("calendar")}}
                        </v-list-item-action-text>
                         <v-icon  color="blue"></v-icon>
                        <v-icon v-if="!item.seen" color="blue">
                          mdi-email
                        </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index + 1 < items.length"
                    :key="index"
                  ></v-divider>
                </v-card>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="9">
           <transition name="slide-fade">
          <v-card tile flat v-if="mail.createdAt">
              <!-- <v-img aspect-ratio="2.0" max-width="70%" src="https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg"></v-img> -->
            <v-card-title class="nunito">
              <v-row>
              <v-col cols="auto" align-self="center">
                  <v-icon>mdi-clock-outline</v-icon><span class="nunito align-center pt-2 px-1"><small>{{mail.createdAt | moment('calendar')}}</small></span><br>
                  <span class=""><strong>To</strong>: Itsolutions</span><br>
                  <span class=" pb-0"><strong>From</strong>: {{mail.email}}</span><br>
                  <span class="pb-0"><strong>Name</strong>: {{mail.name + ' ' + mail.surname}}</span><br>
              </v-col>
            </v-row>
            </v-card-title>
            <v-card-text class="px-10">
              <span class="nunito">
                <v-alert
                  border="left"
                  colored-border
                  color="blue lighten-3"
                >
                {{mail.text}}
                </v-alert>
              </span>
            </v-card-text>
          </v-card>
          <v-card v-else elevation="0" tile flat>
            <v-card-text>
                <v-row justify="center" class="fill-height">
                  <v-col cols="auto">
                    <v-img height="170" width="170" :src="require('../assets/images/mailbox.png')"></v-img>
                  </v-col>
                  <v-col cols="12">
                      <p class="text-center nunito">Please select mail to continue reading</p>
                  </v-col>
                </v-row>
            </v-card-text>
          </v-card>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Mails from '../services/Mails'
export default {
  data () {
    return {
      height: {
        x: window.innerWidth,
        y: window.innerHeight
      },
      selected: '',
      drawer: true,
      items: [],
      mail: {
        text: '',
        createdAt: '',
        name: '',
        surname: '',
        email: ''
      }
    }
  },
  watch: {
    selected (val) {
      console.log(val)
    }
  },
  methods: {
    getMessage (msg) {
      if (msg.seen) {
        this.mail = msg
      } else {
        Mails.doSeen(msg.id).then(res => {
          this.items.find(el => el.id === msg.id).seen = true
          this.mail = msg
        }).catch(err => {
          console.log(err)
          alert(err)
        })
      }
    },
    getMail () {
      Mails.getAll().then(res => {
        this.items = res.reverse()
      }).catch(err => {
        console.log(err)
        alert(err)
      })
    },
    cleanMail () {
      alert('sdasd')
    }
  },
  created () {
    this.getMail()
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
