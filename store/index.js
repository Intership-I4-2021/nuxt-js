export const state = () => ({
  title: null
})

export const getters = {
  getTitle(state) {
    return state.title
  }
}

export const mutations = {
  SET_TITLE (state, data) {
    state.title = data
  }
}

export const actions = {
  setTitle({commit}, data) {
    commit('SET_TITLE', data)
  }
}
