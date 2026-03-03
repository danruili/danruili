---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Danrui Li"
  text: ""
  tagline: PhD Student in Computer Science at Rutgers University, applying large language models and machine learning to creative design and pedestrian modeling.
  actions:
    - theme: brand
      text: Research
      link: /#research
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
import workList from '.vitepress/theme/workList.vue'
import works from '.vitepress/theme/works.json'

const recent_work = works.slice(0, 3)
const other_work = works.slice(3)
</script>


<div style="margin-top:60px"></div>

<h1 id="research">Research</h1>

<workList :works="recent_work" />

<div style="margin-top:3rem"></div>

<workList :works="other_work" :card=true />

<style scoped>
</style>

