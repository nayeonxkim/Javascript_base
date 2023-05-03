<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild static-props="component에서 child로" 
    :dynamic-props="dynamicProps"
    @child-to-parent="parentGetEvent"
    @child-input="getDynamicData"
    />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  data() {
    return {
      dynamicProps : "Data.."
    }
  },

  methods:{
    parentGetEvent(inputData) {
      console.log(`자식 컴포넌트에서 ${inputData}를 받았다`)
    },
    getDynamicData(input) {
      console.log(`child에서 입력한 ${input}출력`)
    }
  }
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
