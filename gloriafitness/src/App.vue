<template>
  <span>
    <Nav></Nav>
    <router-view @click="setExpanded" />
    <Footer></Footer>
    <Cookieconsent></Cookieconsent>
  </span>
</template>

<script>
import Footer from "./components/openaccess/footer";
import Nav from "./components/openaccess/nav";
import Cookieconsent from "./components/cookies/cookieconsent";
export default {
  name: "App",
  components: {
    Footer,
    Nav,
    Cookieconsent,
  },
  created() {
    console.log("I do");
  },
  watch: {
    $route() {
      this.setExpanded();
    },
  },
  methods: {
    setExpanded() {
      this.$store.dispatch("setExpanded", false);
    },
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-display: swap;
}

section {
  padding: 3em 0;
}

header {
  padding: 7em 0;
}

.bggrey{
  background-color: #F8F8F8;
}

.clickable{
  cursor: pointer;
}

.link-primary {
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #0f70b7 !important;
  text-transform: uppercase;
}
@media only screen and (max-width: 767px) {
  section {
    padding: 2em 0em;
  }

  header {
    padding: 2em 0;
  }
}

.btn{
  z-index: 1000;
}

.btn-primary {
  background-color: #0f70b7 !important;
}

.fw-700{
  font-weight: 700;
}

.btn-outline-dark{
  border-color: #29303F !important;
  color: #29303F !important;
}

.btn-outline-dark:hover{
  background-color: #29303F !important;
  color: white !important;

}

.btn-dark{
  background-color: #29303F !important;
  color: white !important;
}
</style>
