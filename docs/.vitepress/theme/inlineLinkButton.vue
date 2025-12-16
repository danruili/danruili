<template>
    
    <button class="inlineLinkButton" @click="openLink">
      <span class="inline-link-icon">&#128279</span>
      <span class="link-text">{{ text }}</span>
    </button>
</template>
  
<script>
  export default {
    name: 'inlineLinkButton',
    props: {
      text: {
        type: String,
        required: true,
        default: 'Click Me',
      },
      link: {
        type: String,
        required: true,
        default: 'https://www.example.com',  // Default link
      },
    },
    methods: {
      openLink() {
        window.open(this.link, '_blank');  // Open the link in a new tab
      },
    },
  }
</script>
  
<style scoped>
  .inlineLinkButton {
    color: var(--vp-button-alt-text);              /* Dark gray text */
    cursor: pointer;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-right: 15px;
    font-size: small;
    border-radius: 5px;
  }

  .inline-link-icon {
    color: var(--vp-button-alt-text);
    font-weight: 700;
    margin-right: 0.2em;
  }
</style>
  