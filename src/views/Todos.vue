<template>
  <div class="todo-container">
    <div class="todo-content">
        <h6 class="field heading"><span>Today's To Do</span> <i class='bx bx-refresh'></i></h6>
        <AddTodoComponent />
        <TodoComponent :tasks="tasks"/>
    </div>
    <div class="button">
        <button class="btn" id="trash-all">Clear all completed</button>
    </div>
  </div>
</template>

<script>
import AddTodoComponent from '../components/AddTodoComponent.vue';
import TodoComponent from '../components/TodoComponent.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'Todos',
  components: {
      AddTodoComponent, TodoComponent
  },
  setup() {
    const { getters } = useStore();
    const tasks = computed(() => getters['tasks/tasks']);
    return {
      tasks,
    }
  }
}
</script>

<style scoped>

</style>