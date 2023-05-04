<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{message}}</h1>
  <h2>위 메시지의 길이 : {{messageLength}}</h2>
  <h2>위 메시지의 길이 *2 : {{doubleLength}}</h2>
  <input type="text" @keyup.enter="changeMessage" v-model="inputData">

  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      inputData:'',
    }
  },
  methods :{
    changeMessage() {
      const newMessage = this.inputData
      this.$store.dispatch('changeMessage', newMessage)
      this.inputData = null
    }
  },
  components: {

  },
  computed:{
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
    },
    doubleLength() {
      return this.$store.getters.doubleLength
    }
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
