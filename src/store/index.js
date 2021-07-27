import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import taskModule  from './task';
const store = createStore({
  modules: {
    tasks: taskModule,
  },
  plugins: [createPersistedState()],
});  
export default store;