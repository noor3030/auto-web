<template>
  <div>
    <Navbar />
    <v-container class="nav pa-7" fluid>
      <v-col>
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
              src="../assets/Request Service.svg"
              width="400"
              class="phone-img d-sm-none d-md-flex"
              style="border-radius: 20px"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <v-col class="pa-16"
      ><v-row>
        <div>
          <v-btn
            color="#222222"
            dark
            fixed
            fab
            large
            class="d-none d-sm-block pt-4"
            :href="phone"
          >
            <v-icon>mdi-phone</v-icon>
          </v-btn>
        </div></v-row
      >
    </v-col>
    <CardServices />
    <v-row>
      <div>
        <v-btn
          color="#222222"
          dark
          large
          fab
          class="mx-6"
          v-if="$vuetify.breakpoint.xsOnly"
        >
          <v-icon>mdi-phone</v-icon>
        </v-btn>
      </div></v-row
    >
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CardServices from "@/components/CardServices.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import links from "../social";
export default Vue.extend({
  data() {
    return {
      phone: links.phoneNumber,
    };
  },
  components: {
    CardServices,
    Footer,
    Navbar,
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lora&family=Montserrat+Alternates&family=Montserrat:ital,wght@1,300&family=Nunito+Sans:wght@200&family=Orelega+One&family=Outfit&family=Tajawal:wght@500&display=swap");

.nav {
  background-color: #222222;
  height: 700px;
}
.container1 {
  background-color: #fff;
  border-radius: 10px;
}
h4,
h1,
p ,h3{
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