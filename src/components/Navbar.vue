<template>
  <v-app-bar color="#fff">
    <v-row>
      <v-btn color="#000" text rounded>
        <v-icon v-if="$vuetify.rtl === true">mdi-chevron-right</v-icon>
        <v-icon v-else>mdi-chevron-left </v-icon>

        {{ $t("startUsingTheApp") }}
      </v-btn>

      <v-btn color="#000" text to="/privacy_policy" rounded>
        {{ $t("privacyPolicy") }}
      </v-btn>
      <v-btn color="#000" text to="/terms" rounded>
        {{ $t("termsAndConditions") }}
      </v-btn></v-row
    >

    <v-spacer></v-spacer>

    <v-dialog v-model="dialog" fullscreen transition="dialog-top-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" rounded text>
          {{ $t("language") }}
          <v-icon medium class="ms-1" color="#000">mdi-web</v-icon>
        </v-btn>
      </template>
      <v-card>
        <div class="pa-16 text-center">
          <v-btn icon @click="dialog = false" x-large color="#000">
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
                <h1 style="font-size: 50px">{{ item.title }}</h1>
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
      this.dialog = false;
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
.v-btn__content {
  font-family: "Tajawal", sans-serif;
}
</style>