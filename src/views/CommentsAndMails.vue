<template>
  <div>
    <v-container fluid class="fill-height">
      <v-row no-gutters>
        <v-col class="px-0" cols="3">
          <v-navigation-drawer width="400" v-model="drawer" absolute>
            <v-row justify="space-between">
                <v-col cols="auto">
                  <v-btn active-class="primary" :ripple="false" text>All</v-btn>
                </v-col>
                <v-col cols="auto" class="px-0">
                  <v-btn @click="getUnread" text :ripple="false">Unread</v-btn>
                </v-col>
                   <v-col cols="auto" class="px-0">
                  <v-btn text :ripple="false">Mails</v-btn>
                </v-col>
                 <v-col cols="auto" >
                  <v-btn text :ripple="false">Comments</v-btn>
                </v-col>
            </v-row>
            <v-list two-line>
              <v-list-item-group v-model="selected" active-class="blue--text">
                  <v-skeleton-loader
        ref="skeleton"
        :boilerplate="false"
        type="list-item-avatar-three-line"
        class="mx-auto"
      ></v-skeleton-loader>
                <v-card tile v-for="(item, index) in items" :key="index">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        ></v-list-item-subtitle>
                        <v-list-item-subtitle
                          v-text="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text
                          v-text="item.action"
                        ></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">
                          mdi-comment
                        </v-icon>

                        <v-icon v-else color="blue">
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
          <v-card outlined>
              <!-- <v-img aspect-ratio="2.0" max-width="70%" src="https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg"></v-img> -->
            <v-card-title class="nunito">
              <v-row>
              <v-col cols="auto">
                  <v-icon>mdi-clock-outline</v-icon><span class="nunito align-center pt-2"> <small> 22 Jan, 2020 14:00</small></span><br>
                  <span class=""><strong>To</strong>: me</span><br>
                  <span class=" pb-0"><strong>From</strong>: aligor@gmail.com</span><br>
                  <span class="pb-0"><strong>Name</strong>: Ali Connors</span><br>
                  <h1 class="nunito"><strong>Title:</strong> asdasdas sdasdas asd asda asfddbfdgnbfgefvsdfvsd  afvsdsg  sdfgv sd</h1>
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
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

                  Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </v-alert>
              </span>
            </v-card-text>
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
      drawer: true,
      items: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '4 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '4 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '4 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '4 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '4 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        }
      ],
      unread: [
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '4 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        }
      ]
    }
  },
  methods: {
    getUnread () {
      this.items = this.unread
    }
  }
}
</script>

<style></style>
