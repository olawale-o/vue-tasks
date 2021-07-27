import { ADD_TASK, REMOVE_TASK } from './action_types.js';

export const addTask = (credentials) => ({
  type: ADD_TASK,
  credentials  
});

export const removeTask = (credentials) => ({
  type: REMOVE_TASK,
  credentials,
});