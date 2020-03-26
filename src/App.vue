<template>
  <v-app id="inspire">
    <v-content>
      <v-footer/>
      <v-container>
           <transition name="slide" mode="out-in">
        <router-view></router-view>
          </transition>
        <v-toolbar/>
      </v-container>
    <notifications classes="vue-notification" position="bottom right" group="foo" />
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer/Footer'
import VToolbar from './components/Toolbar/VToolbar'
export default {
  components: {
    VFooter: Footer,
    VToolbar
  },
  props: {
    source: String
  },

  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
<style lang="scss" scoped>
#inspire{
  background-color: #F8F8F8;
}
.slide-enter-active{
animation: slide-in 400ms ease-out forwards;
}
.slide-leave-active{
animation: slide-out 400ms ease-out forwards;
}
@keyframes slide-in {
  from{
    transform: translateY(-30px);
    opacity:0;
  }
  to{
    transform:translateY(0);
    opacity:1;
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0);
    opacity:1;
  }
  to{
    transform:translateY(-30px);
    opacity:0;
  }
}
</style>
