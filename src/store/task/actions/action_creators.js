import { ADD_TASK, REMOVE_TASK, UPDATE_STATUS, UPDATE_ALL } from './action_types.js';

export const addTask = (credentials) => ({
  type: ADD_TASK,
  credentials  
});

export const removeTask = (credentials) => ({
  type: REMOVE_TASK,
  credentials,
});

export const updateStatus = (credentials) => ({
  type: UPDATE_STATUS,
  credentials,
});

export const updateAll = (credentials) => ({
  type: UPDATE_ALL,
  credentials,
});