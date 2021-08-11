<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-btn style="background-color:purple; margin:18px" @click="goback"
          >back to home</v-btn
        >
        <v-card light class="mx-auto" max-width="1100">
          <v-list-item>
            <v-list-item-avatar size="150" color="grey">
              <img width="150px" src="../assets/beshir.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="overline mb-4">Beshir Dekebo</div>
              <v-list-item-title class="headline mb-1"></v-list-item-title>

              <v-text class="overline mb-2">
                I am Beshir Dekebo, a Software Engineering Student at Addis
                Ababa Institute of Technology currently taking 5th-year graduate
                classes. I am a major fan of algorithms and Mathimatics.
                Currently am intrested in Web and Mobile Development. My life's
                most important goal is to solve communal problems and contribute
                to the digital world.
              </v-text>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text>GitHub</v-btn>
            <v-btn text>LinkedIn</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <template>
      <v-card class="mx-auto" max-width="1100" style="margin:20px;" light>
        <v-card-title
          class="justify-center"
          style="background-color:purple; color:white;"
        >
          Beshir's Todo List
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
                  <v-btn
                    style="background-color:purple; color:white;"
                    @click="onSubmit"
                  >
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
    </template>
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
        { text: "Actions", value: "action", sortable: false }
      ],
      search: "",
      newtodo: ""
    };
  },

  created() {
    this.$store.dispatch("beshir/fetchTodos");
  },
  computed: {
    ...mapState({
      alltodos: state => {
        return state.beshir.todos;
      }
    })
  },
  methods: {
    goback() {
      return this.$router.go(-1);
    },
    onSubmit(e) {
      this.$store.dispatch("beshir/addTodos", this.newtodo);
      this.newtodo = "";
    },
    onDelete(id) {
      this.$store.dispatch("beshir/deleteTodo", id);
    },
    onUpdate(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.$store.dispatch("beshir/updateTodo", updatedTodo);
    }
  }
};
//    }
</script>
