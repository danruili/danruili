---
layout: doc
---

<script setup>
import workItem from '.vitepress/theme/workItem.vue'
</script>

# Research

<!-- #region recent -->

## From Words to Worlds: Transforming One-line Prompts into Multi-modal Digital Stories with LLM Agents
<workItem 
    authors="Danrui Li, Samuel S. Sohn, Sen Zhang, Che-Jui Chang, Mubbasir Kapadia."
    publication="ACM SIGGRAPH Conference on Motion, Interaction, and Games (MIG 2024)"
    description="Utilizing Large Language Models as an organizer of various generative tools, the StoryAgent framework automates digital storytelling with fine-grained control over intermediate products."
    projectLink="https://danruili.github.io/WordsToWorlds/"
    articleLink="https://doi.org/10.1145/3677388.3696321"
    preprintLink="https://arxiv.org/abs/2406.10478"
    imagePath="./image/storyagent.png"
    tags="LLM for design, Digital storytelling"
/>

## TrajDiffuse: A Conditional Diffusion Model for Environment-Aware Trajectory Prediction
<workItem 
    authors="Qingze(Tony) Liu, Danrui Li, Samuel S. Sohn, Sejong Yoon, Mubbasir Kapadia, Vladimir Pavlovic."
    publication="Accepted by 2024 International Conference on Pattern Recognition (ICPR)"
    description="We form the trajectory prediction problem as a denoising impaint task and design a map-based guidance term for the diffusion process. TrajDiffuse is able to generate trajectory predictions that match or exceed the accuracy and diversity of the SOTA, while adhering almost perfectly to environmental constraints."
    preprintLink="https://arxiv.org/abs/2410.10804"
    imagePath="./image/trajdiffuse.png"
    tags="Human behavior modeling, Trajectory prediction"
/>

## Microscopic modeling of attention-based movement behaviors
<workItem 
    authors="Danrui Li, Mathew Schwartz, Samuel S. Sohn, Sejong Yoon, Vladimir Pavlovic, Mubbasir Kapadia (2024)"
    publication="Transportation Research Part C: Emerging Technologies"
    description="How will attention affect walking speed in retail areas? We model how pedestrians will be attracted to environmental objects and how this will slow down their walking speed. Then we show how our model can help optimize the design of retail areas in transportation hubs."
    projectLink="https://danruili.github.io/AttentionMove/"
    articleLink="https://arxiv.org/abs/2403.14892"
    imagePath="./image/attentionBanner.png"
    tags="Human behavior modeling, Pedestrian simulation"
/>

<!-- #endregion recent -->

## Learning from Synthetic Human Group Activities
<workItem 
  authors="Che-Jui Chang, Danrui Li, Deep Patel et al. (2024)"
  publication="CVPR 2024"
  description="A synthetic data generator for multi-view multi-group multi-person human atomic actions and group activities, which facilitates the learning of human-centered tasks across single-person, multi-person, and multi-group conditions."
  projectLink="https://cjerry1243.github.io/M3Act/"
  articleLink="https://openaccess.thecvf.com/content/CVPR2024/papers/Chang_Learning_from_Synthetic_Human_Group_Activities_CVPR_2024_paper.pdf"
  imagePath="https://raw.githubusercontent.com/danruili/danruili/refs/heads/vite/docs/public/image/m3act.png"
  tags="Human behavior modeling, Synthetic data"
/>

## Influence of Security Check Procedures on Transfer Efficiency from Railway Stations to Subways
<workItem 
  authors="Yu Zhuang, Danrui Li (2024)"
  publication="Journal of Tongji University"
  description="The influence of arriving passengers and the interaction effects between external factors are compared in two scenarios: the mutual recognition of security checks and the application of face recognition systems."
  articleLink="http://dx.doi.org/10.11908/j.issn.0253-374x.22209"
  tags="Human behavior modeling, Architecture design, Pedestrian simulation"
  />

## How Do Retail Stores Affect Pedestrian Walking Speed?
<workItem
    authors="Danrui Li"
    publication="Traffic and Granular Flow 2022"
    description="A detailed empirical observations that focus on pedestrian speed variations and their dynamics in front of stores."
    articleLink="https://link.springer.com/chapter/10.1007/978-981-99-7976-9_27"
    tags="Human behavior modeling"
    />

## Sensitivity Analysis of Pedestrian Simulation on Train station platforms
<workItem
    authors="Danrui Li, Rong Huang, Yihao Wu"
    publication="CAADRIA 2021"
    description="Which parameters are most sensitive, thus most important to calibrate, in pedestrian simulation models on train station platforms? We conduct a sensitivity analysis to answer this question."
    articleLink="https://doi.org/10.52842/conf.caadria.2021.2.529"
    tags="Human behavior modeling, Architecture design, Pedestrian simulation"
    />

## Quantification and Typology Methods for Spatial Regionalism
<workItem
    authors="Danrui Li, Yihao Wu, Liuqing Wu"
    publication="CAADRIA 2021"
    description="We propose a method to quantify spatial regionalism and a typology to classify different types of spatial regionalism."
    tags="Architecture design"
    />


<style scoped>
.work {
    display: grid;
}
</style>