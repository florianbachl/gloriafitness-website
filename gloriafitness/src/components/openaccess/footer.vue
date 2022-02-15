<template>
  <div id="footer">
    <div id="bottom-links" class="darkblue">
      <div
        class="fb fb-fd-r fb-ai-fs fb-jc-sb margin-0 white-t"
        id="bottom-display"
      >
        <div class="bottom-container">
          <h4><span class="fat">Sitemap</span></h4>
          <router-link to="/"><p class="clickable">Startseite</p></router-link >
          <router-link to="/quiz"><p class="clickable">Quiz</p></router-link >
          <router-link to="/projects"><p class="clickable">Projekte</p></router-link >
          <router-link to="/contact"><p class="clickable">Kontakt</p></router-link >
        </div>
        <div class="bottom-container">
          <h4><span class="fat">Rechtliches</span></h4>
          <router-link to="/legal"><p class="clickable">Impressum</p></router-link >
          <router-link to="/dataprotection"
            ><p class="clickable">Datenschutzerklärung</p></router-link 
          >
        </div>
        <div class="bottom-container">
          <h4><span class="fat">Kontakt</span></h4>
          <span class="fb fb-fd-r fb-ai-c fb-jc-fs">
            <span class="material-icons material-icons-small">email</span>
            <a href="mailto:hello@florianbachl.at"
              ><p>hello@florianbachl.at</p></a
            >
          </span>
          <span class="fb fb-fd-r fb-ai-c fb-jc-fs">
            <span class="material-icons material-icons-small">phone</span>
            <p>+43-650-677-9393</p>
          </span>
        </div>

        <div class="bottom-container">
          <div id="logo-text">
            <h3>Florian Bachl, B.Sc.</h3>
            <p>Software & Webdesign</p>
          </div>
          <span class="fb fb-fd-r fb-jc-fs fb-ai-c">
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              rel="noopener"
              ><div class="social-icon grey1 clickable" id="twitter" role="img" aria-label="social-twitter"></div
            ></a>
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              rel="noopener"
              ><div class="social-icon grey1 clickable" id="instagram" role="img" aria-label="social-instagram"></div
            ></a>
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              rel="noopener"
              ><div class="social-icon grey1 clickable" id="facebook" role="img" aria-label="social-facebook"></div
            ></a>
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              rel="noopener"
              ><div class="social-icon grey1 clickable" id="linkedin" role="img" aria-label="social-linkedin"></div
            ></a>
          </span>
        </div>
      </div>
      <div id="bottom-legal" class="white-t">
        <p>
          © 2021 <span class="fat">Florian Bachl</span> Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style scoped>
</style>