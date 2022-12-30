<template>
  <div class="about">
    <header-component></header-component>
    <about-component></about-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  components: { HeaderComponent, AboutComponent, FooterComponent},

}
</script>

    