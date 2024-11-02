<script setup lang="ts">
import PatrickCV from "~/assets/DIESTA_PATRICK_TED_CV.pdf";

const handleDownloadCV = () => {
  if (!window.confirm("Are you sure you want to download this CV?")) return;
  const link = document.createElement("a");
  link.href = PatrickCV;
  link.download = "DIESTA_PATRICK_TED_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <section
    id="about"
    class="bento-item col-span-3 md:col-span-2 space-y-4"
    aria-labelledby="about-heading"
  >
    <article class="flex flex-wrap gap-2 justify-between items-start">
      <div>
        <h1>Patrick Diesta</h1>
        <h1 class="text-2xl">Web Developer</h1>
      </div>
      <button
        class="btn px-4 py-2"
        @click="handleDownloadCV"
        aria-label="Download Patrick's CV"
      >
        <span>Download CV</span>
        <Icon name="ion:download" size="20" />
      </button>
    </article>
    <article>
      <h1 class="mb-2">About Me</h1>
      <p>
        Motivated IT student with a passion for software development. Skilled in
        programming, problem-solving, and eager to contribute to innovative
        technology solutions.
      </p>
    </article>
  </section>
</template>
