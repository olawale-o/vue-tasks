export const taskMutation = {
  addTask: (state, { credentials: { index, description, completed }, }) => state.tasks = [ ...state.tasks, {index, description, completed}],
  removeTask: (state, { credentials: { id } }) => state.tasks = state.tasks.filter((task) => id !== task.index)
};