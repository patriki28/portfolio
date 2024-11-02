<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>

<template>
  <button
    @click="toggleTheme"
    class="theme-controller"
    :aria-label="
      colorMode.preference === 'light'
        ? 'Toggle Theme to Dark'
        : 'Toggle Theme to Light'
    "
  >
    <Icon
      v-if="colorMode.preference === 'light'"
      name="ion:md-moon"
      aria-label="Moon Icon"
      size="20"
    />
    <Icon v-else name="ion:md-sunny" aria-label="Sunny Icon" size="20" />
  </button>
</template>
