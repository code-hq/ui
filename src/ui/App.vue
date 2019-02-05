<template>
  <v-app id="app" :dark="$vuetify.dark">
    <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      stateless
      app
      clipped
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar color="primary" dark app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CodeHQ</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-menu
        v-model="menu"
        right
        offset-y
        :close-on-content-click="false"
      >
        <v-btn slot="activator" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-card :light="!$vuetify.dark">
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
                <v-list-tile-sub-title>Senior Engineer</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list>

          <v-divider/>

          <v-list>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>apps</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>My applications</v-list-tile-title>
            </v-list-tile>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Sign out</v-list-tile-title>
            </v-list-tile>

            <v-divider/>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>brightness_4</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Dark theme</v-list-tile-title>
              <v-list-tile-action class="ml-5">
                <v-switch v-model="$vuetify.dark"></v-switch>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<style lang="scss">
  #app {
    .v-list, .v-list__tile, .v-list__tile__title, .v-btn__content, .v-icon, .v-card {
      transition: color 0ms;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      menu: false,
      mini: false,
      drawer: true,
      items: [
        {
          title: 'Leaderboards',
          icon: 'mdi-format-list-numbers'
        },
        {
          title: 'People',
          icon: 'people'
        }
      ]
    }
  }
}
</script>
