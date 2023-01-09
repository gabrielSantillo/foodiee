<template>
    <div>
        <header-component></header-component>
        <orders-compononet></orders-compononet>
        <footer-component></footer-component>
    </div>
</template>

<script>
import OrdersCompononet from '@/components/OrdersComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
  components: { OrdersCompononet, HeaderComponent, FooterComponent },
        
    }
</script>

<style lang="scss" scoped>

</style>