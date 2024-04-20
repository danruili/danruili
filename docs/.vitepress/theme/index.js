import DefaultTheme from 'vitepress/theme'
import customHome from './customHome.vue'
import Particle from './particle.vue';

export default {
  extends: DefaultTheme,
  Layout: customHome,
  components: {
    Particle
  }
}