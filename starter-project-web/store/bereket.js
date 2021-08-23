export const state = () => ({
    todos: []
  })
  export const getters={
    alltodos:(state)=>{
        return state.todos
    }   
}
  export const mutations={
    setTodos:  (state,todos)=>{
        state.todos = todos;
    },
    newTodo:(state,todo)=>{
        state.todos.unshift(todo);
    },
    removeTodo:(state,id)=>{
        state.todos= state.todos.filter(todo=>todo.id!==id)
    },
    updateTodo: (state, updatedTodo) => {
        // Find index
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    
        if (index !== -1) {
          state.todos.splice(index, 1, updatedTodo);
        }
    }
}

  
  export const actions = {
    async fetchTodos ({ commit }) {
      const res = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )
      commit('setTodos',res.data);
    },
    async addTodos({commit},title){ 
      const res = await this.$axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {title,completed:false});
      
      commit('newTodo',res.data);
    },
    async deleteTodo ({ commit }, id) {
      await this.$axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('removeTodo',id);
    },
    async updateTodo ({ commit }, edittodo   ) {
      const res = await this.$axios.put(
        `https://jsonplaceholder.typicode.com/todos/${edittodo.id}`,
        edittodo
      )
  
      commit('updateTodo', res.data);
    }
  }
  
 
  