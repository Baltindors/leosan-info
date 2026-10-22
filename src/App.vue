<script setup>
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppNav from './components/AppNav.vue'
</script>

<template>
  <div class="flex min-h-svh flex-col bg-paper font-sans text-ink antialiased">
    <AppNav />
    <div class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <AppFooter />
  </div>
</template>
