<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="text-xs-center">Contributors</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list subheader>
        <v-subheader>Technical Lead</v-subheader>
        <v-list-tile
          v-for="lead in leads"
          :key="lead.name"
          avatar
        >
          <v-list-tile-avatar>
            <img :src="lead.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="lead.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list subheader>
        <v-subheader>Top Contributors</v-subheader>
        <contributor-list-item v-for="contributor in contributors" :contributor="contributor" :key="contributor.name" />
      </v-list>

      <v-divider></v-divider>
    </v-card>
  </v-flex>
</template>

<script>
import ContributorListItem from './ContributorListItem'
export default {
  name: 'ContributorList',
  components: { ContributorListItem },
  data: function () {
    return {
      contributors: [
        {
          active: true,
          name: 'Jason Oner',
          avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
          commits: 153,
          added: 1431,
          removed: 321,
          percentage: 61
        },
        {
          active: true,
          name: 'Ranee Carlson',
          avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
          commits: 62,
          added: 355,
          removed: 18,
          percentage: 25
        },
        {
          name: 'Cindy Baker',
          avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
          commits: 19,
          added: 288,
          removed: 121,
          percentage: 11
        },
        {
          name: 'Ali Connors',
          avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
          commits: 2,
          added: 46,
          removed: 0,
          percentage: 3
        }
      ],
      leads: [
        { name: 'Travis Howard', avatar: 'https://randomuser.me/api/portraits/men/80.jpg' }
      ]
    }
  }
}
</script>

<style scoped type="scss">

</style>
