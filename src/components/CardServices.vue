<template >
  <v-col class="cards">
    <v-row class="px-5">
      <h1>{{ $t("aboutAuto") }}</h1>
    </v-row>
    <v-row class="px-5">
      <v-col cols="12" md="4"
        ><v-card elevation="5">
          <v-card-actions class="justify-center">
            <v-img src="../assets/2.svg"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("manImg") }}</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              {{ $t("autoWithYou") }}
            </p>
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              {{ $t("weFullySupport") }}
            </p>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="12" md="4">
        <v-card elevation="5">
          <v-card-actions class="justify-center">
            <v-img src="../assets/3.svg" class="car-img"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("carImg") }}</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              {{ $t("firstTime") }}
            </p>
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              {{ $t("solutionInButton") }}
            </p>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="12" md="4">
        <v-card elevation="5">
          <v-card-actions class="justify-center">
            <v-img src="../assets/1.svg"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("familyImg") }}</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              {{ $t("bestChoice") }}
            </p>
            <p style="font-size: 15px; color: #8691a1; font-weight: bold">
              {{ $t("toSolveProblem") }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="px-5">
      <h1>{{ $t("ourServices") }}</h1>
    </v-row>
    <v-row class="px-5">
      <v-col cols="12" md="4">
        <v-card elevation="5">
          <v-card-actions class="justify-center">
            <v-img src="../assets/car.svg"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("cars") }}</p>
          </v-card-title></v-card
        >
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="5">
          <v-card-actions class="justify-center">
            <v-img src="../assets/Electrician.svg" ></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("electrician") }}</p>
          </v-card-title></v-card
        >
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="5">
          <v-card-actions class="justify-center">
            <v-img src="../assets/peasant.svg"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("peasant") }}</p>
          </v-card-title></v-card
        >
      </v-col>
    </v-row>
  </v-col>
</template>
<style>
.v-card:hover{
 border-width: 2px;
border-style: solid;
border-color: #276ef1;  
}
.car-img {
  margin: 95px;
}
.cards {
  padding-top: 200px;
  padding-bottom: 200px;
}
h1 {
  padding: 20px;
}

@media screen and (min-width: 601px) {
  h1 {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
</style>