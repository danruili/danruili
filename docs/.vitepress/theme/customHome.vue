<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import Particle from './particle.vue'

const { Layout } = DefaultTheme
</script>


<template>
  <Layout>
    <template #home-hero-before>
        <Particle />
        <!-- <p>My custom home hero before</p> -->
    </template>
  </Layout>
</template>


<style>
.skip {
  margin-top: 40px;
  font-size: xx-large;
  font-weight: 600;
}

.author {
  font-size: small;
}
.pub {
  font-style: italic;
  color: #888;
  font-size: small;
}

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

/* when viewed from a mobile */
@media (max-width: 750px) {
  .work {
    display: grid;
  }
}

</style>