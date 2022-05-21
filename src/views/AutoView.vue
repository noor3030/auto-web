<template>
  <div>
    <v-container class="nav pa-7" fluid>
      <v-col>
        <v-row justify="space-between">
          <v-col sm="12" md="6"
            ><div class="container1 text-center py-7 d-none d-sm-flex px-2">
              <v-row align="center" justify="space-around">
                <v-btn color="#276ef1" flat class="pa-5 white--text" small>
                  <v-icon v-if="$vuetify.rtl === true"
                    >mdi-chevron-right</v-icon
                  >
                  <v-icon v-else>mdi-chevron-left </v-icon>

                  {{ $t("startUsingTheApp") }}
                </v-btn>

                <v-btn color="#276ef1" flat class="pa-5 white--text" small>
                  {{ $t("privacyPolicy") }}
                </v-btn>
                <v-btn color="#276ef1" flat class="pa-5 white--text" small>
                  {{ $t("termsAndConditions") }}
                </v-btn>
              </v-row>
            </div></v-col
          >
          <v-col cols="12" md="6" >
            <v-row justify="end">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                 
                  <v-btn
                   
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
            </v-row></v-col
          >
        </v-row>
        <v-row justify="space-between">
          <v-col cols="12" md="6">
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
          <v-col cols="12" md="5">
            <v-img
            
              src="../assets/Group 7281.svg"
              width="400"
              class="phone-img d-sm-none d-md-flex"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <v-col class="pa-16"
      ><v-row>
        <div>
          <v-btn color="#276ef1" dark fixed fab large>
            <v-icon>mdi-phone</v-icon>
          </v-btn>
        </div></v-row
      >
     </v-col
    >
    <CardServices />
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
  height: 700px;
}
.container1 {
  background-color: #fff;
  border-radius: 10px;
}
h4,
h1,
p {
  font-family: "Tajawal", sans-serif;
  color: #434d5c;
}

.auto-row {
  font-size: 13vw;
  font-family: "Tajawal", sans-serif;
}
.v-btn__content {
  color: grey darken-2;
  font-family: "Tajawal", sans-serif;
  text-transform: capitalize;
  font-size: 20px;
}

</style>