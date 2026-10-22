<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { getPost } from '../content/posts.js'

const route = useRoute()
const post = computed(() => getPost(route.params.slug))

useTitle(computed(() => (post.value ? post.value.title : 'Post not found')))
</script>

<template>
  <main class="mx-auto max-w-3xl px-5 py-12 md:py-20">
    <article v-if="post">
      <RouterLink to="/blog" class="text-sm text-accent">Back to blog</RouterLink>
      <p class="mt-6 text-sm text-muted">{{ post.dateLabel }}</p>
      <h1 class="mt-2 text-4xl font-medium tracking-tight">{{ post.title }}</h1>
      <p class="mt-3 text-lg text-muted">{{ post.description }}</p>
      <div class="mt-10">
        <component :is="post.component" />
      </div>
    </article>

    <div v-else>
      <h1 class="text-3xl font-medium tracking-tight">Post not found</h1>
      <p class="mt-3 text-muted">That article is not in the blog.</p>
      <RouterLink to="/blog" class="mt-6 inline-block text-sm text-accent">Back to blog</RouterLink>
    </div>
  </main>
</template>
