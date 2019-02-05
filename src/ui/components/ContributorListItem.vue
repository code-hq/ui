<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img :src="contributor.avatar">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>{{ contributor.name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        <v-icon small>mdi-source-commit</v-icon>{{ contributor.commits }} Commits
        <span>
        <v-icon small color="green">add</v-icon>{{ contributor.added }}
        </span>
        <span>
        <v-icon small color="red">remove</v-icon>{{ contributor.removed }}
        </span>
      </v-list-tile-sub-title>
    </v-list-tile-content>

    <v-progress-circular
      :value="contributor.percentage"
      color="blue"
    ></v-progress-circular>
  </v-list-tile>
</template>

<script>
export default {
  name: 'ContributorListItem',
  props: {
    contributor: Object
  },
  computed: {
    dark () {
      return this.$store.state.theme.dark
    }
  }
}
</script>

<style scoped type="scss">
</style>
