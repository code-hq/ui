<template>
  <div id="app">
    <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">CodeHQ</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2" to="/">Home</router-link>
        <router-link class="p-2" to="/about">About</router-link>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign out</a>
    </header>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
</style>
