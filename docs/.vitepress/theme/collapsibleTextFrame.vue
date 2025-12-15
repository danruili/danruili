<!-- CollapsibleTextFrame.vue -->
<template>
  <section class="ctf">
    <button
      type="button"
      class="ctf__header"
      :aria-expanded="open ? 'true' : 'false'"
      @click="toggle"
    >
      <span class="ctf__title">{{ title }}</span>

      <!-- bigger arrow + rotates -->
      <span class="ctf__chev" aria-hidden="true" :class="{ 'is-open': open }">▾</span>
    </button>

    <!-- smooth expand/fold animation via max-height + opacity -->
    <div
      ref="contentEl"
      class="ctf__content"
      :class="{ 'is-open': open }"
      :style="{ maxHeight }"
      :aria-hidden="open ? 'false' : 'true'"
    >
      <div class="ctf__contentInner">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

type Props = {
  title: string;
  defaultOpen?: boolean; // collapsed by default
};

const props = withDefaults(defineProps<Props>(), { defaultOpen: false });

const open = ref<boolean>(props.defaultOpen);
const contentEl = ref<HTMLElement | null>(null);
const maxHeight = ref<string>(open.value ? "none" : "0px");

let ro: ResizeObserver | null = null;

function setHeight() {
  const el = contentEl.value;
  if (!el) return;

  if (!open.value) {
    // closing: animate from current px height to 0
    const current = el.scrollHeight;
    maxHeight.value = `${current}px`;
    // next frame -> 0 to trigger transition
    requestAnimationFrame(() => (maxHeight.value = "0px"));
    return;
  }

  // opening: animate from 0 to scrollHeight
  if (maxHeight.value === "none") maxHeight.value = "0px";
  requestAnimationFrame(() => {
    if (!contentEl.value) return;
    maxHeight.value = `${contentEl.value.scrollHeight}px`;
  });
}

function toggle() {
  open.value = !open.value;
}

function onTransitionEnd(e: TransitionEvent) {
  if (e.propertyName !== "max-height") return;
  // after opening completes, let it size naturally
  if (open.value) maxHeight.value = "none";
}

watch(open, async () => {
  await nextTick();
  setHeight();
});

onMounted(() => {
  const el = contentEl.value;
  if (!el) return;

  el.addEventListener("transitionend", onTransitionEnd);

  // if slotted content changes while open, keep the px height accurate
  ro = new ResizeObserver(() => {
    if (!open.value) return;
    if (maxHeight.value === "none") return; // already natural
    setHeight();
  });
  ro.observe(el);

  setHeight();
});

onBeforeUnmount(() => {
  if (contentEl.value) contentEl.value.removeEventListener("transitionend", onTransitionEnd);
  ro?.disconnect();
});
</script>

<style scoped>
.ctf {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.ctf__header {
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: #f9fafb;
  border: 0;
  cursor: pointer;
  text-align: left;
}

.ctf__header:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.ctf__title {
  font-weight: 600;
  color: #111827;
}

/* ✅ enlarged arrow */
.ctf__chev {
  font-size: 22px;         /* bigger */
  line-height: 1;
  width: 28px;             /* keeps alignment stable */
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #6b7280;
  transition: transform 500ms ease, background-color 500ms ease;
}

.ctf__header:hover .ctf__chev {
  background: rgba(0, 0, 0, 0.05);
}

.ctf__chev.is-open {
  transform: rotate(180deg);
}

/* ✅ expand/fold animation */
.ctf__content {
  overflow: hidden;
  max-height: 0px;
  opacity: 0;
  transform: translateY(-4px);
  transition:
    max-height 260ms ease,
    opacity 200ms ease,
    transform 260ms ease;
  will-change: max-height, opacity, transform;
}

.ctf__content.is-open {
  opacity: 1;
  transform: translateY(0);
}

.ctf__contentInner {
  padding: 12px 12px 12px;
  color: #374151;
  line-height: 1.5;
}

.ctf__contentInner :deep(p) {
  margin: 0 0 10px;
}

.ctf__contentInner :deep(p:last-child) {
  margin-bottom: 0;
}

/* respects reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .ctf__chev,
  .ctf__content {
    transition: none !important;
  }
}
</style>
