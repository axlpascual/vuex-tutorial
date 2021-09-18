<template>
  <div id="app">
    <nav 
      v-if="hideNav"
      class="navbar navbar-light bg-light"
    >
      <div class="container-fluid">
        <div class="row col g-3 px-3">
          <div 
            class="col"
          >
            <router-link
              to="/home"
              v-text="'Home'"
              class="btn btn-light me-3"
            />
            <router-link
              to="/posts"
              v-text="'Posts'"
              class="btn btn-light me-3"
            />
          </div>
          <div class="col-auto">
            <router-link
              to="/add"
              v-text="'Add Post'"
              class="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
      this.$store.dispatch('fetchPosts');
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    hideNav() {
      return this.$route.name != 'Login';
    }
  },
}
</script>

<style>

</style>
