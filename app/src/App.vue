<template>
<span>
  <Nav></Nav>
    <router-view
    @click="setExpanded"
        />
        <Footer></Footer>
        <Cookieconsent></Cookieconsent>
        </span>
</template>

<script>
import Footer from './components/openaccess/footer'
import Nav from './components/openaccess/nav'
import Cookieconsent from './components/cookies/cookieconsent'
export default {
  name: 'App',
  components:{
    Footer,
    Nav,
    Cookieconsent
  },
  created(){
    console.log("I do")
  },
  watch:{
    $route (){
       this.setExpanded()
    }
} ,
  methods: {
    setExpanded(){
      this.$store.dispatch('setExpanded', false)
    }
  },
}
</script>

<style>
html {
  background-color: white;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.blue-t{
  color:#56AFF5 ;
}

* {
  padding: 0px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-display: swap;
}

.margin-0{
  margin: auto;
  max-width: 1100px;
}

.margin-0-small{
  margin: auto;
  max-width: 900px;
}

h1{
line-height: 1.25em;
 font-size: 2.8em;
}

h2{
  font-size: 1.5em;
}

h3{
  font-size: 1.25em;
    line-height: 1.5em;
}

h4{
  font-size: 1em;
}

p{
  font-size: 1em;
}

.f-l{
  float: left;
}

.fb{
  display: flex;
}

.fb-fd-r{
  flex-direction: row;
}

.fb-fd-c{
  flex-direction: column;
}

.fb-ai-c{
  align-items: center;
}

.fb-ai-fs{
  align-items: flex-start;
}

.fb-ai-s{
  align-items: stretch;
}


.fb-ai-fe{
  align-items: flex-end;
}

.fb-jc-fs{
  justify-content: flex-start;
}

.fb-jc-fe{
  justify-content: flex-end;
}

.fb-jc-c{
  justify-content: center;
}

.fb-jc-sb{
  justify-content: space-between;
}

.fb-ai-s{
  align-items:stretch;
}
.shadow{
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
}

a{
  text-decoration: none;
}

.white{
  background-color: white;
}

.white-t{
  color: white;
}

.grey1{
  background-color: #F5F9FC;
}

.grey1-t{
  color: #F5F9FC;
}

.grey2{
  background-color: #EDF2F4;
}

.grey2-t{
  color: #EDF2F4;
}

.grey3{
  background-color: #999c9e;
}

.grey3-t{
  color: #999c9e;

}


.darkblue{
  background-color: #02060E;
}

.darkblue-t{
  color: #02060E;
}
.social-icon {
  padding: 15px;
  border-radius: 50%;
  margin-top: 15px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-size: 60% auto;
  background-position: center center;
}


#twitter {
  background-image: url("assets/logos/twitter.webp");
}

#facebook {
  background-image: url("assets/logos/facebook.webp");
}

#linkedin {
  background-image: url("assets/logos/linkedin.webp");
}

#instagram {
  background-image: url("assets/logos/instagram.webp");
}
.margin-20{
  margin: 20px;
}
.fat{
  font-weight: 500;
}
.veryfat{
  font-weight: 600;
}

button{
  border-radius: 50px; 
  background: #272f3d;
  color: white;
  border: none;
  padding: 18px 25px;
  line-height: 1em;
  font-size: 1em;
  font-weight: 500; 
  z-index: 0;
  cursor: pointer;
}

.clickable{
  cursor: pointer;
}

button::before{
  opacity: 0;
  position: absolute;
  transition: opacity 2s linear;
  z-index: -1;
}

.sb{
  background: none;
  box-sizing: border-box;
  padding: 17px 23px;
  border: 1px solid white;
}
 

.button-with-icon{
  padding: 15.5px 25px ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button-with-icon-and-line{
  padding: 13px 22px;
}

button .material-icons{
  font-size: 20px;
  margin-left: 10px
}

.pb {
  background: linear-gradient(to right, #340a94 0%, #56AFF5 50%, #D726A2 100%)

}

.pc{
  color: #56AFF5

}

.ta-c{
  text-align: center;
}

.pb::before{
  opacity: 1;
}

.width-60{
  width: 60%;
}

.width-50{
  width: 50%;
}

.width-40{
  width: 40%;
}
.material-icons-small{
  font-size: 18px;
  margin-right: 10px;
}

.hide {
  visibility: hidden;
}
.logo {
  padding: 60px;
  width: 80px;
  height: auto;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input {
  width: 100%;
  background: none;
  border: none;
  caret-color: white;
  color: white;
  font-size: 1em;
}
input[type="number"] {
  width: calc(100% - 60px);
  text-align: right;
  font-size: 1.5em;
}

input:focus {
  outline: none;
}


@media screen and (max-width: 768px) {
.margin-0{
  margin: 20px;
  max-width: calc( 100% - 40px);
}
}

@media screen and (max-width: 450px) {
#app{
  overflow: hidden;
}
}
</style>
