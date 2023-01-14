<template>
  <div>
    <div class="l-header" ref="header" @scroll="scrollHeader">
      <nav class="nav bd-container">
        <router-link to="/home" class="nav__logo">Foodiee</router-link>

        <div class="nav__menu" ref="nav-menu" v-if="show_menu">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link to="/home" class="nav__link">Home</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/cart" class="nav__link">Cart</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/orders" class="nav__link">Orders</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/menu" class="nav__link">Menu</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/profile" class="nav__link">Profile</router-link>
            </li>
          </ul>
        </div>

        <div class="nav__toggle" ref="nav-toggle">
          <i class="bx bx-menu" @click="toggle_menu"></i>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle_menu() {
      this.show_menu = !this.show_menu;
    },

    scrollHeader() {
      let nav = this.$refs["scroll-top"];
      if (this.scrollY >= 200) {
        nav.classList.add("scroll-header");
      } else {
        nav.classList.add("scroll-header");
      }
    },

    scrollTop() {
      let scrollTop = this.$refs["header"];
      if (this.scrollY >= 560) {
        scrollTop.classList.add("scroll-top");
      } else {
        scrollTop.classList.add("scroll-top");
      }
    },
  },

  data() {
    return {
      show_menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

/* NAV */
.nav {
  max-width: 2000px;
  height: $--header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: $--header-height;
    left: 0;
    width: 100%;
    padding: 1.5rem 0 1rem;
    text-align: center;
    background-color: $--body-color;
    transition: 0.4s;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 1rem 1rem;
    z-index: $--z-fixed;
  }
}

.nav__item {
  margin-bottom: $--mb-2;
}

.nav__link,
.nav__logo,
.nav__toggle {
  color: $--text-color;
  font-weight: $--font-medium;
}

.nav__logo:hover {
  color: $--first-color;
}

.nav__link {
  transition: 0.3s;
}

.nav__link:hover {
  color: $--first-color;
}

.nav__toggle {
  font-size: 1.8rem;
  cursor: pointer;
}


</style>
