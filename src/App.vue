<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lora&family=Montserrat+Alternates&family=Montserrat:ital,wght@1,300&family=Nunito+Sans:wght@200&family=Orelega+One&family=Outfit&family=Tajawal:wght@500&display=swap");
</style>
