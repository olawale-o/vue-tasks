import { taskState } from './task_state.js';
import { taskGetter } from './task_getter.js';
import { taskAction } from './task_actions.js';
import { taskMutation } from './task_mutation.js';

const taskModule = {
  namespaced: true,
  state: taskState,
  getters: taskGetter,
  actions: taskAction,
  mutations: taskMutation,

};

export default taskModule;