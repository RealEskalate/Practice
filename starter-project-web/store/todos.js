import axios from 'axios';

export const state={
    todos:[]
};

export const getters={
    alltodos:(state)=>{
        return state.todos
    }   
};

export const actions={
    async fetchTodos({ commit }){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos',res.data);
    },
    async addTodos({commit},title){
        const res =await axios.post('https://jsonplaceholder.typicode.com/todos',
        {title,completed:false});

        commit('newTodo',res.data);
    },
    async deleteTodo({commit},id){
        await axios.delete('https://jsonplaceholder.typicode.com/todos/' + id);

        commit('removeTodo',id);

    },
    async filterTodos({commit},e){
        const limit = parseInt(e.target.options[e.target.selectedIndex].innerText);
        
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos',res.data);


    }

   
};

export const mutations={
    setTodos:  (state,todos)=>{
        state.todos = todos;
    },
    newTodo:(state,todo)=>{
        state.todos.unshift(todo);
    },
    removeTodo:(state,id)=>{
        state.todos= state.todos.filter(todo=>todo.id!==id)
    }
};

