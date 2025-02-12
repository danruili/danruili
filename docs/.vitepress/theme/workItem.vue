<template>
  <div class="work">
  
    <div class="text-content">
      <h2 class="title" v-if="title">{{ title }}</h2>
      
      <div v-if="tags" class="tags">
        <span v-for="tag in tags.split(',')" :key="tag" :style="{
          borderColor: 
          tag.trim() === 'Architecture design' ? '#BF8230A2' : 
          tag.trim() === 'Human behavior modeling' ? '#478DD8A2' : 
          tag.trim() === 'LLM for design' ? '#2CA77CA2' : '#7A7A7A82'
          ,
          color:
          tag.trim() === 'Architecture design' ? '#BF8230' :
          tag.trim() === 'Human behavior modeling' ? '#478DD8' :
          tag.trim() === 'LLM for design' ? '#2CA77C' : '#7A7A7A'
           }">{{ '&#9873 '+tag.trim() }}</span>
      </div>
      <div class="author">{{ authors }}</div>
      <span class="pub">{{ publication }}</span>
      <p>{{ description }}</p>
      <linkButton v-if="projectLink" text="Project page" :link="projectLink"/>
      <linkButton v-if="articleLink" text="Read article" :link="articleLink"/>  
      <linkButton v-if="preprintLink" text="Read preprint" :link="preprintLink"/>
    </div>

    <ImageFullscreenViewer class="text-below-img" v-if="imagePath" :imageSrc="imagePath" />

  </div>
</template>

<script setup>
import ImageFullscreenViewer from './ImageFullscreenViewer.vue'
import linkButton from './linkButton.vue'
</script>
  
<script>
  export default {
    name: 'workItem',
    props: {
      title: {
        type: String,
        required: false,
        default: '',
      },
      tags: {
        type: String,
        required: false,
        default: '',
      },
      authors: {
        type: String,
        required: true,
        default: 'Authors',
      },
      publication: {
        type: String,
        required: true,
        default: 'Publication',
      },
      description: {
        type: String,
        required: true,
        default: 'Description',
      },
      projectLink: {
        type: String,
        required: false,
        default: '',
      },
      articleLink: {
        type: String,
        required: false,
        default: '',
      },
      preprintLink: {
        type: String,
        required: false,
        default: '',
      },
      imagePath: {
        type: String,
        required: false,
        default: '',
      },
      imageAlt: {
        type: String,
        required: false,
        default: 'Image',
      },
    },
  }
</script>
  
<style scoped>
.work {
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 36px;
}
.work .text-content {
    flex: 2
}
.work .image-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.author {
  font-size: small;
}
.pub {
  font-style: italic;
  color: #888;
  font-size: small;
}
.tags {
  /* margin-bottom: 8px; */
  gap: 5px;
  display: flex;
}
.tags span{
  /* padding: 0px 5px; */
  /* border-radius: 4px; */
  font-size: small;
  /* border-width: 1.5px;
  border-style: solid; */
}
.work .text-content .title {
  margin-bottom: 10px;
}

/* when viewed from a mobile */
@media (max-width: 750px) {
  .work {
    display: grid;
  }
}
</style>
  