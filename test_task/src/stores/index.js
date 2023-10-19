
const state = {
    users: [],
  };
  
  const mutations = {
    setUsers(state, users) {
      state.users = users;
    },
  };
  
  const actions = {
     fetchUsers({ commit }) {
        setTimeout(() => {
            commit('setUsers')
        }, 0);
      
    },
  };
  const getters = {
    getUsers: state => state.users,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };