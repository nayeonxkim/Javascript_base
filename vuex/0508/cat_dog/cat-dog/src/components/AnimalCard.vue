<template>
  <div class="card">
    <p 
    :class="{
      'cat':image.status === '녜옹~',
      'dog':image.status === '멍멍!',
    }">
    {{image.status}}
    </p>


    <img :src="image.url" alt="">
  </div>
</template>

<script>
export default {
  name:'AnimalCard',
  props:{
    image:Object
  },

}
</script>

<style>
  .cat{
    color:rgb(221, 163, 55)
  }

  .dog{
    color:rgb(150, 118, 48)
  }

  .card{
    width: 300px;
    height: 300px;
  }

  .card > img {
    width: 100%;
    height: 80%;
  }
</style>