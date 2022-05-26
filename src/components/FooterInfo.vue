<template>
        <v-row class="pb-16">
        <v-col cols="12" md="3">
          <h2 class="white--text pb-5">{{ $t("company") }}</h2>
          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("newsroom") }}</span></v-btn
          ><br />
          <br />
          <v-btn text class="white--text no-background-hover pa-0" x-small>
            <span id="hover-span">{{ $t("investors") }}</span></v-btn
          >
          <br />
          <br />
          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("blog") }}</span></v-btn
          >
        </v-col>
        <v-col cols="12" md="3">
          <h2 class="white--text pb-5">{{ $t("products") }}</h2>

          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("cars") }}</span></v-btn
          >
          <br />
          <br />

          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("electrician") }}</span></v-btn
          >
          <br />
          <br />
          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("peasant") }}</span></v-btn
          >
        </v-col>
        <v-col cols="12" md="3"
          ><h2 class="white--text pb-5">{{ $t("autoCommunity") }}</h2>

          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("safety") }}</span></v-btn
          >
          <br />
          <br />

          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("diversity") }}</span></v-btn
          >
        </v-col>
        <v-col cols="12" md="3"
          ><h2 class="white--text pb-5">{{ $t("movingFrom") }}</h2>

          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("airports") }}</span></v-btn
          >
          <br />
          <br />

          <v-btn text class="white--text no-background-hover pa-0" x-small
            ><span id="hover-span">{{ $t("cities") }}</span></v-btn
          >
        </v-col>
      </v-row>
</template>
<style>
.no-background-hover::before {
  background-color: transparent !important;
}
#hover-span:hover {
  color: gray;
}


.footer {
  padding: 100px;
}
@media screen and (max-width: 600px) {
  .footer {
    padding: 10px;
  }
}
</style>