<script setup lang="ts">
import socials from "~/data/social-links.json";
</script>

<template>
  <div class="grid grid-cols-3 gap-2" role="list">
    <a
      v-for="item in socials"
      :key="item.label"
      :href="item.path"
      role="listitem"
      target="_blank"
      rel="noopener noreferrer"
      class="badge py-1"
    >
      <Icon :name="item.icon" size="30" />
    </a>
  </div>
</template>
