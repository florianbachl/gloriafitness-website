<template>
  <div id="nav">
    <div class="margin-0 fb fb-fd-r fb-ai-c fb-jc-sb ">
      <span class="fb fb-fd-r fb-ai-c fb-jc-fs" >
        <Logo>Logo</Logo>
        <router-link to="#quiz">
        <p class="clickable onlyondesktop">Quiz</p>
        </router-link>
        <router-link to="#projects">
        <p class="clickable onlyondesktop">Projekte</p>
        </router-link>
      </span>
      <router-link to="/contact"><button class="sb onlyondesktop">Kontakt aufnehmen</button></router-link>
      <span
        class="material-icons clickable"
        id="hamburger"
        v-if="!isexpanded"
        @click="setExpanded(true)"
        >drag_handle</span
      >
    </div>
    <transition name="slide-menu">
    <div v-if="isexpanded" id="menu" class="grey1 fb fb-fd-c fb-ai-s fb-jc-sb">
      <div class="fb fb-fd-r fb-ai-c fb-jc-sb">
       

        <router-link to="/login">
        <p class="hamburger-gradient">Login</p></router-link> 
        <span class="material-icons clickable" @click="setExpanded(false)"
          >close</span
        >
      </div>
      <div id="menu-items">
       <router-link to="/quiz"><p class="clickable">Quiz</p></router-link>
        <router-link to="/projects"><p class="clickable">Projekte</p></router-link>
        <router-link to="/contact"><p class="clickable">Kontakt</p></router-link>
      </div>
      <div>
         <router-link to="/contact"><button class="pb">Kontakt aufnehmen</button></router-link>
        <span class="fb fb-fd-r fb-jc-fs fb-ai-c" id="social-icons-menu">
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="twitter"></div
          ></a>
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="instagram"></div
          ></a>
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="facebook"></div
          ></a>
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="linkedin"></div
          ></a>
        </span>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import Logo from "../svgs/logo.vue";
export default {
  name: "nav",
  data() {
    return {};
  },
  components: { Logo },
  computed: {
    isexpanded() {
      return this.$store.getters.isExpanded;
    },
  },
  watch: {},
  methods: {
    setExpanded(payload) {
      this.$store.dispatch("setExpanded", payload);
    },
  },
};
</script>
<style scoped>
</style>
