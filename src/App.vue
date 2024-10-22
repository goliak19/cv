<script setup></script>

<template>
  <header>
    <nav class="flex justify-center items-center">
      <RouterLink class="m-4" to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
