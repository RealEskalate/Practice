<template>
  <v-container class="black--text">
    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h2>About Me</h2>
          </v-card-title>
          <v-list-item class="black--text">
            <v-list-item-content>
              <v-list-item-title>
                Bereket Heramo
              </v-list-item-title>
              <v-flex offset-md-4>
                <v-list-item-title class="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </v-list-item-title>
              </v-flex>
              <v-list-item-title>
                
                <img
                  class="ml-3"
                  width="150px"
                  src="../assets/bereket.jpg"
                />
              

              </v-list-item-title>
              
              
              
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h3>Bereket's todos</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-model="newtodo"
                      dense
                      light
                      outlined
                      label="To do"
                      required
                    ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="2"
      >
        <v-btn
          left
          class="primary"
          @click="onSubmit"
        >
          Add Todo
          </v-btn>
          <div>

          </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
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
                class="elevation-1 ml-4 accent"
              >
                <template>
                  <v-icon
                    small
                    class="mr-2 text--white"
                  >
                    mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteItem(todo)"
                    >
                      mdi-delete
                      </v-icon>
                </template>
                </v-data-table>

                </v-container>
                </v-form>
                </v-card-text>

                <v-card-action>
                </v-card-action>
                <v-spacer />
                </v-card>
                </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      headers: [
        { id: "id", value: "id" },
        { text: "title", value: "title" },
        { text: "completed", value: "completed" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      search: "",
      newtodo: ""
    };
  },
  async fetch({ store }) {
    await store.dispatch("todos/fetchTodos");
  },
  computed: {
    ...mapState({
      alltodos: state => {
        return state.todos.todos;
      }
    })
  },
  methods: {
    onSubmit(e) {
      this.$store.dispatch("todos/addTodos", this.newtodo);
      this.newtodo = "";
    }
  }
  //  data(){
  //    return{

  //  },
};

//    }
</script>
