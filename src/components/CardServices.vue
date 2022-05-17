<template >
  <v-row class="pl-9" justify="space-between">
    <v-col cols="4"
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
    <v-col cols="4">
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
    <v-col cols="4">
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
</template>
<style>
.car-img {
  margin: 75px;
}
</style>