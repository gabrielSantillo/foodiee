<template>
  <div>
    <div class="alert">
      <v-alert
        v-if="alert"
        outlined
        type="warning"
        prominent
        border="left"
        dismissible
        transition="fade-transition"
      >
        {{ message }}
      </v-alert>
    </div>

    <section class="home" ref="home" v-scroll-reveal v-for="restaurant in restaurants" :key="restaurant['id']">
      <div class="home__container bd-container bd-grid">
        <div class="home__data">
          <h1 class="home__title">{{restaurant['name']}}</h1>
          <h2 class="home__subtitle">
                {{restaurant['bio']}}
          </h2>
          <router-link to="/menu" class="button" color="#FFF">View Menu</router-link>
        </div>

        <img src="@/assets/home.png" alt="" class="home__img" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .request({
        url: `http://127.0.0.1:5000/api/all-restaurants`,
      })
      .then((response) => {
        this.restaurants = response["data"];
        this.restaurants
      })
      .catch((error) => {
        this.message = "Sorry, an error has occurred. Please, reload the page."
        this.alert = true
        error;
      });
  },

  data() {
    return {
      restaurants: [],
      message: "",
      alert: false
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.home__container {
  height: calc(100vh - $--header-height);
  align-content: center;
  margin-top: 32px;
}

.home__title {
  font-size: $--biggest-font-size;
  color: $--first-color;
  margin-bottom: $--mb-1;
}

.home__subtitle {
  font-size: $--h2-font-size;
  color: $--title-color;
  margin-bottom: $--mb-4;
}

.alert {
  display: grid;
  place-items: center;

  > v-alert {
    max-width: 50%;
  }
}
</style>
