<template>
  <ul class="todo-tasks" id="todo-tasks" ref="taskList">
    <li v-for="task in tasks" :key="task.index" class="todo-list" :id="task.index">
      <div class="field todo-list__task">
        <label class="label">
          <input type="checkbox" :checked="task.completed" v-on:change="onUpdateStatus(task)">
          <span class="checkmark"></span>
        </label>
          <span class="todo-list__text">{{task.description}}</span>
          <i class="bx bx-trash-alt bin hide"></i>
          <i class="bx bx-dots-vertical-rounded move" @mousedown="onMouseDown"></i>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { updateStatus } from '@/store/task/actions/action_creators.js';
import { dragStart, dragEnter, dragLeave, dragEnd, drop} from '../helper/interactive.js'
export default {
  name: 'Todo',
  props: {
    tasks: {
      required: true,
      type: Array,
    }
  },
  setup() {
    const taskList = ref(null);
    const { dispatch, } = useStore();
    const onUpdateStatus = (task) => {
      dispatch(updateStatus(task));
    };
    const dragAll = (items) => {
      items.forEach((item) => {
        item.draggable = true;
        item.addEventListener('dragstart', function(){
          dragStart(items, this)
        });
        item.addEventListener('dragenter', function(){
          dragEnter(this)
        });
        item.addEventListener('dragleave', function(e) {
          e.preventDefault();
          dragLeave(this)
        });
        item.addEventListener('dragend', function(){
          dragEnd(items, this)
        });
        item.addEventListener('dragover', (event) => {
          event.preventDefault();
          item.style.opacity = 0.2;
        });
        item.addEventListener('drop', function(e){
          e.preventDefault();
          drop(items, this)
        });
      });
    }
    const onMouseDown = () => {
      const items = taskList.value.querySelectorAll('li');
      dragAll(items)
    }
    return {
      onUpdateStatus, onMouseDown, taskList
    }
  }
}
</script>

<style scoped>

</style>