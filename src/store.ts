
import Vue from 'vue';
import Vuex from 'vuex';
import { IComment } from './components/Comment.vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
        comments: []
  },
  mutations: {
    addComment(state, comment: IComment) {
      state.comments.push(comment);
    }
  },
  actions: {
    addComment(context, comment: IComment) {
      context.commit('addComment', comment);
    }
  },
});
