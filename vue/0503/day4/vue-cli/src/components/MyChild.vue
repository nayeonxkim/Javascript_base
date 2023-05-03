<template>
  <div>
    <h3>This is child component</h3>
    <p>{{staticProps}}</p>
    <p>{{dynamicProps}}</p>
    <button @click="childToParent">클릭</button>

    <input v-model="childInputData" type="text" @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  props:{
    staticProps : String,
    dynamicProps : String,
  },
  methods :{
    childToParent() {
      this.$emit('child-to-parent', 'child에서 보낸 Data')
    },

    childInput() {
      this.$emit('child-input', this.childInputData)
      this.childInput = ''
    }
  },
  data() {
    return {
      childInputData : null,
    }
  }
}
</script>

<style>
  
</style>
