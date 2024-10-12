<template>
  <div class="work">
  
    <div class="text-content">
      <h2 v-if="title">{{ title }}</h2>
      <div class="author">{{ authors }}</div>
      <span class="pub">{{ publication }}</span>
      <p>{{ description }}</p>
      <linkButton v-if="projectLink" text="Project page" :link="projectLink"/>
      <linkButton v-if="articleLink" text="Read article" :link="articleLink"/>  
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

/* when viewed from a mobile */
@media (max-width: 750px) {
  .work {
    display: grid;
  }
}
</style>
  