<script setup>
import { RouterLink } from 'vue-router'
import { useTitle } from '@vueuse/core'
import AppCard from '../components/AppCard.vue'
import LogoMark from '../components/LogoMark.vue'
import { posts } from '../content/posts.js'

useTitle('Blog · Leonardo Sanchez')

const rise = {
  initial: { opacity: 0, y: 12 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: { duration: 400 },
  },
}
</script>

<template>
  <main class="mx-auto max-w-3xl px-5 py-12 md:py-20">
    <header v-motion :initial="rise.initial" :visibleOnce="rise.visibleOnce">
      <div
        class="grid size-16 place-items-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/15"
      >
        <LogoMark class="h-10" />
      </div>
      <h1 class="mt-5 text-4xl font-medium tracking-tight">Blog</h1>
      <p class="mt-3 text-lg text-muted">Notes on product, platforms, and the work in progress.</p>
    </header>

    <div class="mt-10 space-y-4">
      <RouterLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="block"
      >
        <AppCard
          v-motion
          :initial="rise.initial"
          :visibleOnce="rise.visibleOnce"
          class="transition-shadow hover:shadow-card"
        >
          <p class="text-sm text-muted">{{ post.dateLabel }}</p>
          <h2 class="mt-1 text-xl font-medium tracking-tight">{{ post.title }}</h2>
          <p class="mt-2 leading-relaxed text-muted">{{ post.description }}</p>
        </AppCard>
      </RouterLink>
    </div>
  </main>
</template>
