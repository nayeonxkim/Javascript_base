<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild/>
    <MyChild/>
    <MyChild/>
    <MyChild/>
  </div>
</template>


<script>
import MyChild from './MyChild.vue'

export default {
  name:'MyComponentName',
  components: {
        MyChild,

  }

}
</script>


<style>
  .border{
    border:solid;
  }
</style>

