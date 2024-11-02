<script setup lang="ts">
import skills from "~/data/tech-stack.json";
</script>

<template>
  <div class="flex flex-wrap gap-2" role="list">
    <div
      v-for="(item, index) in skills"
      :key="index"
      role="listitem"
      class="badge px-3"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
