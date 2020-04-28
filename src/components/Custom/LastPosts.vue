<template>
  <div>
    <v-row>
        <v-col cols="12" class="px-0 py-0">
            <p class="nunito fs_28">Quick Overview</p>
        </v-col>
    </v-row>
    <v-row justify="start" align="start">
         <v-col cols="6">
             <v-card flat class="pa-4">
                <v-simple-table>
                    <template v-slot:default>
                    <thead class="header_design">
                        <tr>
                        <th class="text-left">Title</th>
                        <th class="text-left">Author</th>
                        <th class="text-left">Date Added</th>
                        <th class="text-left">View</th>
                        <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,i) in desserts" :key="i">
                        <td class="nunito-default">{{ item.name.length > 40 ?item.name.substring(0,40)+'...' : item.name}}</td>
                        <td>{{ item.author }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.readers }}</td>
                        <td><v-btn outlined small color="primary">edit</v-btn></td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
             </v-card>
         </v-col>
         <v-col cols="6">
             <v-card flat>
                 <v-card-title>Monthly visitors</v-card-title>
                  <v-sparkline
                    :value="value"
                    :labels="labels"
                    auto-draw-easing='ease'
                    color="#68A3E7"
                    height="100"
                    padding="24"
                    radius="3"
                    line-width="3"
                    stroke-linecap=""
                    auto-draw
                    smooth
                    >
                    <template v-slot:label="item">
                    {{ item.value }}
                    </template>
                  </v-sparkline>
             </v-card>
         </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      value: [34, 23, 555, 21, 78, 43, 23, 234, 231, 655, 32, 12],
      desserts: [
        {
          name: 'How google is working ?',
          author: 'Saidakbar',
          date: '2 Jan, 2020',
          readers: '2 012'
        },
        {
          name: 'Css management in 2 day with Vuetify component base framework',
          author: 'Azamat',
          date: '22 Apr, 2020',
          readers: '21 673'
        },
        {
          name: 'Css management in 2 day with Vuetify component base framework',
          author: 'Azamat',
          date: '22 Apr, 2020',
          readers: '21 673'
        },
        {
          name: 'Css management in 2 day with Vuetify component base framework',
          author: 'Azamat',
          date: '22 Apr, 2020',
          readers: '21 673'
        },
        {
          name: 'Css management in 2 day with Vuetify component base framework',
          author: 'Azamat',
          date: '22 Apr, 2020',
          readers: '21 673'
        },
        {
          name: 'Css management in 2 day with Vuetify component base framework',
          author: 'Azamat',
          date: '22 Apr, 2020',
          readers: '21 673'
        }
      ]
    }
  }
}
</script>

<style>
.header_design {
    color: red;
    background-color: #F8F8F8;
}
</style>
