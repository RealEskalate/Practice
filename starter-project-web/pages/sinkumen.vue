<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <NuxtLink to="/">
              Home page
            </NuxtLink>
          </v-card-title>
          <v-list-item class="black--text">
            <v-list-item-content>
              <v-list-item-title>
                <p style="margin-bottom:20px;font-size:30px">
                  Info
                </p>
                <h1 style="margin-bottom:20px;">
                  Sinkumen Aseffa
                </h1>
              </v-list-item-title>
              <v-row>
                <v-col cols="3" style="padding-left:45px;">
                  <v-list-item-title>
                    <img
                      style="border-radius:7px"
                      width="200px"
                      src="../assets/sinkumen.jpg"
                    />
                  </v-list-item-title>
                </v-col>
                <v-col>
                  <v-list-item-title>
                    <span style="white-space: pre-line">
                      My name is <b>Sinkumen Aseffa</b>, a 5th year software
                      engineer student at Addis ababa university, self thought
                      graphics designer and tech enthusiast with 5 years
                      experience in graphics design currently working on front
                      end web development and android application development
                      and Learning backend to add it to my skill set to meet my
                      passion of solving problems existing in my community. and
                      currently i'm seeking for full time jobs in top-tech
                      companies.
                    </span>
                  </v-list-item-title>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card elevation="2" color="white">
          <v-card-title class="black--text">
            <h3>Sinkumen's Todo list</h3>
          </v-card-title>
          <form @submit="addTodo">
            <v-row style="padding-left:25px">
              <v-col>
                <v-text-field
                  required
                  name="todo"
                  label="Todo"
                  placeholder="Study"
                  dense
                  light
                  outlined
                />
              </v-col>
              <v-col>
                <v-btn type="submit">
                  Add Todo
                </v-btn>
              </v-col>
            </v-row>
          </form>

          <v-spacer />

          <v-list-item>
            <v-list-item-content style="padding:10px">
              <v-card
                v-for="item in getTodos"
                :key="item.id"
                elevation="2"
                color="white"
              >
                <v-card-title>
                  <v-row>
                    <v-col cols="1">
                      <v-checkbox
                        v-on:input="item.completed"
                        light
                        @change="
                          onChange($event, item.title, item.id, item.userId)
                        "
                      />
                    </v-col>
                    <v-col cols="10" class="black--text">
                      <h4 style="text-transform: capitalize">
                        {{ item.title }}
                      </h4>
                    </v-col>
                    <v-col>
                      <v-btn icon color="red" @click="deleteTodo(item.id)">
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
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { mapGetters } from "vuex";

Vue.use(Vuetify);

export default Vue.extend({
  name: "Todos",

  data() {
    return { todos: [{ id: "" }], todo: "" };
  },
  computed: {
    ...mapGetters("sinkumen", ["getTodos"])
  },

  created() {
    let res = this.$store.dispatch("sinkumen/fetchTodos");
  },
  methods: {
    onChange(val: any, title: any, id: any, userId: any) {
      const updatedTodo = {
        id,
        title,
        completed: val,
        userId
      };
      this.$store.dispatch("sinkumen/updateTodo", updatedTodo);
      if (!val) {
        // Custom checks in this
        console.log("Unchecked");
      } else {
        console.log("Checked");
      }
    },
    addTodo(e: any) {
      e.preventDefault();
      this.$store.dispatch("sinkumen/addTodos", e.target.todo.value);
    },
    deleteTodo(id: any) {
      this.$store.dispatch("sinkumen/deleteTodo", id);
    }
  }
});
</script>

<style scoped></style>
