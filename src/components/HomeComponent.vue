<template>
    <div>
        <section class="home" ref="home" v-scroll-reveal>
            <div class="home__container bd-container bd-grid">
                <div class="home__data">
                    <h1 class="home__title">Foodiee</h1>
                    <h2 class="home__subtitle">Try the best food of <br> the week.</h2>
                    <router-link to="" class="button" color="#FFF">View Menu</router-link>
                </div>

                <img src="@/assets/home.png" alt="" class="home__img">
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.home__container {
    height: calc(100vh - $--header-height);
    align-content: center;
}

.home__title {
    font-size: $--biggest-font-size;
    color: $--first-color;
    margin-bottom: $--mb-1;
}

.home__subtitle {
    font-size: $--h1-font-size;
    color: $--title-color;
    margin-bottom: $--mb-4;
}
</style>