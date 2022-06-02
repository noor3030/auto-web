<template>
  <v-footer color="#000" class="mt-16">
    <v-col class="footer">
      <v-row class="pb-10">
        <h1 class="white--text pa-0 app-name">{{ $t("appName") }}</h1>
      </v-row>
      <v-row class="pb-16">
        <v-btn class="white--text hover-underline-animation pa-0" text>
          {{ $t("goTo") }} {{ $t("helpCenter") }}</v-btn
        ></v-row
      >
      <FooterInfo />
      <v-row class="pb-16 pt-16" justify="space-between">
        <v-col cols="12" md="4">
          <v-row justify="space-between" class="pa-0">
            <v-btn icon><v-icon color="#fff">mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon color="#fff">mdi-twitter</v-icon></v-btn>
            <v-btn icon><v-icon color="#fff">mdi-youtube</v-icon></v-btn>
            <v-btn icon><v-icon color="#fff">mdi-linkedin </v-icon></v-btn>
            <v-btn icon><v-icon color="#fff">mdi-instagram</v-icon></v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="lang-col">
          <v-row justify="center">
            <v-dialog
              v-model="languageDialog"
              fullscreen
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  rounded
                  text
                  class="white--text"
                >
                  {{ $t("language") }}
                  <v-icon medium class="ms-1" color="#fff">mdi-web</v-icon>
                </v-btn>
              </template>
              <v-card color="#eef3fe">
                <div class="pa-16 text-center">
                  <v-btn
                    icon
                    @click="languageDialog = false"
                    x-large
                    color="#000"
                  >
                    <v-icon x-large>mdi-close</v-icon>
                  </v-btn>
                </div>
                <v-col cols="12">
                  <v-row justify="center">
                    <h1>{{ $t("chooseYourLanguage") }}</h1></v-row
                  >

                  <v-row justify="center">
                    <div v-for="(item, index) in items" :key="index">
                      <v-btn @click="changeLanguage(item)" text>
                        <h1>{{ item.title }}</h1>
                      </v-btn>
                    </div></v-row
                  ></v-col
                >
              </v-card>
            </v-dialog>
            <v-btn text class="px-2 white--text" link rounded
              ><a
                href="https://www.google.com/maps/dir//33.301838,44.388885/@33.3026091,44.4604722,12z"
                class="white--text"
                >{{ $t("baghdad") }}
                <v-icon color="#fff">mdi-map-marker</v-icon></a
              >
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-row v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.xl || $vuetify.breakpoint.lg">
            <v-btn text flat
              ><v-img src="../assets/play.svg" max-width="250"></v-img
            ></v-btn>
            <v-btn text flat>
              <v-img src="../assets/store.svg" max-width="200"></v-img>
            </v-btn>
            ></v-row
          >
          <v-row
            v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
            justify="center"
            class="pt-8"
          >
            <v-btn icon flat class="mx-5"
              ><v-img src="../assets/play-logo.svg" max-width="50"></v-img
            ></v-btn>
            <v-btn icon flat>
              <v-img src="../assets/apple-logo.svg" max-width="50"></v-img>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="3"> <p class="grey--text">Auto Technologies Inc 2022</p></v-col>
        <v-col cols="12" md="3"
          ><v-btn text to="/privacy_policy">
            <p class="grey--text">{{ $t("privacyPolicy") }}</p>
          </v-btn></v-col
        >
        <v-col cols="12" md="3"
          ><v-btn text to="/terms">
            <p class="grey--text">{{ $t("termsAndConditions") }}</p>
          </v-btn></v-col
        >
        <v-col cols="12" md="3"
          ><v-btn text>
            <p class="grey--text">{{ $t("startUsingTheApp") }}</p>
          </v-btn></v-col
        >
      </v-row>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import FooterInfo from "@/components/FooterInfo.vue";
export default Vue.extend({
  methods: {
    changeLanguage(item: { language: string; rtl: boolean; title: string }) {
      this.$vuetify.rtl = item.rtl;
      this.$vuetify.lang.current = item.language;
      this.languageDialog = false;
    },
  },
  data() {
    return {
      languageDialog: false,
      items: [
        { language: "ar", rtl: true, title: "العربية" },
        { language: "en", rtl: false, title: "English" },
      ],
    };
  },
  components: {
    FooterInfo,
  },
});
</script>
<style>
h2,
v-btn,
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
  content: "";
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
a:link {
  text-decoration: none;
}
@media screen and (max-width: 600px) {
  .lang-col {
    padding-top: 50px;
  }
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 600px) {
  .app-name {
    font-size: 50px;
  }
}
</style>