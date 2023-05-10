<template>
  <div>
    <p v-if="!imgSrc">{{msg}}</p>

    <img 
    v-if="imgSrc"
    :src="imgSrc" 
    alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'DogView',

  data(){
    return{
      imgSrc :null,
      msg:'로딩중'
    }
  },

  methods:{
    getDogImage(){
      const breed = this.$route.params.breed
      const dogImageSearchUrl = `https://dog.ceo/api/breed/${breed}/images/random`

      axios({
        method:'get',
        url: dogImageSearchUrl
      })
      .then((res) => {
        const imgSrc = res.data.message
        this.imgSrc = imgSrc
      })
      .catch((error) => {
        console.log(error)
        this.msg = `${this.$route.params.breed}품종은 존재하지 않습니다.`
      })
    }
  },

  created() {
    this.getDogImage()
  }
}
</script>

<style>

</style>