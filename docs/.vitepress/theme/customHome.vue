<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import Particle from './particle.vue';


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

