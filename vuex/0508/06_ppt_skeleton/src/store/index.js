import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins :[
    createPersistedState(),
  ],

  state: {
    message: 'message in state'
  },
  getters: {
    messageLength(state) {
      return state.message.length
    },
    // messageLength를 이용해서 새로운 값을 계산
    doubleLength(state, getters) {
      return getters.messageLength * 2
    },
  },
  mutations: {
    CHANGE_MESSAGE(state, message){
      // console.log(state)
      // console.log(message)
      state.message = message
    },
    LOAD_MESSAGE(state){
      // 로컬 스토리지에서 데이터 꺼내오기
      const parseMessage = JSON.parse(localStorage.getItem('message'))
      state.message = parseMessage ? parseMessage : ''

    }
  },
  actions: {
    changeMessage(context, message){
      // console.log(context)
      // console.log(message)
      context.commit('CHANGE_MESSAGE', message)

      // 바뀐 메시지를 로컬 스토리지에 저장하기
      context.dispatch('messageSaveToLocalStorage')
    },
    messageSaveToLocalStorage(context){
      const message = JSON.stringify(context.state.message)
      localStorage.setItem('message', message)
    },

    loadMessage(context){
      context.commit('LOAD_MESSAGE')
    }
  },
  modules: {
  }
})
