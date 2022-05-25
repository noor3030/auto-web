<template>
  <v-footer color="#000" class="pa-16 mt-16">
    <v-col>
      <v-row class="pb-10">
        <h1 class="white--text">{{ $t("appName") }}</h1>
      </v-row>
      <v-row class="pb-16"
        >
        <v-btn class="white--text hover-underline-animation" text> {{ $t("goTo") }} {{ $t("helpCenter") }}</v-btn></v-row
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
        <v-col cols="6">
          <v-row justify="space-between">
            <v-icon color="#fff">mdi-facebook</v-icon>
            <v-icon color="#fff">mdi-twitter</v-icon>
            <v-icon color="#fff">mdi-youtube</v-icon>
            <v-icon color="#fff">mdi-linkedin </v-icon>
            <v-icon color="#fff">mdi-instagram</v-icon>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row justify="end">
             <v-dialog v-model="dialog" fullscreen transition="dialog-top-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" rounded text class="white--text">
          {{ $t("language") }}
          <v-icon medium class="ms-1" color="#fff">mdi-web</v-icon>
        </v-btn>
      </template>
      <v-card>
        <div class="pa-16 text-center">
          <v-btn icon @click="dialog = false" x-large color="#000">
            <v-icon x-large>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-col cols="12">
          <v-row justify="center"> <h1>اختر لغتك</h1></v-row>

          <v-row justify="center">
            <div v-for="(item, index) in items" :key="index">
              <v-btn @click="changeLanguage(item)" text>
                <h1 style="font-size:50px">{{ item.title }}</h1>
              </v-btn>
            </div></v-row
          ></v-col
        >
      </v-card>
    </v-dialog>
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
export default Vue.extend({
   methods: {
    changeLanguage(item: { language: string; rtl: boolean; title: string }) {
      this.$vuetify.rtl = item.rtl;
      this.$vuetify.lang.current = item.language;
      this.dialog=false
    },
  },
  data() {
    return {
      dialog: false,
      items: [
        { language: "ar", rtl: true, title: "العربية" },
        { language: "en", rtl: false, title: "English" },
      ],
    };
  },
});
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
.v-btn__content {
 
  font-family: "Tajawal", sans-serif;
 
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #fff;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>