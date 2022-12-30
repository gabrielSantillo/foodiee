<template>
    <div>
        <header-component></header-component>
        <menu-component></menu-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
  components: { HeaderComponent, MenuComponent, FooterComponent },
        
    }
</script>

<style lang="scss" scoped>

</style>