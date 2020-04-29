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
                <v-avatar size="120"><v-img src="https://wallpaperaccess.com/full/103209.jpg"></v-img></v-avatar>
              </v-card-title>
              <v-card-subtitle class="text-center my-2 white--text display-2">Hi!</v-card-subtitle>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    outlined
                    dark
                  />

                  <v-text-field
                    id="password"
                    outlined
                    dark
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-4" tile elevation="0" dark class="py-2 px-5" to="/" x-large>Login</v-btn>
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
export default {
  props: {
    source: String
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
  background: url('https://www.pngkey.com/png/full/336-3369684_home-web-design-education-website-background.png');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
