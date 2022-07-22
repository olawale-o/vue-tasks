<template>
  <div class="todo-container">
    <div class="todo-content">
        <h6 class="field heading"><span>Today's To Do</span> <i class='bx bx-refresh'></i></h6>
        <AddTodoComponent />
        <TodoComponent />
    </div>
    <div class="button">
        <button class="btn" id="trash-all">Clear all completed</button>
    </div>
  </div>
</template>

<script>
import AddTodoComponent from '../components/AddTodoComponent.vue';
import TodoComponent from '../components/TodoComponent.vue';
export default {
  name: 'Todos',
  components: {
      AddTodoComponent, TodoComponent
  },
}
</script>

<style scoped>

</style>