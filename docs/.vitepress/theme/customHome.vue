<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const { Layout } = DefaultTheme
const showDelayedNav = ref(false)
const { frontmatter } = useData()
const hasDelayedNav = computed(() => frontmatter.value.layout === 'home')
const delayedNavQuery = '(min-width: 1025px)'
let delayedNavMediaQuery

function updateDelayedNav() {
  const usesDelayedNav = delayedNavMediaQuery?.matches ?? window.innerWidth > 1024

  showDelayedNav.value = !usesDelayedNav || window.scrollY > 120
}

onMounted(() => {
  delayedNavMediaQuery = window.matchMedia(delayedNavQuery)
  updateDelayedNav()
  window.addEventListener('scroll', updateDelayedNav, { passive: true })
  delayedNavMediaQuery.addEventListener('change', updateDelayedNav)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateDelayedNav)
  delayedNavMediaQuery?.removeEventListener('change', updateDelayedNav)
})

watch(hasDelayedNav, () => {
  if (typeof window !== 'undefined') {
    updateDelayedNav()
  }
})
</script>

<template>
  <div
    :class="[
      'custom-layout',
      {
        'custom-layout--delayed-nav': hasDelayedNav,
        'custom-layout--show-nav': !hasDelayedNav || showDelayedNav
      }
    ]"
  >
    <Layout>
      <template #home-hero-before>
          <!-- <p>My custom home hero before</p> -->
      </template>
    </Layout>
  </div>
</template>


<style>
.custom-layout--show-nav :is(.VPNav, .VPLocalNav) {
  opacity: 1;
  pointer-events: auto;
  transform: none;
}

@media (min-width: 1025px) {
  .custom-layout--delayed-nav:not(.custom-layout--show-nav) :is(.VPNav, .VPLocalNav) {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-100%);
  }
}
</style>
