<template>
  <div>
      <v-container fluid class="px-0">
        <v-row justify="center" align="center">
          <v-col cols="12" md="auto">
            <v-btn color="primary" large>Add Project</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="2">
              <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Post date"
                      prepend-icon="mdi-calendar-range"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col md="7" cols="8" align-self="center">
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
        </v-row>
        <v-row>
          <v-col md="3" cols="12" v-for="(item,i) in items" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card class="px-0" :elevation="hover ? 12: 0" outlined>
                  <v-card-title class="py-0 px-1">
                      <v-checkbox
                      ></v-checkbox>
                      <v-spacer></v-spacer>
                      <v-btn color="#081F2E" fab text small><v-icon>mdi-pen</v-icon></v-btn>
                      <v-btn color="red lighten-1" fab text small><v-icon>mdi-delete</v-icon></v-btn>
                  </v-card-title>
                    <v-img
                     class="white--text align-end"
                    :src="item.image"
                    height="200px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                  >
                  <v-card-title v-text="item.title"></v-card-title>
                  </v-img>
                     <v-row justify-md="">
                        <v-col cols="auto">
                          <v-btn large text block tile :ripple="false"><v-icon left>mdi-eye</v-icon>{{item.view}}</v-btn>
                        </v-col>
                          <v-col cols="auto" class="px-0">
                         <v-btn large text block tile :ripple="false"><v-icon left>mdi-comment-text-outline</v-icon>{{item.view}}</v-btn>
                        </v-col>
                          <v-col cols="auto">
                         <v-btn large text>Statistics</v-btn>
                        </v-col>
                     </v-row>
              </v-card>
              </v-hover>
          </v-col>
        </v-row>
        <v-row justify="center" justify-md="end">
          <v-col cols="auto" >
             <div class="text-center">
              <v-pagination
                v-model="page"
                :length="4"
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
export default {

  data () {
    return {
      items: [
        {
          title: 'Дизайн сервиса нейросемантики',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190802090855/1564736935_Xi.jpg',
          view: '2 321'
        },
        {
          title: 'Интернет-магазин по продаже готовых проектов домов',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
          view: '2 321'
        },
        {
          title: 'Создание сайта и стиля для агенства недвижимости UK Property Advisors Ltd',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311084405/1552293845_qY.jpg',
          view: '543'
        },
        {
          title: 'Промо-сайт Heron Lite',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190606160356/1559837036_oh.jpg',
          view: '543'
        },
        {
          title: 'Промо-сайт для стартапа дактилоскопических датчиков RFA из Италии',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311083250/1552293170_gG.jpg',
          view: '3 432'
        },
        {
          title: 'Интернет-магазин по продаже готовых проектов домов',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
          view: '2 321'
        },
        {
          title: 'Создание сайта и стиля для агенства недвижимости UK Property Advisors Ltd',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311084405/1552293845_qY.jpg',
          view: '543'
        },
        {
          title: 'Промо-сайт Heron Lite',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190606160356/1559837036_oh.jpg',
          view: '543'
        },
        {
          title: 'Промо-сайт для стартапа дактилоскопических датчиков RFA из Италии',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311083250/1552293170_gG.jpg',
          view: '3 432'
        },
        {
          title: 'Интернет-магазин по продаже готовых проектов домов',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
          view: '2 321'
        },
        {
          title: 'Создание сайта и стиля для агенства недвижимости UK Property Advisors Ltd',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190311084405/1552293845_qY.jpg',
          view: '543'
        },
        {
          title: 'Промо-сайт Heron Lite',
          image: 'https://reconcept.ru/uploads/images/Portfolio/190606160356/1559837036_oh.jpg',
          view: '543'
        }
      ]
    }
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
