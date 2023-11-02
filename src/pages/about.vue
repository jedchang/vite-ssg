<script>
import { useHead } from '@unhead/vue'

export default {
  setup() {
    useHead({
      title: 'ABOUT 頁面',
      meta: [
        {
          name: 'description',
          content: '這是 about 頁面',
        },
      ],
    })
  },
}
</script>

<template>
  <div class="about">
    <h1>這是 about 頁面</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
