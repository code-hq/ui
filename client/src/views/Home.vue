<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-12">
        <b-card
          title="Apps"
          class="mb-2"
        >
          <b-card-sub-title>A list apps ordered by rank.</b-card-sub-title>
          <AppList class="mt-3"/>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>

  import AppList from '@/components/apps/AppList.vue';
import { mapActions } from 'vuex';


export default {
  name: 'home',
  components: {
    AppList,
  },
  beforeCreate() {
    this.$store.dispatch('apps/fetchApps');
  }
};
</script>
