<template>
  <div id="app">
    <button @click="addCat">미예아야야야용미예엥에옹</button>
    <button @click="addDog">월우렁월월월왈아랄왈왕왈</button>
    <hr>
    <AnimalImages/>
    <hr>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AnimalImages from './components/AnimalImages.vue'

export default {
  name: 'App',
  components:{
    AnimalImages
  },

  methods:{
    ...mapActions(['addCat', 'addDog'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
