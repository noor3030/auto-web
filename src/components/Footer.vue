<template>
  <v-footer color="#000" class="pa-16 mt-16">
    <v-col>
      <v-row class="pb-10">
        <h1 class="white--text">{{ $t("appName") }}</h1>
      </v-row>
      <v-row class="pb-16"
        ><h3 class="white--text pr-2">{{ $t("goTo") }}</h3>
        <h3 class="white--text">{{ $t("helpCenter") }}</h3></v-row
      >
      <v-row class="pb-16">
        <v-col cols="12" md="3">
          <h2 class="white--text">{{ $t("company") }}</h2>
          <h3 class="white--text">{{ $t("newsroom") }}</h3>
          <h3 class="white--text">{{ $t("investors") }}</h3>
          <h3 class="white--text">{{ $t("blog") }}</h3></v-col
        >
        <v-col cols="12" md="3">
          <h2 class="white--text">{{ $t("products") }}</h2>
          <h3 class="white--text">{{ $t("cars") }}</h3>
          <h3 class="white--text">{{ $t("electrician") }}</h3>
          <h3 class="white--text">{{ $t("peasant") }}</h3>
        </v-col>
        <v-col cols="12" md="3"
          ><h2 class="white--text">{{ $t("autoCommunity") }}</h2></v-col
        >
        <v-col cols="12" md="3"
          ><h2 class="white--text">{{ $t("movingFrom") }}</h2>
          <h3 class="white--text">{{ $t("airports") }}</h3>
          <h3 class="white--text">{{ $t("cities") }}</h3>
        </v-col>
      </v-row>
      <v-row class="pb-16 pt-16" justify="space-between">
        <v-col cols="6" >
          <v-row justify="space-between">
            <v-icon color="#fff">mdi-facebook</v-icon>
            <v-icon color="#fff">mdi-twitter</v-icon>
            <v-icon color="#fff">mdi-youtube</v-icon>
            <v-icon color="#fff">mdi-linkedin </v-icon>
            <v-icon color="#fff" >mdi-instagram</v-icon>
          </v-row>
        </v-col>
        <v-col  cols="6" >
          <v-row justify="end">
           

            <h3 v-if="$vuetify.rtl === true" class="white--text">
              {{ $t("arabic") }}
            </h3> 
            <h3 v-else class="white--text">{{ $t("english") }}</h3>
             <v-icon medium  color="#fff">mdi-web</v-icon>
            <h3 class="px-2 white--text">{{ $t("baghdad") }}</h3>
            <v-icon color="#fff">mdi-map-marker</v-icon>
          </v-row>
        </v-col>
       
      </v-row>
      <v-row>
         <v-col cols="12" md="4">
          <v-img src="../assets/play.png" width="300"></v-img>
        </v-col>
        <v-col> <p class="grey--text">Uber Technologies Inc 2022</p></v-col>
        <v-col>
          <v-row>
            <v-col
              ><p class="grey--text">{{ $t("privacy") }}</p></v-col
            >
            <v-col
              ><p class="grey--text">{{ $t("features") }}</p></v-col
            >
            <v-col
              ><p class="grey--text">{{ $t("theConditions") }}</p></v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style>
h2,
h3,
h1,
p {
  font-family: "Tajawal", sans-serif;
}
p {
  font-size: 20px;
}
</style>