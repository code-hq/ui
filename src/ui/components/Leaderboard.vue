<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="entries"
      :search="search"
      :pagination.sync="pagination"
      hide-actions
      must-sort
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs">{{ props.item.coverage }}</td>
        <td class="text-xs">{{ props.item.linesOfCode }}</td>
        <td class="text-xs">{{ props.item.score }}</td>
        <td class="text-xs">
          {{ props.item.movement }}
          <v-icon color="success" v-if="props.item.movement > 0">arrow_drop_up</v-icon>
          <v-icon color="error" v-if="props.item.movement < 0">arrow_drop_down</v-icon>
        </td>

      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>

  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      entries: state => state.applications.leaderboardList
    }),
    created () {
      this.$store.dispatch('applications/getLeaderboardList')
    },
    data () {
      return {
        search: '',
        pagination: {
          sortBy: 'score',
          descending: true
        },
        headers: [
          {
            text: 'Application',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Test Coverage', value: 'coverage' },
          { text: 'Lines of Code', value: 'loc' },
          { text: 'Score', value: 'score' },
          { text: 'Movement', value: 'movement' }
        ],
      }
    }
}
</script>
