<template>
    <!-- <span class="link-icon">•</span> -->
    <span class="link-icon">></span>
    <button class="linkButton" @click="openLink">
      <span class="link-text">{{ text }}</span>
    </button>
</template>
  
<script>
  export default {
    name: 'linkButton',
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
  .linkButton {
    color: var(--vp-button-alt-text);              /* Dark gray text */
    cursor: pointer;
    margin-bottom: 0px;
    margin-top: 5px;
    margin-right: 15px;
    font-size: small;
    /* text-decoration: underline; */
  }
  
  .linkButton:hover {
    color: var(--vp-button-brand-bg);
  }

  .link-icon {
    color: var(--vp-button-brand-bg);
    font-weight: 900;
    margin-right: 0.5em;
  }
</style>
  