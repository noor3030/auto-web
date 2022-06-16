<template>
  <v-app-bar >
    <v-row v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg">
      <v-btn color="#222222" text rounded class="hide-element">
        <v-icon v-if="$vuetify.rtl === true">mdi-chevron-right</v-icon>
        <v-icon v-else>mdi-chevron-left </v-icon>

        {{ $t("startUsingTheApp") }}
      </v-btn>

      <v-btn
        color="#222222"
        text
        to="/privacy_policy"
        rounded
        class="hide-element"
      >
        {{ $t("privacyPolicy") }}
      </v-btn>
      <v-btn color="#222222" text to="/terms" rounded class="hide-element">
        {{ $t("termsAndConditions") }}
      </v-btn>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ">
      <v-dialog
        v-model="navDialog"
        fullscreen
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon medium class="ms-1" color="#222222">mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-card color="#eef3fe">
          <div class="pa-16 text-center">
            <v-btn icon @click="navDialog = false" x-large color="#222222">
              <v-icon x-large>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-row align="center" justify="center">
            <v-col align-self="center" cols="12">
              <v-btn color="#222222" text rounded>
                <v-icon v-if="$vuetify.rtl === true" class="d-none d-sm-flex"
                  >mdi-chevron-right</v-icon
                >
                <v-icon v-else class="d-none d-sm-flex"
                  >mdi-chevron-left
                </v-icon>

                {{ $t("startUsingTheApp") }}
              </v-btn>
            </v-col>
            <v-col align-self="center" cols="12">
              <v-btn color="#222222" text to="/privacy_policy" rounded>
                {{ $t("privacyPolicy") }}
              </v-btn></v-col
            >
            <v-col align-self="center" cols="12"
              ><v-btn color="#222222" text to="/terms" rounded>
                {{ $t("termsAndConditions") }}
              </v-btn></v-col
            >
          </v-row>
        </v-card>
      </v-dialog></v-row
    >
    <v-spacer></v-spacer>

    <v-dialog
      v-model="languageDialog"
      fullscreen
      transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" rounded text>
          <span class="d-none d-sm-flex">{{ $t("language") }}</span>
          <v-icon medium class="ms-1" color="#222222">mdi-web</v-icon>
        </v-btn>
      </template>
      <v-card color="#eef3fe"> 
        <div class="pa-16 text-center">
          <v-btn icon @click="languageDialog = false" x-large color="#222222">
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
  </v-app-bar>
</template>
 
<script lang="ts">
import Vue from "vue";
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
      navDialog: false,
      languageDialog: false,
      items: [
        { language: "ar", rtl: true, title: "العربية" },
        { language: "en", rtl: false, title: "English" },
      ],
    };
  },
});
</script>
<style>
.v-btn__content {
  font-family: "Tajawal", sans-serif;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}
</style>