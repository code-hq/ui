<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Language</th>
      <th scope="col">Coverage</th>
      <th scope="col">Activity</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
      <AppListItem v-for="app in apps" v-on:remove="remove(app)" :key="app.name" v-bind:app="app"/>
    </tbody>
  </table>
</template>

<style lang="scss">
  .table td {
    vertical-align: middle!important;
  }
</style>

<script>


  import { mapGetters, mapActions } from 'vuex';
  import AppListItem from '@/components/apps/AppListItem.vue';

  export default {
    components: {
      AppListItem,
    },
    computed: {
      ...mapGetters('apps', [
        'apps',
        'isLoading',
        'isIdle',
        'hasErrored',
      ]),
    },
    methods: {
      ...mapActions('apps', [
        'deleteApp',
      ]),
      remove(app) {
        this.deleteApp(app)
          .then(() => {
           // Add some notification!
          });
      },
    },
  }
</script>
