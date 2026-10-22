<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useMediaQuery, useWindowScroll } from '@vueuse/core'

const route = useRoute()
const open = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 0)

const links = [
  { to: '/', label: 'Profile' },
  { to: '/blog', label: 'Blog' },
]

watch(isDesktop, (desktop) => {
  if (desktop) open.value = false
})

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-line bg-paper/70 backdrop-blur-xl"
    :class="scrolled ? 'shadow-card' : ''"
  >
    <div class="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
      <RouterLink to="/" class="text-sm font-medium tracking-tight text-ink">
        Leonardo Sanchez
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          v-slot="{ href, navigate, isExactActive }"
          :to="link.to"
          custom
        >
          <a
            :href="href"
            class="text-sm transition-colors"
            :class="isExactActive ? 'text-accent' : 'text-muted hover:text-ink'"
            @click="navigate"
          >
            {{ link.label }}
          </a>
        </RouterLink>
      </nav>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 5.5h14M3 10h14M3 14.5h14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 5l10 10M15 5L5 15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <nav
      v-show="open"
      id="mobile-nav"
      class="border-t border-line px-5 py-2 md:hidden"
      aria-label="Mobile"
    >
      <RouterLink
        v-for="link in links"
        :key="link.to"
        v-slot="{ href, navigate, isExactActive }"
        :to="link.to"
        custom
      >
        <a
          :href="href"
          class="block py-3 text-base"
          :class="isExactActive ? 'text-accent' : 'text-ink'"
          @click="navigate"
        >
          {{ link.label }}
        </a>
      </RouterLink>
    </nav>
  </header>
</template>
