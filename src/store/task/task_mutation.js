export const taskMutation = {
  addTask: (state, { credentials: { task }, }) => state.tasks = [ task, ...state.tasks],
  removeTask: (state, { credentials: { id } }) => state.tasks = state.tasks.filter((task) => id !== task.index)
};