<template>
  <v-container class="black--text">
    <v-row dense>
      <v-col cols="12">
        <BereketInfo/>
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
                class="elevation-1 ml-4"
              >
                <template v-slot:item.action="{item}">
                  <v-btn text color="primary">
                  <v-icon
                    small
                    class="text--white"
                    @click="onUpdate(item)"
                  >
                    mdi-pencil
                    </v-icon>
                  </v-btn>
                  <v-btn text color="error">
                    <v-icon
                      small
                      @click="onDelete(item.id)"
                      
                    >
                      mdi-delete
                      </v-icon>
                  </v-btn>
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
import { mapState} from "vuex";
import BereketInfo from '../components/BereketInfo.vue';
export default {
  name: "bereket",
  components:{
    BereketInfo
  },
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
  
  created(){
    this.Fetch();
  },
  computed: {
    ...mapState({
      alltodos: state => {
        return state.bereket.todos;
      }
    })
  },
  methods: {
    Fetch(){
      this.$store.dispatch("bereket/fetchTodos");
    },
    onSubmit(e) {
      this.$store.dispatch("bereket/addTodos", this.newtodo);
      this.newtodo = "";
    },
    onDelete(id){
      this.$store.dispatch("bereket/deleteTodo",id);
     
    },
    onUpdate(todo){
      const updatedTodo={
        id:todo.id,
        title:todo.title,
        completed:!todo.completed
      }
      this.$store.dispatch("bereket/updateTodo",updatedTodo);
    }
  }
};

//    }
</script>
