<template>
    <div>
        <section class="menu section bd-container" ref="menu" v-scroll-reveal>
            <span class="section-subtitle">Special</span>
            <h2 class="section-title">Menu of the week</h2>

            <div class="menu__container bd-grid">
                <div class="menu__content">
                    <img src="@/assets/plate1.png" alt="" class="menu__img">
                    <h3 class="menu__name">Barbecue Salad</h3>
                    <span class="menu__detail">Delicious dish</span>
                    <span class="menu__price">$22.00</span>
                    <a href="" class="button menu__button"><i class='bx bx-cart-alt' ></i></a>
                </div>

                <div class="menu__content">
                    <img src="@/assets/plate2.png" alt="" class="menu__img">
                    <h3 class="menu__name">Fish and salad</h3>
                    <span class="menu__detail">Delicious dish</span>
                    <span class="menu__price">$18.00</span>
                    <a href="" class="button menu__button"><i class='bx bx-cart-alt' ></i></a>
                </div>

                <div class="menu__content">
                    <img src="@/assets/plate3.png" alt="" class="menu__img">
                    <h3 class="menu__name">Spinach Salad</h3>
                    <span class="menu__detail">Delicious dish</span>
                    <span class="menu__price">$9.50</span>
                    <a href="" class="button menu__button"><i class='bx bx-cart-alt' ></i></a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.menu__container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 48px;
    justify-content: center;
}

.menu__content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $--container-color;
    border-radius: .5rem;
    box-shadow: 0 2px 4px rgba(3, 74, 40, .15);
    padding: 1.5rem;
    margin: 0 16px;
}

.menu__img {
    width: 200px;
    align-self: center;
    margin-bottom: $--mb-2;
}

.menu__name, .menu__price {
    font-weight: $--font-semi-bold;
    color: $--title-color;
}

.menu__name {
    font-size: $--normal-font-size;
}

.menu__detail {
    margin-bottom: $--mb-1;
}

.menu__button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    padding: .9375rem 1.2195rem;
    border-radius: .5rem 0 .5rem 0;
    font-size: 1.5rem;
}
</style>