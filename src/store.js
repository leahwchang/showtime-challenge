import {
  reactive
} from 'vue';

export const store = {
  debug: true,

  state: reactive({
    title: {}
  }),

  setMovieTitleAction(newValue) {
    if (this.debug) {
      console.log('setMovieTitle triggered with', newValue)
    }

    this.state.title = newValue
  },

  clearMovieTitleAction() {
    if (this.debug) {
      console.log('clearMessageAction triggered')
    }
    
    this.state.title = {}
  }
}