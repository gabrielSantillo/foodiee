<template>
    <div>
        <section class="contact section bd-container" ref="contact" v-scroll-reveal>
            <div class="contact__container bd-grid">
                <div class="contact__data">
                    <span class="section-subtitle contact__initial">Let's talk</span>
                    <h2 class="section-title">Contact us</h2>
                    <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you 
                    quickly with our 24/7 chat service.</p>
                </div>
                
                <div class="contact__button">
                    <a href="" class="button">Contact us now</a>
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

.contact__container {
    text-align: center;
}

.contact__description {
    margin-bottom: $--mb-3;
}
</style>