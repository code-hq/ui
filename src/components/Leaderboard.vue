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
        <td class="text-xs-right">{{ props.item.coverage }}</td>
        <td class="text-xs-right">{{ props.item.loc }}</td>
        <td class="text-xs-right">{{ props.item.score }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
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
        { text: 'Score', value: 'score' }
      ],
      entries: [
        {
          value: false,
          name: 'CodeHQ',
          coverage: '46%',
          loc: 8427,
          score: 85.63
        },
        {
          value: false,
          name: 'Foo bar',
          coverage: '46%',
          loc: 8427,
          score: 85.63
        }
      ]
    }
  }
}
</script>
