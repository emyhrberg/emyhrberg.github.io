<!-- src/components/ExternalLink.vue -->
<template>
    <a
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      :title="title || href"
      class="ext-link"
    >
      <slot />
    </a>
  </template>
  
  <script>
  export default {
    name: 'ExternalLink',
    props: {
      href: { type: String, required: true },
      title: { type: String, default: '' }
    }
  }
  </script>
  