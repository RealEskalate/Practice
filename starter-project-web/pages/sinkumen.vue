<template>
  <v-container >
    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <div>
              <NuxtLink to="/">
              Home page
            </NuxtLink>
            
            </div>
             
          </v-card-title>
          <v-list-item class="black--text">
            
            <v-list-item-content>
              <p style="font-size:30px;margin-bottom:20px">Info</p>
              <v-list-item-title>
               <h1 style="margin-bottom:20px">Sinkumen Aseffa</h1>
              </v-list-item-title>
              <v-list-item-title>
                <img style="border-radius:7px" width="200px" src="../assets/sinkumen.jpg">
              </v-list-item-title>
              <v-list-item-title style="padding:10px">
                <span style="white-space: pre-line">
                     My name is <b>Sinkumen Aseffa</b>, a 5th year software engineer student at Addis ababa university, self thought graphics designer and tech enthusiast with 5 years experience in graphics design currently working on front end web development and android application development and Learning backend to add it to my skill set to meet my passion of solving problems existing in my community. and currently i'm seeking for full time jobs in top-tech companies.
                </span>  
                    
               </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card  elevation="2" color="white">
          <v-card-title class="black--text">
            <h3>Sinkumen's Todo list</h3>
          </v-card-title>
           <form v-on:submit="addTodo">
             <v-row style="padding-left:25px">
            <v-col>
              <v-text-field required name="todo" label="Todo" placeholder="Study" dense light outlined></v-text-field>
            </v-col>
            <v-col>
                 <v-card-action >
            <v-btn type="submit">
              Add Todo
            </v-btn> 
          </v-card-action>
            </v-col>
          </v-row>
           </form>
          
       
          <v-spacer />

          <v-list-item  >
            <v-list-item-content style="padding:10px">
                <v-card v-for="item in todos" v-bind:key="item.id"  elevation= "2" color="white" >
                    <v-card-title >
                        <v-row>
                            <v-col cols="1">
                              <v-checkbox @change="onChange($event, item.id ,item.userId)" light v-model= "item.completed"  ></v-checkbox>
                            </v-col>
                            <v-col cols="10"  class="black--text"> <h4 style="text-transform: capitalize">{{item.title}}</h4></v-col>
                            <v-col > 
                              <v-btn @click="deleteTodo(item.id)" icon color="red">
                                <v-icon>mdi-delete</v-icon>
                              </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>
                </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default Vue.extend({
    name:"Sinkumen's Todo list",

    data(){
        return {todos:[{id:""}],todo:""}
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => response.json())
        .then(json => {this.todos = json})
    },
    methods: {
      onChange(val: any, id: any, userId: any) {
          fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
              method: 'PUT',
              body: JSON.stringify({
                  id,
                  completed:val,
                  userId,
              }),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
              })
          .then((response) => response.json())
          .then((json) => console.log(json));
        console.log(val,id,userId)
          if (!val) { // Custom checks in this
            console.log('Unchecked')
          } else {
            console.log('Checked')
          }
      },
      addTodo(e:any){
      e.preventDefault() // it prevent from page reload
      console.log(e.target.todo.value);
      fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          body: JSON.stringify({
            title: e.target.todo.value,
            completed: false,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
      .then((response) => response.json())
      .then((json) => {
        //  let tds = [...this.todos];
        //  tds.push(json)
       
          this.todos.unshift(json)
        
         
         
        }).catch((err)=>{
          alert(err)
        });
      },
      deleteTodo(id:any){
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
        })
        .then(response => response.json())
        .then(()=>{
          this.todos = this.todos.filter(todo => todo.id != id)
          console.log(`Todo with the id ${id} successfuly deleted!`);
          
        });
      }


    }
})
</script>

<style scoped></style>
