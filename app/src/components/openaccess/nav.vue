<template>
  <div id="nav" :class="[isLogoWhite ? 'white-t' : 'white ']">
    <div class="margin-0 fb fb-fd-r fb-ai-c fb-jc-sb ">
      <span class="fb fb-fd-r fb-ai-c fb-jc-fs" >
        <Logo>Logo</Logo>
        <router-link to="/quiz">
        <p class="clickable onlyondesktop" :class="[isLogoWhite ? 'white-t' : 'white ']">Quiz</p>
        </router-link>
        <router-link to="/projects">
        <p class="clickable onlyondesktop" :class="[isLogoWhite ? 'white-t' : 'white ']">Projekte</p>
        </router-link>
      </span>
      <router-link to="/contact"><button :class="[isLogoWhite ? 'whitebutton' : 'blackbutton ']" class="sb onlyondesktop">Kontakt aufnehmen</button></router-link>
      <span
        class="material-icons clickable"
        id="hamburger"
        v-if="!isexpanded"
        :class="[isLogoWhite ? 'hamburger-white' : 'hamburger-gradient']"
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
    isLogoWhite() {
      return this.$store.getters.isLogoWhite;
    },
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
#nav {
  position: fixed;
  left: 0;
  
  right: 0;
  padding: 10px;
  z-index: 10000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
}


.slide-menu-enter-active {
  transition: all 0.2s ease-in;
}

.slide-menu-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  transform: translateX(20em);
}


  .onlyondesktop {
    margin-left: 2em;
    margin-right: 1em;
  }

#hamburger {
  display: none;
  font-size: 30px;
}

.hamburger-gradient {
  background: -webkit-linear-gradient(0.13turn, #340a94 0%, #01cfdc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hamburger-white {
  color: white;
}

#menu {
  width: 19em;
  padding: 1em;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.pb {
  width: 100%;
}

#social-icons-menu {
  padding-bottom: 35px;
  padding-top: 5px;
}

#menu-items {
  line-height: 4em;
}

#menu-items .clickable {
  color: black;
  font-size: 20px;
}

.blackbutton{
  color: black;
  border: 2px solid black;
  padding: 8px 14px;
}

.whitebutton{

  padding: 8px 14px;
}

a{
  color: black
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .margin-0 {
    margin: 0px 1em;
    max-width: calc(100% - 2em);
  }
}

@media screen and (max-width: 768px) {
  #nav {
    margin: 0px;
  }
  #nav .margin-0{
    margin: 0px;
    max-width: 100%;
  }

  .onlyondesktop {
    display: none;
  }

  #hamburger {
    display: initial;
  }
}

@media screen and (max-width: 450px) {
}
</style>
