<template>
  <div id="home">
    <header>
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
          <div class="col-12 col-md-6 pt-5 p-md-1 p-lg-3">
            <img
              :src="require('@/assets/Bunt_dicker.png')"
              alt="logo"
              id="logo-head-section"
              class="img-fluid" />
            <div class="my-4">
              <h1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h1>
              <p class="lead mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
            <button type="button" class="btn btn-primary btn-lg mt-4">
              Primary
            </button>
          </div>
          <div class="col-12 col-md-6 p-lg-3">
            <img
              :src="require('@/assets/header2.png')"
              alt="headerpic"
              class="img-fluid" />
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div class="col-12 col-md-6 p-lg-5">
            <img
              :src="require('@/assets/headerimg.jpg')"
              alt="headerpic"
              class="img-fluid" />
          </div>
          <div class="col-12 col-md-6 py-4 p-md-5">
            <div class="mb-4">
              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
              <p class="lead mt-4 mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
            <router-link class="link-primary" to="/contact"
              >Jetzt Kontaktieren</router-link
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center mb-md-5">
          <div class="col-12 col-md-6 py-4 p-md-5">
            <div class="mb-4">
              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
              <p class="lead mt-4 mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
            <router-link class="link-primary" to="/contact"
              >Jetzt Kontaktieren</router-link
            >
          </div>
          <div class="col-12 col-md-6 p-lg-5">
            <img
              :src="require('@/assets/headerimg.jpg')"
              alt="headerpic"
              class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section class="bggrey">
      <div class="container">
        <div class="row py-5 text-center">
          <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 p-md-1 p-lg-3 my-4 my-md-5">
            <img
              :src="require('@/assets/Bunt_dicker.png')"
              alt="logo"
              id="logo-head-section"
              class="img-fluid" />
            <div class="my-4">
              <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
              <p class="lead mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-md-1 p-lg-3 my-4 my-md-5">
            <img
              :src="require('@/assets/Bunt_dicker.png')"
              alt="logo"
              id="logo-head-section"
              class="img-fluid" />
            <div class="my-4">
              <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
              <p class="lead mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-md-1 p-lg-3 my-4 my-md-5">
            <img
              :src="require('@/assets/Bunt_dicker.png')"
              alt="logo"
              id="logo-head-section"
              class="img-fluid" />
            <div class="my-4">
              <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
              <p class="lead mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container col col-8-lg">
        <div class="row py-5 text-center">
          <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="py-3 pt-5 px-4 mx-2 my-4 my-md-5 package-item">
              <h2 class="my-5 fw-700">Trainingsplan</h2>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">Lorem ipsum dolor sit amet,</p>
              </div>
              <div class="text-center m-4">
                <router-link to="/contact"
                  ><button type="button" class="btn btn-outline-dark">
                    Kontaktieren
                  </button></router-link
                >
              </div>

              <div class="inner"></div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div
              class="py-3 pt-5 px-4 mx-2 my-4 my-md-5 package-item package-item-recommend">
              <div class="recommended">Empfehlung</div>
              <h2 class="my-5 fw-700">Trainingsplan</h2>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">, consetetur sadipscing elitr</p>
              </div>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div class="text-center m-4">
                <router-link to="/contact"
                  ><button type="button" class="btn btn-dark">
                    Kontaktieren
                  </button></router-link
                >
              </div>

              <div class="inner"></div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="py-3 pt-5 px-4 mx-2 my-4 my-md-5 package-item">
              <h2 class="my-5 fw-700">Trainingsplan</h2>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div
                class="d-flex column justify-content-start align-items-start">
                <span class="material-icons">check_circle</span>
                <p class="px-1">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
              <div class="text-center m-4">
                <router-link to="/contact"
                  ><button type="button" class="btn btn-outline-dark">
                    Kontaktieren
                  </button></router-link
                >
              </div>

              <div class="inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          class="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center mb-md-5">
          <div class="col-12 col-md-8 py-4 p-md-5">
            <div class="mb-4">
              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
              <p class="lead mt-4 mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat empor invidun sdfge, Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat empor invidun
                sdfge. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat empor invidun sdfge
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-lg-5">
            <img
              :src="require('@/assets/aboutme.png')"
              alt="aboutme"
              class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section class="bggrey">
      <div class="container col col-8-lg mb-md-5">
        <div class="row py-5 text-center">
          <h2>FAQ</h2>
        </div>
        <div class="question py-3" v-for="q in questions" :key="q.question">
          <div
            class="d-flex column justify-content-between align-items-center clickable"
            @click="q.showdesc = !q.showdesc">
            <h3>{{ q.title }}</h3>
            <span
              class="material-icons faq-icon"
              :class="{ rotate: q.showdesc }"
              >add</span
            >
          </div>
          <div class="py-4" v-if="q.showdesc">
            <p>
              {{ q.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "landingPage",
    data() {
      return {
        questions: [
          {
            title: "sbsb",
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat empor invidun sdfge, Lorem ipsum dolor sit amet,",
            showdesc: false,
          },
          {
            title: "sbsb",
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat empor invidun sdfge, Lorem ipsum dolor sit amet,",
            showdesc: false,
          },
          {
            title: "sbsb",
            desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat empor invidun sdfge, Lorem ipsum dolor sit amet,",
            showdesc: false,
          },
        ],
      };
    },
    computed: {},
    watch: {},
    methods: {},
  };
</script>
<style scoped>
  #logo-head-section {
    width: 150px;
  }

  .package-item {
    border: 2px solid #353535;
    position: relative;
    height: auto;
    border-radius: 5px;
  }

  .package-item-recommend {
    border: 2px solid #353535;
    background-color: white;
  }
  .inner {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    position: absolute;

    border-radius: 5px;
    bottom: -25px;
    right: -20px;
    z-index: -1;
  }
  .package-item-recommend .inner {
    background-color: #dee6e7;
  }

  .recommended {
    position: absolute;
    background-color: #0f70b7;
    width: 100%;
    padding: 1em;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: white;
    top: 0;
    left: 0;
    border-radius: 2px;
  }

  .faq-icon {
    transition: all 0.2s;
  }

  .rotate {
    transform: rotate(45deg);
  }
</style>
