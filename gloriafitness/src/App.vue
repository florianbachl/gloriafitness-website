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
</style>
