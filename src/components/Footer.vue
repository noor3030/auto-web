<template>
  <v-footer color="#276ef1">
    <v-row class="pa-3">
      <v-col>
        <h2 class="white--text">{{ $t("appName") }}</h2>
        <br />
        <v-row
          ><h3 class="white--text pr-2">{{ $t("goTo") }}</h3>
          <h3 class="white--text">{{ $t("helpCenter") }}</h3></v-row
        >

        <br /><br />
        <h2 class="white--text">{{ $t("company") }}</h2>
        <div>
          <h3 class="white--text">{{ $t("newsroom") }}</h3>
          <h3 class="white--text">{{ $t("investors") }}</h3>
          <h3 class="white--text">{{ $t("blog") }}</h3>
        </div>
        <v-row justify="left">
          <div class="row2">
            <v-row justify="space-around" class="pa-3">
              <v-icon color="#fff">mdi-facebook</v-icon>
              <v-icon color="#fff">mdi-twitter</v-icon>
              <v-icon color="#fff">mdi-youtube</v-icon>
              <v-icon color="#fff">mdi-linkedin </v-icon>
              <v-icon color="#fff">mdi-instagram</v-icon>
            </v-row>
          </div></v-row
        >
      </v-col>
      <v-col>
        <h2 class="white--text">{{ $t("products") }}</h2>
        <h3 class="white--text">{{ $t("cars") }}</h3>
        <h3 class="white--text">{{ $t("electrician") }}</h3>
        <h3 class="white--text">{{ $t("peasant") }}</h3>
        <v-row class="pb-5">
          <div style="padding-top: 250px">
            <v-row>
              <h3 v-if="$vuetify.rtl === true" class="white--text">
                {{ $t("arabic") }}
              </h3>
              <h3 v-else class="white--text">{{ $t("english") }}</h3>
              <v-icon medium class="ms-1" color="#fff">mdi-web</v-icon>
              <h3 class="pl-6 white--text">{{ $t("baghdad") }}</h3>
              <v-icon color="#fff">mdi-map-marker</v-icon>
            </v-row>
          </div>
        </v-row>
      </v-col>
      <v-col
        ><h2 class="white--text">{{ $t("autoCommunity") }}</h2></v-col
      >
      <v-col
        ><h2 class="white--text">{{ $t("movingFrom") }}</h2>
        <h3 class="white--text">{{ $t("airports") }}</h3>
        <h3 class="white--text">{{ $t("cities") }}</h3>
        <v-img
          src="../assets/play.png"
          width="300"
          style="margin-top: 230px"
        ></v-img>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style>
.row2 {
  padding-top: 100px;
}
.v-icon {
  margin-left: 20px;
}
h2,
h3 {
  font-family: "Tajawal", sans-serif;
}
</style>