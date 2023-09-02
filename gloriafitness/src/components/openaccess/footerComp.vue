<template>
  <div id="footer">
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white">
      <!-- Section: Social media -->

      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-white text-md-start pt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-4 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4 text-white">Themen</h6>
              <p>
                <router-link to="/#kinesiologie" class="text-white"
                  >Personal Training</router-link
                >
              </p>
              <p>
                <router-link to="/#cranio" class="text-white"
                  >Trainingsplan</router-link
                >
              </p>
              <p>
                <router-link to="/#behandlung" class="text-white"
                  >Dauerhafte Betreuung</router-link
                >
              </p>
              <p>
                <router-link to="/#about" class="text-white"
                  >Über mich</router-link
                >
              </p>
            </div>
            <!-- Grid column -->

            <div class="col-md-4 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4 text-white">Kontakt</h6>
              <!-- <p>
                <router-link to="/contact" class="text-white"
                  >Kontaktformular</router-link
                >
              </p> -->

              <p class="text-white">
                <i class="fas fa-envelope"></i>
                <a href="mailto:getfit@gloriafitness.at">
                  getfit@gloriafitness.at</a
                >
              </p>
              <p class="text-white">
                <i class="fas fa-phone text-white"></i>
                <a href="tel:+436802188909">+43680 2188909</a>
              </p>
            </div>
            <div class="col-md-4 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4 text-white">Social</h6>

              <span
                class="d-flex flex-row justify-content-center justify-content-md-start">
                <!-- <a
                  href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
                  target="_blank"
                  rel="noopener"
                  ><div
                    class="social-icon bggrey clickable"
                    id="twitter"
                    role="img"
                    aria-label="social-twitter"></div
                ></a> -->
                <a
                  href="https://www.instagram.com/_gloriafitness_/"
                  target="_blank"
                  rel="noopener"
                  ><div
                    class="social-icon bggrey clickable"
                    id="instagram"
                    role="img"
                    aria-label="social-instagram"></div
                ></a>
                <!-- <a
                  href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
                  target="_blank"
                  rel="noopener"
                  ><div
                    class="social-icon bggrey clickable"
                    id="facebook"
                    role="img"
                    aria-label="social-facebook"></div
                ></a>
                <a
                  href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
                  target="_blank"
                  rel="noopener"
                  ><div
                    class="social-icon bggrey clickable"
                    id="linkedin"
                    role="img"
                    aria-label="social-linkedin"></div
                ></a> -->
              </span>
            </div>

            <div class="col-0 col-md-4"></div>

            <!-- Grid column -->
          </div>
          <hr />
          <p>
            <span class="px-3">
              <router-link to="/impressum" class="text-white"
                >Impressum</router-link
              >
            </span>
            <span class="px-3">
              <router-link to="/datenschutz" class="text-white"
                >Datenschutz</router-link
              ></span
            >
          </p>
          <div class="text-left py-4">
            Design und Umsetzung:
            <a href="https://www.florianbachl.at" class="text-white fw-bold"
              >Florian Bachl Software & Webdesign</a
            >
            <p>© 2023 Copyright: Gloria Fitness</p>
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->

      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
  export default {
    name: "footer-comp",
    data() {
      return {};
    },
    components: {},
    computed: {},
    watch: {},
    methods: {},
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
<style scoped>
  #footer {
    background-color: #212529;
  }
  #bottom-cta {
    background: linear-gradient(0.13turn, #01cfdc 0%, #340a94 100%);
    padding: 30px;
    text-align: left;
  }

  #bottom-cta h4 {
    margin: 20px;
    font-size: 2em;
    margin-left: 0px;
  }

  #bottom-cta button {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .bottom-container {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 25%;
  }

  .bottom-container h4 {
    margin-bottom: 20px;
  }

  .bottom-container p {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  #bottom-links {
    padding-bottom: 20px;
  }

  #logo-bottom {
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    height: 100px;
  }

  #logo-text {
  }

  #bottom-legal {
    text-align: center;
    font-size: 0.8em;
  }

  #bottom-spacer {
    width: 100px;
  }

  #legal {
    padding-top: 25px;
    padding-bottom: 30px;
  }

  #smallrocketsvg {
    width: 15em;
    margin-right: 4em;
  }

  a {
    color: white;
  }
</style>
