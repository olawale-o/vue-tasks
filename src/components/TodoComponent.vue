<template>
  <ul class="todo-tasks" id="todo-tasks">
    <li v-for="task in tasks" :key="task.index" class="todo-list">
      <div class="field todo-list__task">
        <label class="label">
          <input type="checkbox" :checked="task.completed" v-on:change="onUpdateStatus(task)">
          <span class="checkmark"></span>
        </label>
          <span class="todo-list__text">{{task.description}}</span>
          <i class="bx bx-trash-alt bin hide"></i>
          <i class="bx bx-dots-vertical-rounded move"></i>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex';
import { updateStatus } from '@/store/task/actions/action_creators.js';
export default {
  name: 'Todo',
  props: {
    tasks: {
      required: true,
      type: Array,
    }
  },
  setup() {
    const { dispatch, } = useStore();
    const onUpdateStatus = (task) => {
      dispatch(updateStatus(task));
    };
    return {
      onUpdateStatus,
    }
  }
}
</script>

<style scoped>

</style>