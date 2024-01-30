<template>
  <div>
    <div style="display: flex; gap: 10px">
      <NuxtLink to="/portfolio/highlights"
        >Route going through Middleware</NuxtLink
      >
      <NuxtLink to="/portfolio/highlights2?filter=7"
        >Query set via Link, but still going through Middleware</NuxtLink
      >
      <NuxtLink to="/portfolio/highlights3?filter=10"
        >Query set via Link, no Middleware</NuxtLink
      >
      <NuxtLink to="/">Index</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>
