<script setup>
import { useHead } from '@unhead/vue'
useHead({
  title: 'INDEX 頁面',
  meta: [
    {
      name: 'description',
      content: '這是 index 頁面',
    },
  ],
})
</script>

<template>
  <div class="index">
    <h1>這是 index 頁面</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .index {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
