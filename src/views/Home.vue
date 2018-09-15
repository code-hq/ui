<template>
  <div>
    <leaderboard class="mb-3"/>
    <contributor-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import Leaderboard from '@/components/Leaderboard.vue'
import ContributorList from '@/components/ContributorList.vue'

export default {
  name: 'home',
  components: {
    Leaderboard,
    ContributorList
  }
}
</script>
