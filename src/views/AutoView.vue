<template>
  <div>
    <v-container class="nav pa-7" fluid>
      <v-row justify="space-between">
        <v-col cols="5">
          <v-img
            src="../assets/Group 7281.svg"
            width="400"
            class="phone-img"
          ></v-img>
        </v-col>
        <v-col cols="5">
          <v-container class="container1 py-7">
            <v-row justify="center"
              ><v-card color="#276ef1" flat rounded class="mr-2 pa-4">
                <h4 class="white--text">privacy policy</h4> </v-card
              ><v-card color="#276ef1" flat rounded class="mr-2 pa-4">
                <h4 class="white--text">Terms and Conditions</h4>
              </v-card>
              <v-card color="#276ef1" flat rounded class="mr-2 pa-4">
                <h4 class="white--text">Start using the app</h4>
              </v-card>
            </v-row>
          </v-container>
          <v-row justify="center"
            ><h1 class="auto-row white--text">Auto</h1></v-row
          >
          <v-row justify="center">
            <v-btn color="#fff" class="pa-6">Download the app</v-btn></v-row
          >
        </v-col>
      </v-row>
      <v-row>
        <div>
          <v-btn color="#276ef1" dark absolute bottom right fab large>
            <v-icon>mdi-phone</v-icon>
          </v-btn>
        </div></v-row
      >
      <v-row>
        <div class="services-div" style="float: right">
          <h1>Our services</h1>
        </div></v-row
      >
      <v-row class="pl-9" justify="space-between"
        ><v-card elevation="10">
          <v-card-actions class="justify-center">
            <v-img src="../assets/2.svg" width="300"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">24 hours 7 days in the week</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              Auto with you in any time
            </p>
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              We fully support you in the problem you are facing
            </p>
          </v-card-text>
        </v-card>
        <v-card elevation="10">
          <v-card-actions class="justify-center">
            <v-img src="../assets/3.svg" width="300"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">Your life is easier</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              For the first time in Iraq
            </p>
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              Auto services find the solution in a button
            </p>
          </v-card-text>
        </v-card>
        <v-card elevation="10">
          <v-card-actions class="justify-center">
            <v-img src="../assets/1.svg" width="300"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">Be safe</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              Auto is the best choice
            </p>
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
            To solve the problem without fatigue
            </p>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lora&family=Montserrat+Alternates&family=Nunito+Sans:wght@200&family=Orelega+One&family=Outfit&family=Tajawal:wght@500&display=swap");
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
  font-family: "Montserrat Alternates", sans-serif;
  color: #434d5c;
}
.phone-img {
  margin-left: 100px;
  margin-top: 100px;
}
.auto-row {
  margin-top: 100px;
  font-size: 200px;
  font-family: "Montserrat Alternates", sans-serif;
}
.v-btn__content {
  color: grey darken-2;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.services-div {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>