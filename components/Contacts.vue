<template>
  <section
    id="contacts"
    class="bento-item col-span-3 md:col-span-1 space-y-4"
    aria-labelledby="contacts-heading"
  >
    <div class="heading-container mb-2">
      <Icon name="ion:mail" size="20" aria-label="Email Icon" />
      <h1>Contact Me</h1>
    </div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:diestapatrick1@gmail.com"
    >
      <h2>Email</h2>
      <p>diestapatrick1@gmail.com</p>
    </a>
    <div>
      <h2>Mobile Number</h2>
      <p>0930 173 8569</p>
    </div>
    <div>
      <h2 class="font-semibold mb-2">Social Links</h2>
      <SocialLinkList />
    </div>
  </section>
</template>
