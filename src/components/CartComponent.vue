<template>
    <div>
        <section class="cart section bd-container" ref="cart" v-scroll-reveal>
            <div class="cart__container bd-grid">
                <div class="cart__data">
                    <span class="section-subtitle">About us</span>
                    <h2 class="section-title">We cook the best <br> tasty food.</h2>
                    <p class="cart__description">We cook the best food in the entire city, with excellent     
                    customer service,
                    the best meals and at the best price, visit us.</p>
                    <a href="#" class="button">Explore History</a>
                </div>

                <img src="@/assets/about.jpg" alt="" class="cart__img">
            </div>
        </section>
    </div>
</template>

<script>
import cookies from "vue-cookies"
    export default {
        mounted () {
            let items = cookies.get('cart')
            this.items = items
        },

        data() {
            return {
                items: undefined
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.cart__data {
    text-align: center;
}

.cart__description {
    margin-bottom: $--mb-3;
}

.cart__img {
    max-width: 250px;
    border-radius: .5rem;
    justify-self: center;
}
</style>