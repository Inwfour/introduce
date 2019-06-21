<template>
  <div>
    <v-toolbar app fixed height="80px" color="#2D2D2D">
      <v-container mx-auto py-1>
        <v-layout>
          <v-img
            :src="require('@/assets/profile.jpg')"
            class="mr-5 round margin_img"
            height="54"
            width="54"
            max-width="54"
            data-aos="fade-right"
          />
          <v-toolbar-title class="margin" data-aos="fade-right">PROFILE</v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="margin_img icons" data-aos="fade-left">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn href="https://github.com/Inwfour" v-on="on" icon fab small dark>
                  <font-awesome-icon
                    class="fa-3x bg_icon"
                    :icon="{ prefix: 'fab', iconName: 'github' }"
                  />
                </v-btn>
              </template>
              <span>Github</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn @click="detailLine" v-on="on" icon color="#00B900" fab small dark>
                  <font-awesome-icon
                    class="fa-2x bg_icon"
                    :icon="{ prefix: 'fab', iconName: 'line' }"
                  />
                </v-btn>
              </template>
              <span>Line</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  href="https://www.facebook.com/narakornsiam"
                  v-on="on"
                  icon
                  color="#4267B2"
                  fab
                  small
                  dark
                >
                  <font-awesome-icon
                    class="fa-2x bg_icon"
                    :icon="{ prefix: 'fab', iconName: 'facebook' }"
                  />
                </v-btn>
              </template>
              <span>Facebook</span>
            </v-tooltip>
          </div>
        </v-layout>
      </v-container>
      <vue-scroll-progress-bar/>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { EventBus } from '@/EventBus'
export default {
  methods: {
    detailLine () {

      this.$swal({title:'ID : fourcomsci', confirmButtonColor: "#DD6B55"});
      // console.log("aa");
      //   EventBus.$emit('DialogLine')
    }
  },
};
</script>
<style scoped>
.round {
  border-radius: 50%;
}
.margin {
  margin-top: 15px;
  margin-left: -30px;
  color: aliceblue !important;
}
.margin_img {
  margin-top: 3px;
}
</style>

