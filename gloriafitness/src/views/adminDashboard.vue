<template>
  <div id="dashboard" v-if="!loading">
    <div class="alert alert-danger" v-if="failure" role="alert">
      Etwas ist schiefgelaufen!
    </div>
    <div v-if="success" class="alert alert-success" role="alert">
      Erfolgreich gespeichert!
    </div>
    <section class="m-0 p-0 pt-2">
      <div class="container col col-8-lg">
        <div class="col-4">
          <div class="row">
            <button class="btn btn-primary mt-4 col" @click="setAPIData()">
              Alle Speichern
            </button>
            <router-link class="col" to="/"
              ><button class="btn btn-secondary mt-4">Verwerfen</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container col col-8-lg mb-md-5">
        <div class="row py-5">
          <h2>Pakete</h2>
        </div>
        <form>
          <div class="row">
            <div class="col-12 col-md-4 p-md-1">
              <h3>Paket 1</h3>
              <div class="form-group">
                <label for="namepackage1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="namepackage1"
                  v-model="packages.package1.name"
                  placeholder="z.B.: Trainingsplan" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section>
      <div class="container col col-8-lg mb-md-5">
        <div class="row py-5">
          <h2>Über mich</h2>
        </div>
        <form>
          <div class="row">
            <div class="form-group">
              <label for="aboutmeheadline">Überschrift</label>
              <input
                type="text"
                class="form-control"
                id="aboutmeheadline"
                v-model="aboutme.headline"
                placeholder="z.B.: Hi, ich bin Gloria" />
            </div>
            <div class="form-group mt-4">
              <label for="aboutmeheadline2">Unterüberschrift</label>
              <input
                type="text"
                class="form-control"
                id="aboutmeheadline2"
                v-model="aboutme.headline2"
                placeholder="z.B.: Ich liebe Fitness!" />
            </div>
            <div class="form-group mt-4">
              <label for="aboutmeparagraph">Paragraph</label>
              <textarea
                class="form-control"
                id="aboutmeparagraph"
                v-model="aboutme.paragraph"
                rows="3"
                placeholder="z.B.: Ich bin deine Fitnesstrainerin, weil"></textarea>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section>
      <div class="container col col-8-lg mb-md-5">
        <div class="row py-5">
          <h2>FAQ</h2>
        </div>
        <form>
          <div class="row" v-for="f in faq" :key="f.title">
            <div class="form-group">
              <label for="aboutmeheadline">Frage</label>
              <input
                type="text"
                class="form-control"
                id="aboutmeheadline"
                v-model="faq.questions.title"
                placeholder="z.B.: Bin ich bei dir richtig, wenn ich Crossfit machen möchte?" />
            </div>
            <div class="form-group mt-4">
              <label for="aboutmeparagraph">Antwort</label>
              <textarea
                class="form-control"
                id="aboutmeparagraph"
                v-model="faq.questions.desc"
                rows="3"
                placeholder="z.B.: Nein, weil..."></textarea>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "adminDashboard",
    data() {
      return {
        loading: true,
        packages: {},
        aboutme: {},
        faq: {},
        success: false,
        failure: false,
      };
    },
    created() {
      this.getAPIData();
    },
    methods: {
      async setAPIData() {
        await Promise.all([
          this.$store.dispatch("createEntry", {
            collection: "landingpage",
            object: { id: "packages", ...this.packages },
          }),
          this.$store.dispatch("createEntry", {
            collection: "landingpage",
            object: { id: "aboutme", ...this.aboutme },
          }),
          this.$store.dispatch("createEntry", {
            collection: "landingpage",
            object: { id: "faq", ...this.faq },
          }),
        ])
          .then(() => (this.success = true))
          .catch((error) => {
            console.log(error);
            this.failure = true;
          });
      },

      async getAPIData() {
        await this.$store
          .dispatch("retrieveEntry", {
            collection: "landingpage",
            id: "packages",
          })
          .then((response) => {
            console.log(response);

            this.packages = response;
          });
        await this.$store
          .dispatch("retrieveEntry", {
            collection: "landingpage",
            id: "aboutme",
          })
          .then((response) => {
            console.log(response);

            this.aboutme = response;
          });
        await this.$store
          .dispatch("retrieveEntry", {
            collection: "landingpage",
            id: "faq",
          })
          .then((response) => {
            console.log(response);

            this.faq = response;
          });
        this.loading = false;
      },
    },
  };
</script>
<style scoped></style>
