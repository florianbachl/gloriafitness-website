<template>
  <div id="projects" >
    <div id="project-header" >
      <h1 class="veryfat" data-aos="fade-up" data-aos-duration="1500">Wilkommen im Projekt-Portfolio</h1>
      <h3 data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="300">Hier findest du aktuelle und vergangene Projekte, die ich für meine
Kunden umsetzen durfte</h3>
    </div>
    <span v-if="window.width > 450">
      <div
        v-for="project in projects"
        :key="project.name"
        class="grey1 project"
         data-aos="fade-up"  data-aos-duration="1500" 
        @mouseenter="sethover(project, true)"
        @mouseleave="sethover(project, false)"
      >
        <div id="inner" class="fb fb-fd-r fb-jc-sb fb-ai-c">
          <transition name="expand">
            <div v-if="project.hoverbool" id="expand-text">
              <h2>{{ project.name }}</h2>
              <p>{{ project.text }}</p>
              <a :href="project.link" target="_blank" rel="noopener"
                ><button class="pb button-with-icon">
                  Zur Website
                  <span class="material-icons">arrow_right_alt</span>
                </button></a
              >
            </div>
          </transition>
          <img
            :src="require('@/assets/projects/' + project.img)"
            alt="projectpic"
            width="1920"
            height="1080"
            class="project-img shadow"
            :class="{ active: project.hoverbool }"
          />
        </div>
      </div>
    </span>
    <span v-else>
      <div
        v-for="project in projects"
        data-aos="fade-up"  data-aos-duration="1500" 
        :key="project.name"
        class="grey1 project-mobile"
      >
        <div>
          <img
            :src="require('@/assets/projects/' + project.img)"
            alt="projectpic"
            class="projectimg-mobile"
            width="1920"
            height="1080"
          />
          <div class="expand-text-mobile">
            <h2>{{ project.name }}</h2>
            <p>{{ project.text }}</p>
            <a :href="project.link" target="_blank" rel="noopener"
              ><button class="pb button-with-icon">
                Zur Website
                <span class="material-icons">arrow_right_alt</span>
              </button></a
            >
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      projects: [
        {
          name: "Bachl Nachhilfe",
          text: "Cloudanwendung für gesamte interne Organisation, Social Media",
          hoverbool: false,
          link: "//www.bachl-nachhilfe.at",
          img: "bachlnachhilfe.webp",
        },
        {
          name: "Sea Fun Project",
          text: "Website",
          hoverbool: false,
          link: "//www.seafunproject.com",
          img: "seafunproject.webp",
        },
        {
          name: "The Noize",
          text: "Website, Youtube, Social Media",
          hoverbool: false,
          link: "//www.thenoize.at",
          img: "thenoize.webp",
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("setLogoWhite", false);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {},
  watch: {},
  methods: {
    sethover(project, bool) {
      project.hoverbool = bool;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>
<style scoped>

#projects{
    margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding-left: 20px;
  padding-right: 20px;
}
#project-header {
  padding-top: 13em;
}

#projects h1 {
  margin-bottom: 0.2em;
}

.project-img {
  transition: 1s;
  width: 100%;
  height: 100%;
  z-index: 46;
}

.active {
  transform: scale(0.5) translate(45%, 0%);
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 1s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}

.expand-enter-active {
  transition-delay: 0.4s;
}

.project {
  position: relative;
  margin-top: 130px;
  margin-bottom: 130px;
  width: 100%;
  padding-top: 51.03%;
}

#inner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  top: 0;
}

#expand-text {
  position: absolute;
  width: calc(45% - 80px);
  padding: 40px;
  z-index: 45;
}

#expand-text p {
  margin-top: 20px;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .project, #project-header{
    margin-left: 1em;
    margin-right: 1em;
    max-width: calc( 100% - 2em);
  }
}

@media screen and (max-width: 450px) {
  #project-header {
    padding-top: 8em;
    padding-bottom: 4em;
  }

  .projectimg-mobile{
    width: 100%;
    height: auto;
  }

  .project-mobile{
    margin-bottom: 2em;
  }

  .expand-text-mobile{
    padding: 1em;
    padding-top: 0.2em;
  }
   .expand-text-mobile .pb{
     margin-top: 1em;
   }
}
</style>
