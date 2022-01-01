<template>
  <div id="login" class="fb fb-fd-c fb-ai-c fb-jc-c">
    <h1>Admin Login</h1>
    <form @submit.prevent="signIn" class="fb fb-fd-c fb-ai-s fb-jc-c">

        <label for="email">Email</label>
        <input
          v-model="loginObj.email"
          type="email"
          id="email"
          name="email"
          required
        />

 
        <label for="password">Passwort</label>
        <input
          v-model="loginObj.password"
          type="password"
          id="password"
          name="password"
          required
        />
     
      <button type="submit">Anmelden</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginObj: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  watch: {
    user(value) {
      if (value != undefined && value != null) {
        this.$router.push("/dashboard");
      }
    },
  },
  methods: {
    async signIn() {
      this.$store.dispatch("signIn", this.loginObj);
      this.$gtag.event('login', { method: 'Google' })
    },
  },
};
</script>
<style scoped>
#login{
  height: 100vh;
}
.mainpage-button {
  margin-top: 20px;
  margin-left: 0px;

  height: calc(100% - 20px);
}

.mainpage-button p {
  font-size: 17px;
}
input{
    width: calc( 100% - 20px);
    background: none;
    border: none ;
    border-bottom: 2px solid black;
    caret-color: white;
    color: white;
    font-size: 25px;
    margin-bottom: 20px;
    padding: 0px 10px;

}
</style>
