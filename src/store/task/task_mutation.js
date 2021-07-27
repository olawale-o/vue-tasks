export const taskMutation = {
  addTask: (state, { credentials: { index, description, completed }, }) => state.tasks = [ ...state.tasks, {index, description, completed}],
  removeTask: (state, { credentials: { id } }) => state.tasks = state.tasks.filter((task) => id !== task.index),
  updateStatus: (state, { credentials: { index, completed } }) => {
    state.tasks.forEach((task) => {
      if (index === task.index) {
        task.completed = !completed
      }
    });
  },
};