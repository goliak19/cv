<template>
  <div :class="currentTheme">
    <button @click="toggleTheme">Cambiar Tema</button>
    <h1>Hola, este es un tema {{ currentTheme }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: false,
    }
  },
  computed: {
    currentTheme() {
      return this.isDarkTheme ? 'dark-theme' : 'light-theme'
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme
      // Guardar la preferencia del tema en localStorage
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light')
    },
  },
  mounted() {
    // Cargar la preferencia del tema desde localStorage
    const savedTheme = localStorage.getItem('theme')
    this.isDarkTheme = savedTheme === 'dark'
  },
}
</script>
