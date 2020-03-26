<template>
  <div>
      <v-row>
           <v-col cols="12" class="px-0 py-0">
                 <p class="nunito fs_28">External Tasks</p>
           </v-col>
           <v-col cols="12">
             <v-row justify="start" align="start">
                 <v-col v-for="(item, i) in accessList" :key="i" cols="4">
                     <v-card dark color="#081F2E" flat>
                        <v-row justify="start">
                            <v-col class="ml-3" align-self="start" cols="2">
                                <v-icon size="50" color="#68A3E7">{{item.icon}}</v-icon>
                            </v-col>
                            <v-col class="mt-2" cols="8">
                                <v-row>
                                    <v-col cols="12" class="px-0 py-0">
                                        <p>{{item.name}}</p>
                                    </v-col>
                                    <v-col cols="12" class="px-0 py-0">
                                        <span>{{item.description}}</span>
                                    </v-col>
                                    <v-col cols="12" class="px-0 py-0">
                                        <v-row justify="start">
                                            <v-col cols="auto" class="px-0">
                                                <v-btn text tile color="#5695EB" class="text-capitalize">Go to <v-icon right>mdi-arrow-right</v-icon></v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                 </v-col>
             </v-row>
           </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accessList: [
        {
          name: 'Mails',
          path: '',
          icon: 'mdi-email-variant',
          description: 'Go to your mail address inbox'
        },
        {
          name: 'Blog Analysis',
          path: '',
          icon: 'mdi-chart-areaspline',
          description: 'Check your statistics with Google'
        },
        {
          name: 'Task Manager',
          path: '',
          icon: 'mdi-view-list',
          description: 'Create you tasks effeciently'
        }
      ]
    }
  }
}
</script>

<style>

</style>
