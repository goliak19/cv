<script setup>
import Select from '@/components/Select.vue'

console.log(navigator.language)
</script>

<template>
  <section>
    <nav class="navbar">
      <ul>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#testimonios">Testimonios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
      </ul>
    </nav>
    <Select />
    <h1>{{ $t('HELLO') }}</h1>

    <section id="nosotros">
      <h2>Nosotros</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        voluptatem iste, excepturi culpa ab consequuntur ipsum! Sint delectus
        ea, labore quas aut nobis. Eveniet tempora et eaque, architecto tenetur
        molestias.
      </p>
    </section>

    <section id="testimonios">
      <h2>Testimonios</h2>
      <p>"Excelentes servicios, muy profesionales!" - Cliente Satisfecho</p>
      <p>"Recomiendo esta empresa al 100%." - Otro Cliente Satisfecho</p>
    </section>

    <section id="portafolio">
      <h2>Portafolio</h2>
      <p>Aquí puedes ver algunos de nuestros proyectos más destacados.</p>
    </section>
  </section>
</template>
