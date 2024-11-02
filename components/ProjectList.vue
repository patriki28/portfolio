<script setup lang="ts">
import projects from "~/data/projects.json";
import placeholder from "~/assets/images/placeholder.png";
</script>

<template>
  <div class="flex overflow-x-auto scrollbar gap-4" role="list">
    <a
      v-for="item in projects"
      :key="item.title"
      :href="item.path"
      role="listitem"
      target="_blank"
      rel="noopener noreferrer"
      class="flex-shrink-0 w-[150px]"
    >
      <img
        :src="item.image || placeholder"
        :alt="item.title ? `${item.title} project image` : 'Placeholder image'"
        class="w-full h-[150px] object-cover rounded-md"
      />
      <article class="p-2">
        <h2 class="text-sm font-medium">{{ item.title }}</h2>
      </article>
    </a>
  </div>
</template>
