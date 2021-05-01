<template>
  <v-app id="inspire">
    <v-app-bar
      app
      flat
      class="white"
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="seconday darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="gradient-background">
      <v-container class="main-content">
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-hover
            v-slot="{ hover }"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
                :elevation="hover ? 12 : 1"
              >
                <!--  -->
                <div></div>
              </v-sheet>
            </v-hover>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-footer
        dark
        padless
        absolute
        class="primary lighten-2"
      >
        <v-card
          flat
          tile
        >
          <v-card-title>
            <strong class="subheading">Development is fun fun fun fun fuuuun.</strong>

            <v-spacer></v-spacer>

            <v-btn
              v-for="button in socialButtons"
              :key="button"
              :href="button.to"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ button.icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'About Me',
        'Qualifications',
        'Extras',
        'Contact',
      ],
      socialButtons: [
        {
          icon: 'mdi-xing',
          to: 'https://en.wikipedia.org/wiki/XING'
        },
        {
          icon: 'mdi-github',
          to: 'https://github.com/artemisclyde'
        }
      ],
    }),
  }
</script>
<style scoped lang="scss">
.v-footer > .v-card {
  width: 80%;
  margin: 0 auto;
  background-color: inherit;
  border-top: 1px solid white;
}
.gradient-background {
  background: rgb(2,0,36);
  background: linear-gradient(180deg, white 5%, rgb(99, 147, 130) 90%);
}

.main-content {
  min-height: 1000px;
  height: 100%;
}
</style>