<template>
  <div>
    <v-container class="nav pa-7" fluid>
      <v-row justify="space-between">
        <v-col>
          <div class="container1 py-7 text-center">
            <v-row align="center" justify="space-around">
              <v-btn color="#276ef1" flat class="pa-5 white--text" small>
                {{ $t("privacyPolicy") }} </v-btn
              ><v-btn color="#276ef1" flat class="pa-5 white--text" small>
                {{ $t("termsAndConditions") }}
              </v-btn>
              <v-btn color="#276ef1" flat class="pa-5 white--text" small>
                {{ $t("startUsingTheApp") }}
              </v-btn>
            </v-row>
          </div>
          <v-row justify="center"
            ><h1 class="auto-row white--text">
              {{ $t("appName") }}
            </h1></v-row
          >
          <v-row justify="center">
            <v-btn color="#fff" class="pa-6">{{
              $t("downloadTheApp")
            }}</v-btn></v-row
          >
        </v-col>
        <v-col>
          <v-row justify="end">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="$vuetify.breakpoint.xsOnly"
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
                <v-btn
                  v-else
                  rounded
                  text
                  v-bind="attrs"
                  v-on="on"
                  class="white--text"
                >
                  {{ $t("language") }}
                  <v-icon medium class="ms-1" color="#fff">mdi-web</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title @click="changeLanguage(item)">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
          <v-img
            src="../assets/Group 7281.svg"
            width="400"
            class="phone-img"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <div>
          <v-btn color="#276ef1" dark absolute bottom fab large>
            <v-icon>mdi-phone</v-icon>
          </v-btn>
        </div></v-row
      >
      <v-row>
        <div class="services-div" style="float: right; font-size: 30px">
          <h1>{{ $t("ourServices") }}</h1>
        </div></v-row
      >
      <CardServices />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CardServices from "@/components/CardServices.vue";
export default Vue.extend({
  data() {
    return {
      items: [
        { language: "ar", rtl: true, title: this.$t("arabic") },
        { language: "en", rtl: false, title: this.$t("english") },
      ],
    };
  },
  methods: {
    changeLanguage(item: { language: string; rtl: boolean; title: string }) {
      this.$vuetify.rtl = item.rtl;
      this.$vuetify.lang.current = item.language;
    },
  },
  components: {
    CardServices,
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lora&family=Montserrat+Alternates&family=Montserrat:ital,wght@1,300&family=Nunito+Sans:wght@200&family=Orelega+One&family=Outfit&family=Tajawal:wght@500&display=swap");

.nav {
  background-color: #276ef1;
  height: 720px;
}
.container1 {
  background-color: #fff;
  border-radius: 10px;
}
h4,
h1,
p {
  font-family: "Montserrat";

  color: #434d5c;
}
.phone-img {
  margin-top: 100px;
}
.auto-row {
  margin-top: 100px;
  font-size: 200px;
  font-family: "Montserrat";
}
.v-btn__content {
  color: grey darken-2;
  font-family: "Montserrat";
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20px;
}
.services-div {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>