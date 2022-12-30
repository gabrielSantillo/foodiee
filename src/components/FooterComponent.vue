<template>
    <div>
        <section class="footer section bd-container">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <a href="" class="footer__logo">Foodiee</a>
                    <span class="footer__description">Restaurant</span>

                    <div>
                        <a href="" class="footer__social"><i class='bx bxl-github' ></i></a>
                        <a href="" class="footer__social"><i class='bx bxl-linkedin' ></i></a>
                        <a href="" class="footer__social"><i class='bx bx-envelope' ></i></a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Services</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Delivery</a></li>
                        <li><a href="#" class="footer__link">Pricing</a></li>
                        <li><a href="#" class="footer__link">Fast food</a></li>
                        <li><a href="#" class="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Event</a></li>
                        <li><a href="#" class="footer__link">Contact us</a></li>
                        <li><a href="#" class="footer__link">Privacy policy</a></li>
                        <li><a href="#" class="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Adress</h3>
                    <ul>
                        <li>Calgary - Canada</li>
                        <li>Jr Union #999</li>
                        <li>999 - 888 - 777</li>
                        <li>foodiee@gmail.com</li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">&#169; 2022 Gabriel Santillo. All rights reserved.</p>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.footer__container {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
}

.footer__logo {
    font-size: $--h3-font-size;
    color: $--first-color;
    font-weight: $--font-semi-bold;
}

.footer__description {
    display: block;
    font-size: $--small-font-size;
    margin: .25rem 0 $--mb-3;
}

.footer__social {
    font-size: 1.5rem;
    color: $--title-color;
    margin-right: $--mb-2;
}

.footer__title {
    font-size: $--h2-font-size;
    color: $--title-color;
    margin-bottom: $--mb-2;
}

.footer__link {
    display: inline-block;
    color: $--text-color;
    margin-bottom: $--mb-1;
}

.footer__link:hover {
    color: $--first-color;
}

.footer__copy {
    text-align: center;
    font-size: $--small-font-size;
    color: $--text-color-light;
    margin-top: 3.5rem;
}
</style>