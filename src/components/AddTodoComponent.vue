<template>
  <div class="input-field">
    <input type="text" class="input" v-model="description" v-on:keyup.enter="onAddTodo" placeholder="Add to your list">
    <span id="add"><i class='bx bx-subdirectory-left return' @click="onAddTodo"></i></span>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { addTask } from '@/store/task/actions/action_creators.js';
export default {
  name: 'AddTodo',
  setup() {
    const { dispatch, getters } = useStore();
    const description = ref(null);
    const onAddTodo = () => {
      const totalTasks = computed(() => getters['tasks/tasks']).value.length;
      const task = {
        index: totalTasks + 1,
        description: description.value,
        completed: false,
      }
      dispatch(addTask(task));
      description.value = '';
    };

    return {
      onAddTodo, description,
    }
  }
}
</script>

<style>

</style>

