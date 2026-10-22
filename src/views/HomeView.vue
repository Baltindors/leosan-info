<script setup>
import { useTitle } from '@vueuse/core'
import AppCard from '../components/AppCard.vue'
import { profile } from '../data/profile.js'

useTitle('Leonardo Sanchez')

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
      <p class="text-sm text-muted">{{ profile.location }}</p>
      <h1 class="mt-3 text-4xl font-medium tracking-tight text-ink md:text-5xl">
        {{ profile.name }}
      </h1>
      <p class="mt-3 text-lg text-muted">{{ profile.title }}</p>
    </header>

    <section class="mt-14">
      <h2 class="text-sm font-medium text-muted">{{ profile.currentFocus.label }}</h2>
      <AppCard
        v-motion
        class="mt-4"
        :initial="rise.initial"
        :visibleOnce="rise.visibleOnce"
      >
        <p class="text-lg leading-relaxed">{{ profile.currentFocus.summary }}</p>
      </AppCard>
    </section>

    <section
      v-motion
      class="mt-14"
      :initial="rise.initial"
      :visibleOnce="rise.visibleOnce"
    >
      <h2 class="text-sm font-medium text-muted">Profile</h2>
      <p class="mt-4 text-lg leading-relaxed">{{ profile.summary }}</p>
    </section>

    <section
      v-motion
      class="mt-14"
      :initial="rise.initial"
      :visibleOnce="rise.visibleOnce"
    >
      <h2 class="text-sm font-medium text-muted">Stack</h2>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="item in profile.stack"
          :key="item"
          class="rounded-full bg-ink/5 px-3 py-1 text-sm text-muted"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="mt-14">
      <h2 class="text-sm font-medium text-muted">Work</h2>
      <div class="mt-4 space-y-4">
        <AppCard
          v-for="job in profile.experience"
          :key="job.org"
          v-motion
          :initial="rise.initial"
          :visibleOnce="rise.visibleOnce"
        >
          <p class="text-sm text-muted">{{ job.dates }}</p>
          <h3 class="mt-1 text-lg font-medium tracking-tight">{{ job.role }}</h3>
          <p class="mt-1 text-sm text-accent">{{ job.org }}</p>
          <p class="mt-3 leading-relaxed">{{ job.summary }}</p>
        </AppCard>
      </div>
    </section>

    <section
      v-motion
      class="mt-14"
      :initial="rise.initial"
      :visibleOnce="rise.visibleOnce"
    >
      <h2 class="text-sm font-medium text-muted">Hobbies</h2>
      <ul class="mt-4 space-y-3">
        <li v-for="hobby in profile.hobbies" :key="hobby.id" class="text-ink">
          <p>{{ hobby.name || 'To be added' }}</p>
          <p v-if="hobby.summary" class="text-sm text-muted">{{ hobby.summary }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>
