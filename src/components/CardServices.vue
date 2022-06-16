<template >
  <v-col>
    <v-row class="px-5">
      <h1 style="color: #290466">{{ $t("aboutAuto") }}</h1>
    </v-row>
    <v-row class="px-5">
      <v-col cols="12" md="4"
        ><v-card flat>
          <v-card-actions class="justify-center">
            <v-img src="../assets/24.svg" max-width="250"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold; color: #290466">{{ $t("manImg") }}</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #4f4f4f; font-weight: bold">
              {{ $t("autoWithYou") }}
            </p>
            <p style="font-size: 15px; color: #4f4f4f; font-weight: bold">
              {{ $t("weFullySupport") }}
            </p>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-actions class="justify-center">
            <v-img src="../assets/click.svg" max-width="350"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold; color: #290466">{{ $t("carImg") }}</p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #4f4f4f; font-weight: bold">
              {{ $t("firstTime") }}
            </p>
            <p style="font-size: 15px; color: #4f4f4f; font-weight: bold">
              {{ $t("solutionInButton") }}
            </p>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="12" md="4">
        <v-card flat>
          <v-card-actions class="justify-center">
            <v-img src="../assets/safe.svg" max-width="300"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold; color: #290466">
              {{ $t("familyImg") }}
            </p>
          </v-card-title>

          <v-card-text class="text-center">
            <p style="font-size: 15px; color: #4f4f4f; font-weight: bold">
              {{ $t("bestChoice") }}
            </p>
            <p style="font-size: 15px; color: #4f4f4f; font-weight: bold">
              {{ $t("toSolveProblem") }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="px-5">
      <h1 style="color: #290466">{{ $t("ourServices") }}</h1>
    </v-row>
    <v-row class="px-5">
      <v-col cols="12" md="3">
        <v-card flat>
          <v-card-actions class="justify-center">
            <v-img src="../assets/car.svg" max-width="200"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("cars") }}</p>
          </v-card-title></v-card
        >
      </v-col>
      <v-col cols="12" md="3">
        <v-card flat>
          <v-card-actions class="justify-center">
            <v-img src="../assets/house.svg" max-width="200"></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("house") }}</p>
          </v-card-title></v-card
        >
      </v-col>
      <v-col cols="12" md="3">
        <v-card flat>
          <v-card-actions class="justify-center">
            <v-img

              src="../assets/delivery.svg"
              max-width="200"
              height="199"
            ></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("delivery") }}</p>
          </v-card-title></v-card
        >
      </v-col>
       <v-col cols="12" md="3">
        <v-card flat>
          <v-card-actions class="justify-center">
            <v-img
              src="../assets/hat.svg"
              max-width="200"
              height="199"
            ></v-img>
          </v-card-actions>

          <v-card-title class="justify-center">
            <p style="font-weight: bold">{{ $t("hat") }}</p>
          </v-card-title></v-card
        >
      </v-col>
    </v-row>
  </v-col>
</template>
<style>
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