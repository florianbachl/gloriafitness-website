<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow">
    <div class="container">
      <router-link to="/" class="clickable">
        <img
          :src="require('@/assets/logo_small.png')"
          alt="logo"
          class="img-fluid"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-item nav-link" to="/#section"
              >Section1</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-item nav-link" to="/#section"
              >Section1</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-item nav-link" to="/#section"
              >Section1</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-item nav-link" to="/#section"
              >Section1</router-link
            >
          </li>
        </ul>
        <div v-if="user">
          <router-link to="/dashboard" class="link-primary p-2 clickable"
            >Dashboard</router-link
          >
          <a class="link-primary p-2 clickable" @click="signout()">Logout</a>
        </div>
        <span v-else
          ><router-link to="/contact"
            ><button type="button" class="btn btn-outline-dark">
              Kontaktieren
            </button></router-link
          ></span
        >
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navComp",
    data() {
      return {};
    },
    created() {},
    components: {},
    computed: {
      isexpanded() {
        return this.$store.getters.isExpanded;
      },
      user() {
        return this.$store.getters.getUser;
      },
    },
    watch: {
      user() {
        console.log(this.user);
      },
    },
    methods: {
      setExpanded(payload) {
        this.$store.dispatch("setExpanded", payload);
      },
      signout() {
        this.$store.dispatch("signOut");
        this.$router.push("/");
      },
    },
  };
</script>

<style scoped>
  .nav-link {
    text-decoration: none;
  }

  .navbar-toggler {
    border: none;
  }
</style>
