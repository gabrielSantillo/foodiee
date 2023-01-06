<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';
/* MEDIA QUERIES */
@media screen and (min-width: 768px){
  :root {
    --biggest-font-size: 4rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}
@media screen and (min-width: 576px) {
  .home__container, .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .about__img {
    order: -1;
  }
  .contact__container {
    grid-template-columns: 1.75fr 1fr;
    align-items: center;
  }
  .contact__button {
    justify-self: center;
  }
}
@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
  .section {
    padding-top: 8rem;
  }
  .nav {
    height: calc($--header-height + 1.5rem);
  }
  .nav__list {
    display: grid;
    grid-auto-flow: column;
  }
  .nav__item {
    margin-left: $--mb-5;
    margin-top: 16px;
  }
  .home__container {
    height: 100vh;
    justify-items: center;
  }
  .menu__content {
    padding: 1.5rem;
  }
}
@media screen and (min-width: 960px) {
  .bd-container {
    margin-left: auto;
    margin-right: auto;
  }
  .home__img {
    width: 500px;
  }
  .cart__data {
    display: grid;
    transform: translateX(-50px);
     > .section-subtitle, .section-title, .cart__description, .button {
      justify-self: start;
      text-align: start;
     }
  }
}
/* LAYOUT */
.bd-container {
  width: calc(100% - 2rem);
  margin-left: $--mb-2;
  margin-right: $--mb-2;
}
.bd-grid {
  display: grid;
  gap: 1.5rem;
}
.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $--z-fixed;
  background-color: $--body-color;
}
*, ::before, ::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: $--header-height 0 0 0;
  font-family: $--body-font;
  font-size: $--normal-font-size;
  background-color: $--body-color;
  color: $--text-color;
  line-height: 1.6;
}
h1, h2, h3, p, ul {
  margin: 0;
}
ul {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
}
/* CLASS CSS */
.section {
  padding: 4rem 0 2rem;
}
.section-title, .section-subtitle {
  text-align: center;
}
.section-title {
  font-size: $--h1-font-size;
  color: $--title-color;
  margin-bottom: $--mb-3;
}
.section-subtitle {
  display: block;
  color: $--first-color;
  font-weight: $--font-medium;
  margin-bottom: $--mb-1;
}
.button {
    display: inline-block;
    background-color: $--first-color;
    color: #FFF;
    padding: .75rem 1rem;
    border-radius: .5rem;
    transition: .3s;
}
.button:hover {
    background-color: $--first-color-alt;
}

.alert {
  display: grid;
  place-items: center;

  > v-alert {
    max-width: 50%;
  }
}
</style>
