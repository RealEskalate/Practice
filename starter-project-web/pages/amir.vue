<template>
  <v-container class="black--text">
    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h2>Info</h2>
          </v-card-title>
          <v-list-item class="black--text">
            <v-list-item-content>
              <v-list-item-title> Amir Mustefa </v-list-item-title>
              <v-list-item-title>
                <img width="200px" src="../assets/amirPhoto.jpeg">
              </v-list-item-title>
              <v-list-item-title>
                <span style="white-space: pre-line">
                  An Undergraduate of software engineering students with strong
                  communication, organizational skill, and fresh energy so that
                  I can fit in the professional world and succeed in becoming
                  part of something that can improve the lives of the society.
                  Being part of a good future is my goal.
                </span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card elevation="2" color="white">
          <v-card-title class="black--text">
            <h3>Amir's Todo list</h3>
          </v-card-title>
          <form @submit="addTodo">
            <v-row style="padding-left: 25px">
              <v-col>
                <v-text-field
                  required
                  name="todo"
                  label="Todo"
                  placeholder="Study"
                  dense
                  light
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-card-action>
                  <v-btn type="submit"> Add Todo </v-btn>
                </v-card-action>
              </v-col>
            </v-row>
          </form>

          <v-spacer />

          <v-list-item>
            <v-list-item-content style="padding: 10px">
              <v-card
                v-for="item in todos"
                v-bind:key="item.id"
                elevation="2"
                color="white"
              >
                <v-card-title>
                  <v-row>
                    <v-col cols="1">
                      <v-checkbox
                        @change="onChange($event, item.id, item.userId)"
                        light
                        v-model="item.completed"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="10" class="black--text">
                      <h4 style="text-transform: capitalize">
                        {{ item.title }}
                      </h4></v-col
                    >
                    <v-col>
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
      </v-col> -->
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h3>amir's todos</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="newtodo"
                      dense
                      light
                      outlined
                      label="To do"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="2">
                    <v-btn left class="primary" @click="onSubmit">
                      Add Todo
                    </v-btn>
                    <div></div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="search"
                      dense
                      light
                      outlined
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- <div class="black--text" v-for="todo in list"
        :key="todo.id" >
        <v-card>
            {{todo.title}} 
        </v-card> 
         </div> -->

                <v-data-table
                  :headers="headers"
                  :items="alltodos"
                  :search="search"
                  :items-per-page="5"
                  class="elevation-1 ml-4"
                >
                  <template v-slot:item.action="{ item }">
                    <v-btn text color="primary">
                      <v-icon small class="text--white" @click="onUpdate(item)">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                    <v-btn text color="error">
                      <v-icon small @click="onDelete(item.id)">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </template>
                </v-data-table>
              </v-container>
            </v-form>
          </v-card-text>

          <v-card-action> </v-card-action>
          <v-spacer />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Todos",
  data() {
    return {
      headers: [
        { id: "id", value: "id" },
        { text: "title", value: "title" },
        { text: "completed", value: "completed" },
        { text: "Actions", value: "action", sortable: false },
      ],
      search: "",
      newtodo: "",
    };
  },

  created() {
    this.$store.dispatch("amir/fetchTodos");
  },
  computed: {
    ...mapState({
      alltodos: (state) => {
        return state.amir.todos;
      },
    }),
  },
  methods: {
    onSubmit(e) {
      this.$store.dispatch("amir/addTodos", this.newtodo);
      this.newtodo = "";
    },
    onDelete(id) {
      this.$store.dispatch("amir/deleteTodo", id);
    },
    onUpdate(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.$store.dispatch("amir/updateTodo", updatedTodo);
    },
  },
};
//    }
</script>