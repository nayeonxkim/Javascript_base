<template>
  <div>
    <select 
    @change="onChange"
    name="status" id="setStatus">
      <option value="all">멍냥가족</option>
      <option value="dog">멍이</option>
      <option value="cat">냥이</option>
    </select>

    <ul class="card-list">
      <AnimalCard 
      v-for="image in images"
      :key="image.id"
      :image="image"/>
    </ul>
  </div>
</template>

<script>
import AnimalCard from './AnimalCard.vue'

export default {
  name:'AnimalImages',

  components:{
    AnimalCard
  },
  methods:{
    onChange(event){
      this.$store.commit('CHANGE_STATUS', event.target.value)
    }
  },
  computed :{
    images() {
      return this.$store.getters.getStatusByImages
    }
  }
}
</script>

<style>
  .card-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>