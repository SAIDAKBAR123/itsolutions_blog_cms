<template>
  <v-app id="inspire ">
    <v-content class="">
      <v-container
        class="fill-height bck_img"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="3"
          >
            <v-card class="abigel">
            <v-card class="elevation-12" color="transparent">
              <v-card-title class=" justify-center">
                <v-avatar size="120"><v-icon size="120" color="white">mdi-account-circle</v-icon></v-avatar>
              </v-card-title>
              <v-card-subtitle class="text-center my-2 white--text display-2">Hi!</v-card-subtitle>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    outlined
                    v-model="username"
                    dark
                  />

                  <v-text-field
                   v-on:keyup.enter="login"
                    id="password"
                    outlined
                    dark
                     v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue-grey darken-4" tile elevation="0" dark class="py-2 px-5" @click="login" x-large>Login</v-btn>
                 <v-spacer />
              </v-card-actions>
            </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Auth from '../../services/Auth'
export default {
  name: 'Login',
  props: {
    source: String
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      Auth.getToken({
        username: this.username,
        password: this.password
      }).then(res => {
        localStorage.setItem('cmsAdmin', res.token)
        this.$store.commit('setToken', res.token)
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
        if (err.status === 401) { alert('Error in password or username') }
      })
    }
  }
}
</script>
<style scoped>
.abigel{
    width: 30rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.39);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
}
.abigel:before {
    -webkit-filter: blur(7px);
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(100, 100, 100, 0.411);
    filter: blur(20px);
    margin: -20px;
}
.bck_img {
background: rgb(42,42,42);
background: radial-gradient(circle, rgba(42,42,42,1) 0%, rgba(0,109,133,1) 0%, rgba(8,31,46,1) 43%);
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
