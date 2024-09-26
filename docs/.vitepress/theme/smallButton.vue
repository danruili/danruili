<template>
    <button class="smallButton" @click="openLink">{{ text }}</button>
  </template>
  
<script>
  export default {
    name: 'smallButton',
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
  .smallButton {
    background-color: var(--vp-button-alt-bg);  /* Light gray background */
    color: var(--vp-button-alt-text);              /* Dark gray text */
    padding: 3px 10px;
    border: none;
    border-radius: 10px;          /* Rounded corners */
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 0px;
    margin-top: 10px;
  }
  
  .smallButton:hover {
    background-color: var(--vp-button-alt-hover-bg);       /* Slightly darker on hover */
  }
  </style>
  