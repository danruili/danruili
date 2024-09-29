<template>
    <div class="image-content viewer">
      <!-- Display the image normally -->
      <div class="thumbnail-container" @click="openImage">
        <div class="enlarge-hint">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" class="enlarge-icon">
          <path fill="none" stroke="#333" stroke-width="36" stroke-linecap="round"
          d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/>
          </svg> 
        </div>
        <img :src="imageSrc" alt="Displayed Image" class="thumbnail" />
      </div>
  
      <!-- Full screen overlay, visible only when image is clicked -->
      <div v-if="isImageFullScreen" class="overlay" @click="closeImage">
        <div class="fullscreen-container">
          <!-- Full screen image -->
          <img :src="imageSrc" alt="Full Screen Image" class="fullscreen-image" />
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ImageFullscreenViewer',
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isImageFullScreen: false
      };
    },
    methods: {
      openImage() {
        this.isImageFullScreen = true;
        document.body.style.overflow = 'hidden'; // Disable scrolling
      },
      closeImage() {
        this.isImageFullScreen = false;
        document.body.style.overflow = 'auto'; // Enable scrolling again
      }
    }
  };
</script>
  
<style scoped>
  .viewer {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .thumbnail-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .thumbnail-container:hover {
    transform: scale(1.05);
  }
  
  .thumbnail {
    height: auto;
  }
  
  .enlarge-hint {
    /* display: block; */
    font-size: 0.6rem;
    background-color: rgb(255, 255, 255);
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 8px;
    right: 8px;
    padding: 0px 4px;
    border-radius: 3px;
    z-index: 10;
  }

  .enlarge-icon {
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .fullscreen-container {
    position: relative;
    width: 100%;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .fullscreen-image {
    width: 100%;
    height: auto;
    max-height: 100%;
  }

</style>
  