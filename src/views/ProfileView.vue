<template>
    <div>
        <header-component></header-component>
        <contact-component></contact-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
  components: { HeaderComponent, ContactComponent, FooterComponent },
        
    }
</script>
    

<style lang="scss" scoped>

</style>