import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
    createPersistedState()
  ],

  state: {
    images:[],
    status:'',
  },
  getters: {
    getStatusByImages(state){
      const images = state.images.filter(image =>{
        if (state.status === 'dog') {
          return image.status === '멍멍!'
        } else if (state.status ==='cat'){
          return image.status === '녜옹~'
        } 
      })
      return images
    }
  },
  mutations: {
    GET_IMAGE(state, payload){
      state.images.push(payload)
    },
    CHANGE_STATUS(state, payload){
      state.status = payload
    }
  },
  actions: {
    addCat({ commit }) {
      axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then(response => {

            const payload = {
              id : new Date().getTime(),
              url: response.data[0].url,
              status :'녜옹~'
            }

            commit('GET_IMAGE', payload)
          })
      .catch(err => console.log(err))
    },

    addDog({ commit }) {
      axios
      .get('https://api.thedogapi.com/v1/images/search')
      .then(response => {

            const payload = {
              id : new Date().getTime(),
              url: response.data[0].url,
              status :'멍멍!'
            }

            commit('GET_IMAGE', payload)
          })
      .catch(err => console.log(err))
    },


  },
  modules: {
  }
})
