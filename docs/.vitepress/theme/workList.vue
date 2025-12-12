<script setup>
import workItem from './workItem.vue'
</script>

<template>
  <div class="work-list" 
    :style="{
        gridTemplateColumns: card ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr'
    }"
    aria-label="List of publications and projects">
    <workItem
      v-for="item in works"
      :key="item.id"
      :title="item.title"
      :authors="item.authors"
      :publication="item.publication"
      :description="item.description"
      :projectLink="item.projectLink || null"
      :preprintLink="item.preprintLink || null"
      :articleLink="item.articleLink || null"
      :imagePath="item.imagePath || null"
      :tags="item.tags"
      :card="card"
      v-show="!item.hide"
    />
  </div>
</template>

<script>
export default{
    name:'workList',
    props:{
        works:{
            type: Array,
            required:true,
        },
        card:{
            type:Boolean,
            required:false,
            default:false
        }
    }
}
</script>

<style scoped>
.work-list {
  /* Modern, responsive grid of cards */
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
  column-gap: 1.25rem;
  row-gap: 3.5rem;
  /* padding: 1rem; */
  align-items: start;
}


</style>
