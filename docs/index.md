---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Danrui Li"
  text: ""
  tagline: PhD Student in Computer Science at Rutgers University, exploring the boundaries among human behavior modeling, artificial intelligence, and architectural design.
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
      text: ResearchGate
      link: https://www.researchgate.net/profile/Danrui_Li2
---
<script setup>
import linkButton from '.vitepress/theme/linkButton.vue'
import ImageFullscreenViewer from '.vitepress/theme/ImageFullscreenViewer.vue'
</script>


<div class="skip">Selected Work</div>

<div class="work">
  
  <div class="text-content">

  ## Microscopic modeling of attention-based movement behaviors

  <div class="author">Danrui Li, Mathew Schwartz, Samuel S. Sohn, Sejong Yoon, Vladimir Pavlovic, Mubbasir Kapadia</div>
  <span class="pub">Transportation Research Part C: Emerging Technologies, 2024.</span>

  How will attention affect walking speed in retail areas? We model how pedestrians will be attracted to environmental objects and how this will slow down their walking speed. Then we show how our model can help optimize the design of retail areas in transportation hubs. 

  <linkButton text="Project page" link="https://danruili.github.io/AttentionMove/"/> <linkButton text="Read article" link="https://arxiv.org/abs/2403.14892"/>
  </div>

  <ImageFullscreenViewer imageSrc="./public/image/attentionBanner.png" alt="AttentionMove" />

</div>

<div class="work">
  
  <div class="text-content">

  ## Learning from Synthetic Human Group Activities

  <div class="author">Che-Jui Chang, Danrui Li, Deep Patel et al. (2024)</div>
  <span class="pub">CVPR 2024</span>

  A synthetic data generator for multi-view multi-group multi-person human atomic actions and group activities, which facilitates the learning of human-centered tasks across single-person, multi-person, and multi-group conditions.

  <linkButton text="Project page" link="https://cjerry1243.github.io/M3Act/"/> <linkButton text="Read article" link="https://openaccess.thecvf.com/content/CVPR2024/papers/Chang_Learning_from_Synthetic_Human_Group_Activities_CVPR_2024_paper.pdf"/>
  </div>
  <ImageFullscreenViewer imageSrc="./public/image/m3act.png" alt="M3Act" />
</div>

