<template>
  <ul class="todo-tasks" id="todo-tasks" ref="taskList">
    <li
      v-for="(task, i) in tasks"
      :key="i"
      class="todo-list"
      :id="task.index"
      draggable="true"
      @dragstart="dragItem = i"
      @dragend="onDragEnd"
      @dragenter="dragEnterItem = i"
      @dragover.prevent="onDragOver(i)"
    >
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
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { updateStatus, updateAll } from '@/store/task/actions/action_creators.js';
export default {
  name: 'Todo',
  setup() {
    const taskList = ref(null);
    const dragItem = ref(null);
    const dragEnterItem = ref(null);
    const { dispatch, getters } = useStore();
    const tasks = computed(() => getters['tasks/tasks']);
    const onUpdateStatus = (task) => {
      dispatch(updateStatus(task));
    };

    return {
      onUpdateStatus, taskList, dragItem, dragEnterItem, tasks,
      onDragOver: (i) => {
        console.log(i);
      },
      onDragEnd: () => {
        // duplicate tasks array
        let _tasks = [...tasks.value];

        // remove drag item
        const dragItemContent = _tasks.splice(dragItem.value, 1)[0];

        // switch drag item with drag enter item
        _tasks.splice(dragEnterItem.value, 0, dragItemContent);

        // reset drag item and drag enter item
        dragItem.value = null;
        dragEnterItem.value = null;
        // update array
        dispatch(updateAll(_tasks));
      }
    }
  }
}
</script>

<style scoped>

</style>