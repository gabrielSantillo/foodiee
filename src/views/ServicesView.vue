<template>
    <div>
        <header-component></header-component>
        <services-compononet></services-compononet>
        <footer-component></footer-component>
    </div>
</template>

<script>
import ServicesCompononet from '@/components/ServicesComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
  components: { ServicesCompononet, HeaderComponent, FooterComponent },
        
    }
</script>

<style lang="scss" scoped>

</style>