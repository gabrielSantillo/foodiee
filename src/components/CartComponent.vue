<template>
    <div>
        <section class="about section bd-container" ref="about" v-scroll-reveal>
            <div class="about__container bd-grid">
                <div class="about__data">
                    <span class="section-subtitle">About us</span>
                    <h2 class="section-title">We cook the best <br> tasty food.</h2>
                    <p class="about__description">We cook the best food in the entire city, with excellent customer service,
                    the best meals and at the best price, visit us.</p>
                    <a href="#" class="button">Explore History</a>
                </div>

                <img src="@/assets/about.jpg" alt="" class="about__img">
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

.about__data {
    text-align: center;
}

.about__description {
    margin-bottom: $--mb-3;
}

.about__img {
    max-width: 350px;
    border-radius: .5rem;
    justify-self: center;
}
</style>