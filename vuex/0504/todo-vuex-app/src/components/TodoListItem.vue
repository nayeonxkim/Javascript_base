<template>
  <div>
    <li>
    {{todoItem. title}}
    
    </li>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',

  props:{
    todoItem:Object,
  }
}
</script>

<style>

</style>