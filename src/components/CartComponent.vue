<template>
    <div>
        <section class="cart section bd-container" ref="cart" v-scroll-reveal>
            <div class="cart__container bd-grid" v-for="(item, index) in items" :key="index">
                <div class="cart__data">
                    <span class="section-subtitle">{{item['name']}}</span>
                    <h2 class="section-title">${{item['price']}}</h2>
                    <v-btn class="button" depressed color="error">
                        Delete
                    </v-btn>
                </div>

                <img :src="item['file_name']" alt="" class="cart__img">
            </div>
        </section>
        <section>
            <div>
                <p>Total: R$ {{}}</p>
                <button>Confirm</button>
            </div>
        </section>
    </div>
</template>

<script>
import cookies from "vue-cookies"
    export default {
        mounted () {
            this.items = cookies.get('cart')
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

.cart__container {
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
    padding: 1.5rem;
    max-width: 60%;
    
}

.cart__container {
    margin-bottom: 64px;
}

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

.delete {
    background-color: red;
}
</style>