export const taskAction = {
  async addTask({ commit }, { credentials, type }) {
    try {
      const action = type.split('/')[1];
      commit({ type: action, credentials });
    } catch (e) {
      console.log(e)
    }
  },
  async updateAll({ commit }, { credentials, type }) {
    try {
      const action = type.split('/')[1];
      console.log(credentials);
      commit({ type: action, credentials });
    } catch (e) {
      console.log(e)
    }
  },
  async removeTask({ commit }, { credentials, type }) {
    try {
      const action = type.split('/')[1];
      commit({type: action, credentials });
    } catch (e) {
      console.log(e);
    }
  },

  async updateStatus({ commit }, { credentials, type }) {
    try {
      const action = type.split('/')[1];
      commit({type: action, credentials });
    } catch (e) {
      console.log(e);
    }
  },
};