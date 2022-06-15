import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      showModal: false
    }
  },

  mutations: {
    change_show_modal (state) {
      state.showModal = !state.showModal
      console.log(state.showModal)
    }
  }
})