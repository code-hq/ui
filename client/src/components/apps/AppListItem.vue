<template>
  <tr>
    <td>
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="app-icon" class="app-icon mr-2 rounded-circle">
      {{ app.name }}
    </td>
    <td>PHP</td>
    <td>
      <div class="progress">
        <div class="progress-bar progress-lg bg-success" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </td>
    <td><i style="font-size: 0.5rem;" class="fas fa-xs fa-circle text-success mr-2"></i><small class="text-muted">Last commit 10 seconds ago</small> </td>
    <td class="table-action">
      <div class="btn-group" role="group" aria-label="App actions">
        <b-button class="btn-sm" variant="danger" v-on:click="$emit('remove')">Remove</b-button>
      </div>
    </td>
  </tr>
</template>

<script>
  export default {
    props: {
      app: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">

  .progress {
    height: 5px;
    background-color: #464f5b;
  }

  .app-icon {
    height: 30px;
    width: 30px;
  }

</style>
