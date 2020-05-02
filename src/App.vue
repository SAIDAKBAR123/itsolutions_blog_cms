<template>
<div>
   <router-view></router-view>
</div>
</template>

<script>

export default {

  props: {
    source: String
  },
  data () {
    return {
      isAllowed: false
    }
  },
  methods: {
    changePos () {
      setTimeout(() => {
        this.isAllowed = true
      }, 200)
    }
  },
  created () {
    this.changePos()
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
