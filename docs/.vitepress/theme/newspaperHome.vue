<script setup>
import { ref } from 'vue'
import works from './works.json'
import teachingItemsData from './teachingItems.json'
import workExperienceItems from './workExperienceItems.json'

const teachingImages = import.meta.glob('../../teaching/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default'
})

const visibleWorks = works.filter((work) => !work.hide)
const headlineWork = visibleWorks[0]
const visualWorks = visibleWorks.slice(1, 5)
const researchFeatureWorks = visualWorks.slice(0, 2)
const researchRailWorks = visualWorks.slice(2)
const textWorks = visibleWorks.slice(5)
const archiveLeadWork = textWorks[0]
const archiveFeatureWorks = textWorks.slice(1).filter((work) => work.imagePath).slice(0, 3)
const archiveRailWorks = textWorks
  .slice(1)
  .filter((work) => !archiveFeatureWorks.includes(work))
const teachingTrack = ref(null)
const workTrack = ref(null)

const navLinks = [
  { text: 'Research', href: '#research' },
  { text: 'Teaching', href: '#teaching' },
  { text: 'Work', href: '#work' }
]

const externalLinks = [
  { text: 'Google Scholar', href: 'https://scholar.google.com/citations?user=7_kfDDYAAAAJ&hl=en/' },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/danrui-li-a4b5a5189/' },
  { text: 'GitHub', href: 'https://github.com/danruili' }
]

const teachingItems = teachingItemsData.map((item) => ({
  ...item,
  imagePath: item.imagePath ? teachingImages[item.imagePath] ?? item.imagePath : item.imagePath
}))

const visualTeachingItems = teachingItems.filter((item) => item.imagePath)
const compactTeachingColumns = chunkItems(
  teachingItems.filter((item) => !item.imagePath),
  2
)
const teachingCarouselColumns = [
  ...visualTeachingItems.map((item) => ({
    key: item.title,
    layout: 'visual',
    items: [item]
  })),
  ...compactTeachingColumns.map((items, index) => ({
    key: `compact-${index}`,
    layout: 'stacked',
    items
  }))
]

const linkTypes = [
  ['projectLink', 'Website'],
  ['datasetLink', 'Dataset'],
  ['repoLink', 'Code'],
  ['articleLink', 'Article'],
  ['preprintLink', 'Preprint']
]

function itemLinks(item) {
  return linkTypes
    .filter(([key]) => item[key])
    .map(([key, text]) => ({ text, href: item[key] }))
}

function chunkItems(items, size) {
  const chunks = []

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }

  return chunks
}

function scrollCarousel(trackRef, columnSelector, direction) {
  const track = trackRef.value

  if (!track) return

  const column = track.querySelector(columnSelector)
  const columnWidth = column ? column.getBoundingClientRect().width : track.clientWidth * 0.85
  const styles = window.getComputedStyle(track)
  const gap = parseFloat(styles.columnGap || styles.gap) || 20

  track.scrollBy({
    left: direction * (columnWidth + gap),
    behavior: 'smooth'
  })
}

function scrollTeaching(direction) {
  scrollCarousel(teachingTrack, '.teaching-carousel-column', direction)
}

function scrollWork(direction) {
  scrollCarousel(workTrack, '.experience-carousel-card', direction)
}
</script>

<template>
  <main class="newspaper-home" aria-labelledby="site-title">
    <section v-if="headlineWork" class="front-page" aria-labelledby="headline-label">
      <article class="headline">
        <p id="headline-label" class="section-kicker">Headline Update</p>
        <h2>{{ headlineWork.title }}</h2>
        <p class="byline">{{ headlineWork.publication }}</p>

        <figure v-if="headlineWork.imagePath" class="headline-figure">
          <img :src="headlineWork.imagePath" :alt="headlineWork.title" />
        </figure>

        <p class="lead">{{ headlineWork.description }}</p>

        <div class="link-row" aria-label="Headline links">
          <a
            v-for="link in itemLinks(headlineWork)"
            :key="link.text"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.text }}
          </a>
        </div>
      </article>

      <aside class="briefing" aria-label="Academic profile and navigation">
        <div class="profile-panel">
          <h1 id="site-title">Danrui Li</h1>

          <p>
            PhD student working on large language models and machine learning for
            creative design systems, architectural knowledge retrieval, and
            pedestrian movement modeling.
          </p>

          <p class="section-kicker nav-strip-label">Navigation</p>

          <nav class="nav-strip" aria-label="Homepage navigation">
            <a
              v-for="link in navLinks"
              :key="link.text"
              :href="link.href"
              class="nav-strip-link nav-strip-link--internal"
            >
              {{ link.text }}
            </a>
          </nav>

          <p class="section-kicker nav-strip-label">External</p>

          <nav class="nav-strip" aria-label="External profiles">
            <a
              v-for="link in externalLinks"
              :key="link.text"
              :href="link.href"
              class="nav-strip-link nav-strip-link--external"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.text }}
            </a>
          </nav>
        </div>

        <div>
          <p class="section-kicker">Education</p>
          <ul class="theme-list">
            <li>Ph.D. Student in Computer Science, Rutgers University, USA, 2022-Present</li>
            <li>M.S. in Architecture, Tongji University, China, 2019-2022</li>
            <li>B.Arch. in Architecture, Chongqing University, China, 2014-2019</li>
          </ul>
        </div>

      </aside>
    </section>

    <section id="research" class="content-section" aria-labelledby="research-title">
      <div class="section-heading">
        <h2 id="research-title">LLM + Creative Industry</h2>
      </div>

      <div class="archive-layout">
        <article
          v-for="work in researchFeatureWorks"
          :key="work.title"
          class="archive-lead"
        >
          <div class="archive-lead-top">
            <div class="archive-lead-heading">
              <h3>{{ work.title }}</h3>
              <p class="byline">{{ work.publication }}</p>
            </div>

            <figure v-if="work.imagePath" class="archive-lead-figure">
              <img :src="work.imagePath" :alt="work.title" />
            </figure>
          </div>

          <div class="archive-lead-body">
            <p>{{ work.description }}</p>

            <div class="link-row" :aria-label="`${work.title} links`">
              <a
                v-for="link in itemLinks(work)"
                :key="link.text"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </article>

        <aside
          v-if="researchRailWorks.length"
          class="archive-rail"
          aria-label="More LLM and creative industry work"
        >
          <article
            v-for="work in researchRailWorks"
            :key="work.title"
            class="archive-rail-entry"
          >
            <figure v-if="work.imagePath" class="archive-rail-figure">
              <img :src="work.imagePath" :alt="work.title" />
            </figure>

            <h3>{{ work.title }}</h3>
            <p class="byline">{{ work.publication }}</p>
            <p>{{ work.description }}</p>

            <div class="link-row" :aria-label="`${work.title} links`">
              <a
                v-for="link in itemLinks(work)"
                :key="link.text"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
          </article>
        </aside>
      </div>
    </section>

    <section class="content-section" aria-labelledby="archive-title">
      <div class="section-heading">
        <h2 id="archive-title">Pedestrian Modeling</h2>
      </div>

      <div class="archive-layout">
        <article
          v-if="archiveLeadWork"
          class="archive-lead"
        >
          <div class="archive-lead-top">
            <div class="archive-lead-heading">
              <h3>{{ archiveLeadWork.title }}</h3>
              <p class="byline">{{ archiveLeadWork.publication }}</p>
            </div>

            <figure v-if="archiveLeadWork.imagePath" class="archive-lead-figure">
              <img :src="archiveLeadWork.imagePath" :alt="archiveLeadWork.title" />
            </figure>
          </div>

          <div class="archive-lead-body">
            <p>{{ archiveLeadWork.description }}</p>

            <div class="link-row" :aria-label="`${archiveLeadWork.title} links`">
              <a
                v-for="link in itemLinks(archiveLeadWork)"
                :key="link.text"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </article>

        <aside
          v-if="archiveRailWorks.length"
          class="archive-rail"
          aria-label="More additional publications"
        >
          <article
            v-for="(work, index) in archiveRailWorks"
            :key="work.title"
            class="archive-rail-entry"
          >
            <figure v-if="work.imagePath" class="archive-rail-figure">
              <img :src="work.imagePath" :alt="work.title" />
            </figure>

            <h3>{{ work.title }}</h3>
            <p class="byline">{{ work.publication }}</p>
            <p v-if="index < archiveRailWorks.length - 2">{{ work.description }}</p>

            <div class="link-row" :aria-label="`${work.title} links`">
              <a
                v-for="link in itemLinks(work)"
                :key="link.text"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
          </article>
        </aside>

        <div v-if="archiveFeatureWorks.length" class="archive-cards">
          <article
            v-for="work in archiveFeatureWorks"
            :key="work.title"
            class="archive-card"
          >
            <h3>{{ work.title }}</h3>
            <p class="byline">{{ work.publication }}</p>
            <p>{{ work.description }}</p>

            <div class="link-row" :aria-label="`${work.title} links`">
              <a
                v-for="link in itemLinks(work)"
                :key="link.text"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="teaching" class="content-section" aria-labelledby="teaching-title">
      <div class="section-heading teaching-heading">
        <h2 id="teaching-title">Teaching</h2>

        <div class="carousel-controls" aria-label="Teaching carousel controls">
          <button
            class="carousel-button carousel-button--prev"
            type="button"
            aria-label="Previous teaching item"
            @click="scrollTeaching(-1)"
          ></button>
          <button
            class="carousel-button carousel-button--next"
            type="button"
            aria-label="Next teaching item"
            @click="scrollTeaching(1)"
          ></button>
        </div>
      </div>

      <div
        ref="teachingTrack"
        class="teaching-carousel"
        tabindex="0"
        aria-label="Teaching experience carousel"
      >
        <div
          v-for="column in teachingCarouselColumns"
          :key="column.key"
          :class="[
            'teaching-carousel-column',
            {
              'teaching-carousel-column--visual': column.layout === 'visual',
              'teaching-carousel-column--stacked': column.layout === 'stacked'
            }
          ]"
        >
          <article
            v-for="item in column.items"
            :key="item.title"
            :class="['teaching-card', { 'teaching-card--visual': item.imagePath }]"
          >
            <figure v-if="item.imagePath" class="teaching-card-figure">
              <img :src="item.imagePath" :alt="item.title" />
            </figure>

            <p class="byline">{{ item.affiliation }}</p>
            <h3>{{ item.title }}</h3>

            <ul class="detail-list">
              <li v-for="note in item.notes" :key="note">{{ note }}</li>
            </ul>

            <div v-if="item.href" class="link-row" :aria-label="`${item.title} links`">
              <a :href="item.href">{{ item.linkText }}</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="work" class="content-section" aria-labelledby="work-title">
      <div class="section-heading work-heading">
        <h2 id="work-title">Work Experience</h2>

        <div class="carousel-controls" aria-label="Work experience carousel controls">
          <button
            class="carousel-button carousel-button--prev"
            type="button"
            aria-label="Previous work experience item"
            @click="scrollWork(-1)"
          ></button>
          <button
            class="carousel-button carousel-button--next"
            type="button"
            aria-label="Next work experience item"
            @click="scrollWork(1)"
          ></button>
        </div>
      </div>

      <div
        ref="workTrack"
        class="experience-carousel"
        tabindex="0"
        aria-label="Work experience carousel"
      >
        <article
          v-for="item in workExperienceItems"
          :key="item.organization"
          class="experience-entry experience-carousel-card"
        >
          <h3>{{ item.organization }}</h3>
          <p class="byline">{{ item.role }}. {{ item.dates }}.</p>

          <ul class="detail-list">
            <li v-for="note in item.notes" :key="note">{{ note }}</li>
          </ul>

          <div
            v-if="item.links"
            class="link-row"
            :aria-label="`${item.organization} links`"
          >
            <a
              v-for="link in item.links"
              :key="link.text"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.text }}
            </a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.newspaper-home {
  --paper-ink: var(--vp-c-text-1);
  --paper-muted: var(--vp-c-text-2);
  --paper-rule: var(--vp-c-divider);
  --paper-accent: var(--vp-c-brand-1);
  --paper-secondary: var(--vp-c-brand-2);
  --type-display: 2.85rem;
  --type-headline: 1.72rem;
  --type-section: 1.34rem;
  --type-story: 1rem;
  --type-story-lead: 1.3rem;
  --type-story-compact: 1rem;
  --type-body: 0.8rem;
  --type-body-large: 0.9rem;
  --type-meta: 0.8rem;
  --type-small: 0.7rem;
  color: var(--paper-ink);
  margin: 0 auto;
  max-width: 1180px;
  padding: 0rem 0.5rem 0rem;
}

:is(
  .profile-panel h1,
  .headline h2,
  .section-heading h2,
  .text-entry h3,
  .archive-lead h3,
  .archive-card h3,
  .archive-rail-entry h3,
  .experience-entry h3,
  .teaching-card h3
) {
  color: var(--paper-ink);
  font-family: Georgia, 'Times New Roman', serif;
}

.profile-panel {
  border-bottom: 1px solid var(--paper-rule);
  padding-bottom: 1.2rem;
}

.profile-panel h1 {
  font-size: var(--type-display);
  font-weight: 700;
  line-height: 0.98;
  margin: 0 0 0.8rem;
}

.nav-strip {
  display: grid;
  align-items: flex-start;
  column-gap: 1.35rem;
  grid-template-columns: repeat(3, max-content);
  row-gap: 0.35rem;
  margin-top: 0;
}

.profile-panel .nav-strip-label {
  color: var(--paper-accent);
  margin: 1rem 0 0.5rem;
}

.nav-strip a,
.link-row a {
  font-size: var(--type-meta);
  line-height: 1.35;
  text-decoration: none;
}

.nav-strip a {
  border-bottom: 1px solid transparent;
  font-weight: 400;
}

.link-row a {
  border-bottom: 1px solid currentColor;
  /* font-weight: 650; */
}

.link-row a {
  color: var(--paper-secondary);
}

.nav-strip-link--internal {
  color: var(--paper-muted);
}

.nav-strip-link--external {
  color: var(--paper-muted);
}

.nav-strip a:hover,
.nav-strip a:focus-visible,
.link-row a:hover {
  border-bottom-color: currentColor;
  color: var(--paper-accent);
}

.nav-strip a:focus-visible {
  outline: 2px solid var(--paper-accent);
  outline-offset: 3px;
}

.front-page {
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 2.1fr);
  padding: 0.75rem 0 2.2rem;
}

.headline {
  order: 2;
}

.section-kicker {
  color: var(--paper-accent);
  font-size: var(--type-small);
  font-weight: 800;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
}

.headline h2 {
  font-size: var(--type-headline);
  line-height: 1.08;
  margin: 0 0 0.45rem;
}

.byline {
  color: var(--paper-muted);
  font-size: var(--type-meta);
  font-style: italic;
  line-height: 1.45;
  margin: 0.2rem 0 0.8rem;
}

.story-figure,
/* .archive-lead-figure, */
.archive-card-figure,
.archive-rail-figure,
.teaching-card-figure {
  /* aspect-ratio: var(--figure-ratio); */
  /* background: var(--vp-c-bg-soft); */
}

.headline-figure {
  --figure-ratio: 16 / 7;
  margin: 0.6rem 0 1rem;
}

.story-figure {
  --figure-ratio: 16 / 8;
}

.archive-lead-figure {
  --figure-ratio: 16 / 9;
  margin: 0;
}

.archive-card-figure {
  --figure-ratio: 16 / 9;
  margin: 0 0 0.75rem;
}

.archive-rail-figure {
  --figure-ratio: 16 / 9;
  margin: 0 0 0.65rem;
}

.teaching-card-figure {
  --figure-ratio: 16 / 9;
  margin: 0 0 0.8rem;
}

.headline-figure img,
.story-figure img,
.archive-lead-figure img,
.archive-card-figure img,
.archive-rail-figure img,
.teaching-card-figure img {
  display: block;
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.lead {
  color: var(--paper-ink);
  font-size: var(--type-body-large);
  line-height: 1.56;
  margin: 0;
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.8rem;
  margin-top: 0.85rem;
}

.briefing {
  border-right: 1px solid var(--paper-rule);
  display: grid;
  gap: 1.35rem;
  order: 1;
  padding-right: 1.35rem;
}

.profile-panel > p:not(.section-kicker),
.theme-list li {
  font-size: var(--type-body-large);
  line-height: 1.5;
}

.profile-panel > p:not(.section-kicker) {
  color: var(--paper-muted);
  margin: 0;
}

.theme-list {
  border-top: 0;
  list-style: none;
  margin: 0.35rem 0 0;
  padding: 0;
}

.theme-list li {
  border-bottom: 0;
  color: var(--paper-muted);
}

.content-section {
  padding: 3rem 0;
}

.section-heading {
  align-items: center;
  border-bottom: 1.0px solid var(--paper-rule);
  /* border-top: 1.5px solid var(--paper-accent); */
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
}

.section-heading h2 {
  border-top: 0;
  color: var(--paper-accent);
  font-family: inherit;
  font-size: var(--type-body-large);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.25;
  margin: 0;
  padding-top: 0;
  text-transform: uppercase;
}

.teaching-heading,
.work-heading {
  justify-content: space-between;
}

.carousel-controls {
  display: flex;
  gap: 0.3rem;
  margin-left: auto;
}

.carousel-button {
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--paper-ink);
  cursor: pointer;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 2rem;
}

.carousel-button::before {
  border-left: 3px solid currentColor;
  border-top: 3px solid currentColor;
  content: '';
  display: block;
  height: 0.75rem;
  width: 0.75rem;
}

.carousel-button--prev::before {
  transform: rotate(-45deg);
}

.carousel-button--next::before {
  transform: rotate(135deg);
}

.carousel-button:hover,
.carousel-button:focus-visible {
  color: var(--paper-accent);
}

.carousel-button:focus-visible {
  outline: 2px solid var(--paper-accent);
  outline-offset: 2px;
}

:is(.text-entry, .experience-entry, .teaching-card) h3 {
  font-size: var(--type-story);
  line-height: 1.18;
  margin: 0.4rem 0 0.3rem;
}

:is(
  .text-entry,
  .archive-lead-body,
  .archive-card,
  .archive-rail-entry,
  .experience-entry,
  .teaching-card
) > p:not(.byline) {
  color: var(--paper-muted);
  font-size: var(--type-body);
  line-height: 1.55;
  margin: 0.45rem 0 0;
}

.archive-layout {
  align-items: start;
  display: grid;
  gap: 1.3rem 1.9rem;
  grid-template-columns: minmax(0, 3.15fr) minmax(250px, 0.95fr);
}

.archive-lead {
  /* border-bottom: 1px solid var(--paper-rule); */
  display: grid;
  gap: 0.9rem;
  padding-bottom: 1.1rem;
}

.archive-lead-top {
  align-items: center;
  display: grid;
  gap: 1.35rem;
  grid-template-columns: minmax(210px, 0.34fr) minmax(0, 0.66fr);
}

.archive-lead h3 {
  font-size: var(--type-story-lead);
  line-height: 1.14;
  margin: 0 0 0.45rem;
}

.archive-lead-heading,
.archive-lead-body {
  min-width: 0;
}

.archive-lead-body > p:not(.byline) {
  font-size: var(--type-body-large);
  line-height: 1.5;
}

.archive-rail {
  display: grid;
  grid-column: 2;
  grid-row: 1 / span 2;
  padding-left: 1.35rem;
}

.archive-rail-entry {
  /* border-top: 1px solid var(--paper-rule); */
  padding: 0.85rem 0;
}

.archive-rail-entry:first-child {
  border-top: 0;
  padding-top: 0;
}

.archive-rail-entry:last-child {
  padding-bottom: 0;
}

.archive-rail-entry h3 {
  font-size: var(--type-story-compact);
  line-height: 1.16;
  margin: 0 0 0.35rem;
}

.archive-rail-entry .byline {
  font-size: var(--type-small);
  margin-bottom: 0.45rem;
}

.archive-rail-entry > p:not(.byline) {
  font-size: var(--type-body);
  line-height: 1.42;
}

.archive-cards {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));
}

.archive-card {
  min-width: 0;
  padding-right: 1.25rem;
}

.archive-card:last-child {
  border-right: 0;
  padding-right: 0;
}

.archive-card h3 {
  font-size: var(--type-story-compact);
  line-height: 1.16;
  margin: 0 0 0.35rem;
}

.archive-card .byline {
  font-size: var(--type-small);
  margin-bottom: 0.5rem;
}

.archive-card > p:not(.byline) {
  font-size: var(--type-body);
  line-height: 1.4rem;
}

.text-entry,
.experience-entry {
  break-inside: avoid;
  border-top: 1px solid var(--paper-rule);
  padding: 0.85rem 0 1rem;
}

.text-entry:first-child,
.experience-entry:first-child {
  border-top: 0;
  padding-top: 0;
}

.teaching-carousel,
.experience-carousel {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  padding: 0 0 0.35rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.teaching-carousel::-webkit-scrollbar,
.experience-carousel::-webkit-scrollbar {
  display: none;
}

.teaching-carousel:focus-visible,
.experience-carousel:focus-visible {
  outline: 2px solid var(--paper-accent);
  outline-offset: 4px;
}

.teaching-carousel-column {
  border-right: 1px solid var(--paper-rule);
  display: grid;
  flex: 0 0 clamp(230px, 24vw, 280px);
  min-width: 0;
  padding-right: 1.25rem;
  scroll-snap-align: start;
}

.teaching-carousel-column--visual {
  flex-basis: clamp(360px, 38vw, 470px);
}

.teaching-carousel-column:last-child {
  border-right: 0;
}

.teaching-carousel-column--stacked .teaching-card + .teaching-card {
  border-top: 1px solid var(--paper-rule);
  margin-top: 0.85rem;
  padding-top: 0.85rem;
}

.experience-carousel-card {
  border-right: 1px solid var(--paper-rule);
  border-top: 0;
  flex: 0 0 clamp(310px, 34vw, 430px);
  min-width: 0;
  padding: 0 1.25rem 0 0;
  scroll-snap-align: start;
}

.experience-carousel-card:last-child {
  border-right: 0;
}

.detail-list {
  color: var(--paper-muted);
  font-size: var(--type-body);
  line-height: 1.55;
  margin: 0.45rem 0 0;
  padding-left: 1.1rem;
}

.detail-list li {
  margin: 0.25rem 0;
}

@media (max-width: 960px) {
  .newspaper-home {
    --type-display: 2.5rem;
    --type-headline: 1.58rem;
    --type-section: 1.28rem;
    --type-story-lead: 1.22rem;
  }

  .front-page {
    grid-template-columns: 1fr;
  }

  .briefing {
    border-right: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-right: 0;
  }

  .archive-layout {
    grid-template-columns: 1fr;
  }

  .archive-lead-top {
    grid-template-columns: minmax(210px, 0.38fr) minmax(0, 0.62fr);
  }

  .archive-rail {
    border-left: 0;
    border-top: 1px solid var(--paper-rule);
    gap: 1.25rem;
    grid-column: auto;
    grid-row: auto;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 0;
    padding-top: 1.1rem;
  }

  .archive-rail-entry,
  .archive-rail-entry:first-child {
    border-top: 0;
    padding: 0;
  }

  .archive-card,
  .archive-card:last-child {
    border-right: 0;
    padding-right: 0;
  }

  .archive-card {
    border-top: 1px solid var(--paper-rule);
    padding-top: 1rem;
  }

  .teaching-carousel,
  .experience-carousel {
    gap: 1rem;
  }

  .teaching-carousel-column {
    flex-basis: min(42vw, 280px);
  }

  .teaching-carousel-column--visual {
    flex-basis: min(52vw, 420px);
  }

  .experience-carousel-card {
    flex-basis: min(58vw, 430px);
    padding-right: 1rem;
  }
}

@media (max-width: 640px) {
  .newspaper-home {
    --type-display: 2.2rem;
    --type-headline: 1.42rem;
    --type-section: 1.2rem;
    --type-story: 1.02rem;
    --type-story-lead: 1.12rem;
    --type-story-compact: 0.98rem;
    --type-body-large: 0.92rem;
    padding: 0.5rem 1rem 3rem;
  }

  .headline-figure {
    aspect-ratio: 4 / 3;
  }

  .briefing {
    grid-template-columns: 1fr;
  }

  .archive-lead,
  .archive-lead-top,
  .archive-cards,
  .archive-rail {
    grid-template-columns: 1fr;
  }

  .archive-lead,
  .archive-lead-top {
    gap: 0.85rem;
  }

  .archive-lead-figure {
    grid-row: 1;
  }

  .archive-rail-entry {
    border-top: 1px solid var(--paper-rule);
    padding-top: 1rem;
  }

  .archive-rail-entry:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .teaching-carousel,
  .experience-carousel {
    gap: 1rem;
  }

  .teaching-carousel-column,
  .teaching-carousel-column--visual {
    flex-basis: 82vw;
  }

  .experience-carousel-card {
    flex-basis: 82vw;
    padding-right: 1rem;
  }

}
</style>
