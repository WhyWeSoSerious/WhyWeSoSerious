<template>
  <div class="outer ">
      <Header/>
      <router-view></router-view>
      <Footer v-show="!$route.meta.isShow" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer';


export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getCategoryList')
    
  },
  components: {
      Header,Footer
  },
}
</script>f

<style scoped>
 
</style>
