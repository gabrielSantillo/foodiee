<template>
  <div class="cart">
    <header-component></header-component>
    <cart-component></cart-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CartComponent from '@/components/CartComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  components: { HeaderComponent, CartComponent, FooterComponent},

}
</script>

    