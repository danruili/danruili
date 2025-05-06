---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Danrui Li"
  text: ""
  tagline: PhD Student in Computer Science at Rutgers University, leveraging large language models and machine learning for creative design and pedestrian modeling.
  actions:
    - theme: brand
      text: Research
      link: /research
    - theme: brand
      text: About Me
      link: /cv
    - theme: alt
      text: LinkedIn
      link: https://www.linkedin.com/in/danrui-li-a4b5a5189/
    - theme: alt
      text: Google Scholar
      link: https://scholar.google.com/citations?user=7_kfDDYAAAAJ&hl=en/
    - theme: alt
      text: ResearchGate
      link: https://www.researchgate.net/profile/Danrui_Li2
---
<script setup>
import linkButton from '.vitepress/theme/linkButton.vue'
import ImageFullscreenViewer from '.vitepress/theme/ImageFullscreenViewer.vue'
import workItem from '.vitepress/theme/workItem.vue'
</script>


<div style="margin-top:60px"></div>

<h1>Recent Work</h1>
<div style="margin-top:-30px"></div>
<!--@include: ./research.md#recent-->


<style scoped>
h2 {
  max-width: 65%;
}
@media (max-width: 750px) {
  h2 {
    max-width: 100%;
  }
}
</style>

