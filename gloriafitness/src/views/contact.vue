<template>
  <div id="contact" class="fb fb-fd-r fb-ai-c fb-jc-sb margin-0">
        <div class="width-40">
          <h1 class="veryfat">Kontakt</h1>
            <div>
            <form
              action="mailto:hello@florianbachl.at"
              method="post"
              @submit="checkForm"
              target="_blank"
            >
              <div>
                <div>
                  <label for="fullname" class="hide"
                    >Name <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name*"
                    name="fullname"
                    v-model="fullname"
                    id="fullname"
                  />
                </div>
                <div class="vertical-line" id="fullnameline"></div>
                <div>
                  <label for="email" class="hide"
                    >Email Addresse <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    v-model="email"
                    placeholder="Email*"
                    id="email"
                  />
                </div>
                <div class="vertical-line" id="emailline"></div>
                <div>
                  <label for="phone" class="hide"
                    >Telefon <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="PHONE"
                    placeholder="Telefonnummer"
                    v-model="phone"
                    id="phone"
                  />
                </div>
                <div class="vertical-line " id="phoneline"></div>
                <div>
                  <label for="subject" class="hide"
                    >Telefon <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Betreff*"
                    v-model="subject"
                    id="subject"
                  />
                </div>
                <div class="vertical-line " id="subjectline"></div>
                <div>
                    <textarea
                  class="scrollbar"
                    placeholder="Deine Nachricht*"
                  v-model="message"
                  id="message"
                />
                </div>
                
                <div id="consent-group">

                      <input
                        type="radio"
                        value="Ich habe die Datenschutz-Bedingungen gelesen und bin mit der Datenverarbeitung einverstanden."
                        name="CONSENT"
                        v-model="consent"
                        class="checkbox-consent"
                        id="consent"
                      /><label for="mce-CONSENT-0" id="consentlabel"
                        >Ich habe die Datenschutz-Bedingungen gelesen und bin
                        mit der Datenverarbeitung einverstanden.</label
                      >
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
                    v-model="fakeuserinput"
                    
                  />
                </div>
                <div v-for="er in errors" :key="er" class="red">
                    {{er}}
                </div>
                   <button
                    type="submit"
                    value="send"
                    name="send"
                    class="pb"           
                  >
                  Absenden</button>
                
              </div>
            </form>
          </div>
        </div>
<div>Image</div>
      
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
        loading: true,
        fakeuserinput: null,
        submit: false,
        subject: null,
        phone: null,
        email: null,
        message: null,
        fullname: null,
        consent: false,
        finish: false,
        errors: []
    }
  },
  beforeCreate() {
    this.loading= false
   },
  computed: {},
  watch: {},
  methods: {
    async postForm(){
      setTimeout(() => {  this.lastslide = false;
      this.finish = true; }, 1000);
      
    },
    checkForm: function (e) { 
        this.errors = [];
      if (this.email && this.fullname && this.consent && this.subject && this.message && !this.fakeuserinput) {
        console.log(e)
        this.postForm()
        return true;
      }

       document.getElementById("emailline").classList.remove("redborder");
       document.getElementById("fullnameline").classList.remove("redborder");
       document.getElementById("subjectline").classList.remove("redborder");
       document.getElementById("emailline").classList.remove("redborder");
       document.getElementById("message").classList.remove("redborder");
       document.getElementById("consentlabel").classList.remove("red");


     
console.log("made it here!")
      if (!this.email) {
        this.errors.push('Email ist ein Pflichtfeld.');
         document.getElementById("emailline").classList.add("redborder");
      }
      console.log("made it here!")
      if (!this.fullname) {
        this.errors.push('Name ist ein Pflichtfeld.');
        document.getElementById("fullnameline").classList.add("redborder");
      }
      console.log("made it here!")
      if (!this.subject) {
        this.errors.push('Betreff ist ein Pflichtfeld.');
        document.getElementById("subjectline").classList.add("redborder");
      }
      console.log("made it here!")
      if (!this.message) {
        this.errors.push('Nachricht ist ein Pflichtfeld.');
        document.getElementById("message").classList.add("redborder");
      }
      console.log("made it here!")
      if (!this.consent) {
        this.errors.push('Datenschutz-Bestimmungen müssen akzeptiert werden.');
        document.getElementById("consentlabel").classList.add("red");
      }
      console.log("made it here!")
      e.preventDefault();
    },
  },
};
</script>
<style scoped>



</style>
