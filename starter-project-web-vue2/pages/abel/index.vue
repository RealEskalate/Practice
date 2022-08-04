<template>
  <v-component>
    <div v-show="showAddTask">
      <AbelAddTaskVue />
    </div>
    <div class="mb-1">
      <h1>Blogs</h1>
      <AbelButtonVue
        @toggle-task="toggleTask"
        :show="this.showAddTask"
        :text="!this.showAddTask ? 'Add Task' : 'No more'"
      />
    </div>
    <AbelBlogListVue />
  </v-component>
</template>

<script>
import AbelBlogListVue from '~/components/abel/AbelBlogList.vue'
import AbelButtonVue from '~/components/abel/AbelButton.vue'
import AbelAddTaskVue from '~/components/abel/AbelAddTask.vue'

export default {
  data() {
    return {
      showAddTask: false,
    }
  },
  components: {
    AbelBlogListVue,
    AbelButtonVue,
    AbelAddTaskVue,
  },
  methods: {
    toggleTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>
