<template>
  <div id="quiz" :class="{ finished: finish }">
    <Particles
      v-if="!finish"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <div id="foreground">
      <div id="content" class="fb fb-fd-c fb-jc-c">
        <div
          class="fb fb-fd-r fb-ai-c fb-jc-sb"
          id="question-mobile"
          v-if="!introslide && !lastslide && !finish"
        >
          <div class="width-50">
            <transition name="bounce">
              <div v-if="!istransitioning">
                <span id="question-indicator">
                  Frage 0{{ questionsindex + 1 }} / 0{{ questions.length }}
                </span>
                <h2 class="fat">{{ questions[questionsindex].question }}</h2>
                <div id="quiz-buttons">
                  <span
                    v-if="questions[questionsindex].input"
                    class="fb fb-fd-r fb-jc-c fb-ai-fs"
                  >
                    <input
                      type="number"
                      @input="checkvalidity()"
                      class=""
                      v-model="questions[questionsindex].text"
                    /><span id="currency">€</span>
                  </span>
                  <div
                    class="vertical-line"
                    v-if="questions[questionsindex].input"
                  ></div>
                  <div v-if="questions[questionsindex].textarea" class="area">
                    <textarea
                      id="scrollbar"
                      @input="checkvalidity()"
                      v-model="questions[questionsindex].text"
                    />
                  </div>

                  <div
                    v-if="
                      questions[questionsindex].input ||
                      questions[questionsindex].textarea ||
                      questions[questionsindex].text
                    "
                  >
                    <div class="fb fb-fd-r fb-jc-sb fb-ai-c" id="button-line">
                      <button
                        class="sb button-with-icon button-with-icon-and-line"
                        id="just-icon"
                        @click="previous()"
                      >
                        <span class="material-icons">chevron_left</span>
                      </button>

                      <button
                        @click="next()"
                        :disabled="!questions[questionsindex].proceed"
                        :class="{ pb: questions[questionsindex].proceed }"
                      >
                        Weiter
                      </button>
                    </div>
                  </div>
                  <button
                    v-if="questions[questionsindex].answers"
                    class="sb button-with-icon button-with-icon-and-line f-l"
                    id="just-icon"
                    @click="previous()"
                  >
                    <span class="material-icons">chevron_left</span>
                  </button>
                  <span
                    v-for="(answer, index) in questions[questionsindex].answers"
                    :key="answer"
                    class="f-l"
                  >
                    <div class="surrounding-topdown">
                      <button
                        @click="setAnswer(index, questions[questionsindex])"
                        :class="[
                          questions[questionsindex].answerchosen == index
                            ? 'pb'
                            : 'sb',
                        ]"
                      >
                        {{ answer.answer }}
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </transition>
          </div>

          <Rocketsvg data-aos="fade-left" data-aos-duration="1500"></Rocketsvg>
        </div>
        <div v-if="introslide" class="width-50">
          <h1 id="define">Definiere dein Projekt</h1>
          <p>
            Manchmal kann es schwierig sein, in Worte zu fassen, was man
            benötigt, um ein Problem zu lösen. Unser Quiz hilft dir mit kurzen
            Fragen, dein Anliegen auf den Punkt zu bringen.
          </p>
          <button class="introbutton pb button-with-icon" @click="next()">
            Weiter
            <span class="material-icons">arrow_right_alt</span>
          </button>
        </div>
        <div v-if="finish">
          <div id="finished" class="ta-c">
            <Smallrocketsvg
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="300"
            ></Smallrocketsvg>
            <h1>Quiz Abgeschlossen!</h1>
            <p>
              Vielen Dank!<br />
              Wir kontaktieren dich in Kürze, um einen Termin zu vereinbaren!
            </p>
            <router-link to="/"><button class="sb">Startseite</button></router-link>
          </div>
        </div>
        <div v-if="lastslide" class="width-60 margin-0">
          <div v-if="showconsent" id="consent-box">
            <p>
              Bitte senden Sie mir Informationen über Aktionen, News und Events
              zu. Durch Ankreuzen dieses Feldes stimme ich der Verarbeitung
              nachstehender Daten zu Zwecken des Marketings, dem Erhalt
              elektronischer Direktwerbung und personenbezogener
              Werbeschaltungen durch Florian Bachl Software & Webdesign,
              Bäuerlegasse 18/33, 1200 Wien, hello@florianbachl.at auf Grundlage
              meiner Einwilligung bis auf Widerruf zu. Eine Weitergabe an andere
              Empfänger ist unzulässig. Es besteht keine Verpflichtung zur
              Erteilung der Zustimmung. Die Nichterteilung der Zustimmung hätte
              lediglich zur Folge, dass ich keine Informationen zugesendet
              bekomme. Ich habe das Recht, die Einwilligung jederzeit durch
              schriftliche Mitteilung zu widerrufen, ohne dass die
              Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
              erfolgten Verarbeitung berührt wird. Zudem habe ich das Recht auf
              Auskunft über die betreffenden personenbezogenen Daten sowie auf
              Berichtigung oder Löschung oder auf Einschränkung der Verarbeitung
              oder auf Widerspruch gegen die Verarbeitung sowie das Recht auf
              Datenübertragbarkeit und das Recht zur Beschwerde bei der
              Aufsichtsbehörde. Mit dem Klick auf "Absenden" stimme ich zu, dass
              meine Informationen für die Bearbeitung an Mailchimp
              weitergeleitet werden.
              <a href="https://mailchimp.com/legal/terms" target="_blank" rel="noopener"
                >Learn more about Mailchimp's privacy practices here.</a
              >
            </p>
            <button class="sb blackbutton" @click="showconsent = false">
              schließen
            </button>
          </div>

          <div class="ta-c">
            <h2 class="fat">Fast Fertig!</h2>
            <p>
              Jetzt ist es an der Zeit, Nägel mit Köpfen zu machen! Vereinbare
              ein kostenloses und unverbindliches Beratungsgespräch zu deinem
              Projekt.
            </p>
          </div>
          <div id="mc_embed_signup">
            <form
              action="https://florianbachl.us20.list-manage.com/subscribe/post?u=c08c4aab5cb7c609cf7259d17&amp;id=061d408004"
              method="post"
              @submit="checkForm"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              rel="noopener"
            >
              <div id="mc_embed_signup_scroll" class="width-60 margin-0">
                <span class="position-abs">
                  <div class="mc-field-group input-group">
                    <ul>
                      <li>
                        <input
                          type="radio"
                          value="Website"
                          name="Q1"
                          id="mce-Q1-0"
                          :checked="questions[0].answerchosen == 0"
                        /><label for="mce-Q1-0">Website</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Webapp oder Desktopapp"
                          name="Q1"
                          id="mce-Q1-1"
                          :checked="questions[0].answerchosen == 1"
                        /><label for="mce-Q1-1">Webapp oder Desktopapp</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Cloud-Anwendung"
                          name="Q1"
                          id="mce-Q1-2"
                          :checked="questions[0].answerchosen == 2"
                        /><label for="mce-Q1-2">Cloud-Anwendung</label>
                      </li>
                    </ul>
                  </div>
                  <div class="mc-field-group input-group">
                    <ul>
                      <li>
                        <input
                          type="radio"
                          value="Kosten oder Zeit im Unternehmen sparen"
                          name="Q2"
                          id="mce-Q2-0"
                          :checked="questions[1].answerchosen == 0"
                        /><label for="mce-Q2-0"
                          >Kosten oder Zeit im Unternehmen sparen</label
                        >
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Neue Kunden gewinnen"
                          name="Q2"
                          id="mce-Q2-1"
                          :checked="questions[1].answerchosen == 1"
                        /><label for="mce-Q2-1">Neue Kunden gewinnen</label>
                      </li>
                    </ul>
                  </div>
                  <div class="mc-field-group size1of2">
                    <input
                      type="number"
                      name="Q3"
                      v-model="questions[2].text"
                      class="required"
                      id="mce-Q3"
                    />
                  </div>
                  <div class="mc-field-group">
                    <input
                      type="text"
                      v-model="questions[3].text"
                      name="Q4"
                      class="required"
                      id="mce-Q4"
                    />
                  </div>
                  <div class="mc-field-group">
                    <input
                      type="text"
                      name="Q5"
                      v-model="questions[4].text"
                      class="required"
                      id="mce-Q5"
                    /></div
                ></span>
                <div class="mc-field-group">
                  <label for="mce-NAME" class="hide"
                    >Name <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name*"
                    name="NAME"
                    v-model="fullname"
                    class="required"
                    id="mce-NAME"
                  />
                </div>
                <div class="vertical-line"></div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL" class="hide"
                    >Email Addresse <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    v-model="email"
                    placeholder="Email*"
                    class="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div class="vertical-line"></div>
                <div class="mc-field-group size1of2">
                  <label for="mce-PHONE" class="hide"
                    >Telefon <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="PHONE"
                    placeholder="Telefonnummer*"
                    class="required"
                    v-model="phone"
                    id="mce-PHONE"
                  />
                </div>
                <div class="vertical-line"></div>
                <div id="consent-group" class="mc-field-group input-group">
                  <input
                    type="radio"
                    value="Ich habe die Datenschutz-Bedingungen gelesen und bin mit der Datenverarbeitung einverstanden."
                    name="CONSENT"
                    v-model="consent"
                    class="checkbox-consent"
                    id="mce-CONSENT-0"
                  /><label for="mce-CONSENT-0"
                    >Ich habe die
                    <span @click="showconsent = true" class="clickable pc"
                      >Datenschutz-Bedingungen</span
                    >
                    gelesen und bin mit der Datenverarbeitung
                    einverstanden.</label
                  >
                </div>
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                    style="display: none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style="display: none"
                  ></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_c08c4aab5cb7c609cf7259d17_061d408004"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear fb fb-fd-r rb-ai-c fb-jc-c">
                  <button
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    :disabled="!submit"
                    :class="{ pb: submit }"
                  >
                    Abschließen
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!--End mc_embed_signup-->
          <p class="ta-c clickable" @click="previous()">zurück</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rocketsvg from "../components/svgs/rocketsvg";
import Smallrocketsvg from "../components/svgs/smallrocketsvg";

export default {
  name: "quiz",
  components: {
    Rocketsvg,
    Smallrocketsvg,
  },
  data() {
    return {
      questionsindex: 0,
      lastslide: false,
      introslide: true,
      submit: false,
      phone: null,
      email: null,
      fullname: null,
      consent: false,
      finish: false,
      showconsent: false,
      istransitioning: false,
      questions: [
        {
          question: "Was möchtest du umsetzen?",
          answers: [
            { answer: "Website" },
            { answer: "Webapp oder Desktopapp" },
            { answer: "Cloud-Anwendung" },
          ],
          answerchosen: null,
          proceed: false,
        },
        {
          question: "Was ist das Ziel deines Projektes?",
          answers: [
            {
              answer: "Kosten oder Zeit im Unternehmen sparen",
            },
            { answer: "Neue Kunden gewinnen" },
          ],
          answerchosen: null,
        },
        {
          question:
            "Wie viel Kosten würde die Umsetzung des Projektes einsparen?",
          input: true,
          answerchosen: null,
          text: null,
        },
        {
          question: "Wie definierst du den Erfolg deines Projektes?",
          textarea: true,
          answerchosen: null,
          text: null,
        },
        {
          question:
            "Welche Aspekte sind dir bei der Umsetzung dieses Projektes besonders wichtig?",
          textarea: true,
          answerchosen: null,
          text: null,
        },
      ],
      loginObj: {
        email: "",
        password: "",
      },
      options: {
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.05,
            },
            value: 0.5,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "top",
            out_mode: "out",
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1.5,
          },
        },
      },
    };
  },
  created() {
    this.$store.dispatch("setLogoWhite", true);
    //this.axios.post("https://florianbachl.us20.list-manage.com/subscribe/post?u=c08c4aab5cb7c609cf7259d17&amp;id=061d408004", new FormData()).then((response) => {
    //    console.log(response.data)
    //})
  },
  watch: {
    email() {
      this.checkForSubmit();
    },
    fullname() {
      this.checkForSubmit();
    },
    phone() {
      this.checkForSubmit();
    },
    consent() {
      this.checkForSubmit();
    },
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  methods: {
    checkForSubmit() {
      if (this.email && this.fullname && this.phone && this.consent) {
        this.submit = true;
      } else {
        this.submit = false;
      }
    },
    finished() {},
    async postForm() {
      setTimeout(() => {
        this.lastslide = false;
        this.finish = true;
      }, 1000);
    },
    checkForm: function (e) {
      if (this.email && this.fullname && this.phone && this.consent) {
        console.log(e);
        this.postForm();
        return true;
      }
      this.errors = [];

      if (!this.email) {
        this.errors.push("Mail required.");
      }
      if (!this.fullname) {
        this.errors.push("Name required.");
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.consent) {
        this.errors.push("Consent required.");
      }

      e.preventDefault();
    },
    setAnswer(index, question) {
      question.answerchosen = index;
      question.proceed = true;
      this.next();
    },
    checkvalidity() {
      if (
        this.questions[this.questionsindex].text != null &&
        this.questions[this.questionsindex].text != ""
      ) {
        this.questions[this.questionsindex].proceed = true;
      } else {
        this.questions[this.questionsindex].proceed = false;
      }
    },
    previous() {
      this.istransitioning = true;
      if (this.questionsindex > 0) {
        if (this.lastslide) {
          this.lastslide = false;
        } else {
          this.questionsindex -= 1;
        }
      } else {
        this.introslide = true;
      }
      this.istransitioning = false;
    },
    next() {
      this.istransitioning = true;
      if (!this.introslide) {
        if (this.questionsindex < this.questions.length - 1) {
          this.questionsindex += 1;
        } else {
          this.lastslide = true;
        }
      } else {
        this.introslide = false;
      }
      this.istransitioning = false;
    },
  },
};
</script>
<style scoped>

.bounce-enter-active {
  transition: all 0.5s ease-in;
}

.bounce-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.bounce-enter-from,
.bounce-leave-to {
  transform: translateY(20em);
}

.pb {
  background: linear-gradient(to right, #56aff5 0%, #d726a2 100%);
}
.finished {
  background: linear-gradient(0.13turn, #01cfdc 0%, #340a94 100%);
}
#tsparticles {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1000;
  background: linear-gradient(0.01turn, #021126, #02060e);
}
#foreground {
  margin: auto;
  height: 100vh;
  width: calc(100vw - 50px);
  max-width: 1200px;
  color: white;
}

#question-indicator {
  font-size: 1.1em;
  color: #8b8aa1;
}

#content {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  height: calc(100vh - 200px);
}

#quiz-buttons {
  margin-top: 50px;
}

#quiz-buttons button {
  margin-right: 20px;
  margin-bottom: 20px;
}

textarea:focus {
  outline: none;
}

textarea {
  width: 100%;
  border-radius: 10px;
  color: white;
  font-size: 1em;
  background-color: #161a21;
  border: none;
  height: 120px;
  resize: none;
}

#currency {
  margin-left: 1em;
  font-size: 1.5em;
  text-align: right;
}

.area {
  background-color: #161a21;
  border-radius: 10px;
  padding: 15px;
}

/* width */
#scrollbar::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#scrollbar::-webkit-scrollbar-track {
  background: #1a2029;
  border-radius: 10px;
}

/* Handle */
#scrollbar::-webkit-scrollbar-thumb {
  background: #272f3d;
  border-radius: 10px;
}

/* Handle on hover */
#scrollbar::-webkit-scrollbar-thumb:hover {
  background: #303744;
}

.surrounding-topdown {
  transition: all 2s ease;
}

#mc_embed_signup_scroll {
  margin-top: 3em;
}

#just-icon {
  padding: 13px;
  margin: 0px;
}

#just-icon .material-icons {
  margin: 0px;
}

#button-line {
  margin-top: 2em;
}

.checkbox-consent {
  width: 1em;
  margin-top: 0.5em;
  margin-right: 1em;
}

#consent-group {
  margin-top: 1em;
  margin-bottom: 3em;
}

#mc-embedded-subscribe-form {
  margin-bottom: 1em;
}

.introbutton {
  margin-top: 3em;
}
.vertical-line {
  border-bottom: 1px solid white;
  width: 100%;
}

#button-line button {
  margin: 0px;
}

#rocketsvg {
  width: 40%;
}

#smallrocketsvg {
  width: 10em;
  margin: 0 auto;
}

#finished h1 {
  margin: 0.5em;
}

#finished .sb {
  margin-top: 3em;
}

.position-abs {
  position: absolute;
  visibility: hidden;
}

#define {
  margin-bottom: 0.5em;
}

#consent-box {
  box-shadow: 0px 0px 10px #02060e;
  padding: 1em;
  margin: 1em;
  height: auto;
  width: calc(100% - 4em);
  max-width: calc(1100px - 4em);
  max-height: calc(100vh - 10em);
  left: calc(50% - 550px);
  top: 5em;
  border-radius: 10px;
  background-color: white;
  position: fixed;

  z-index: 9999;
  color: black;
}

.blackbutton {
  margin-top: 1em;
  color: black;
  border-color: black;
}

@media screen and (max-width: 1100px) {
  #consent-box {
    height: auto;
    overflow: scroll;
    overflow-x: hidden;
    right: 0;
    left: 0;
    top: 5em;
  }
}

@media screen and (max-width: 768px) {
  #question-mobile {
    flex-direction: column-reverse;
  }
  .margin-0 {
    margin: auto;
    max-width: 100%;
  }

  #rocketsvg {
    width: 50%;
  }

  .width-50,
  .width-60 {
    width: 70%;
  }
}

@media screen and (max-width: 450px) {
  .width-50,
  .width-60 {
    width: 100%;
  }

  #rocketsvg {
    display: none;
  }

  h1 {
    font-size: 2em;
  }
}
</style>
