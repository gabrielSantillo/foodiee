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
          <button class="button" @click="menu_page(restaurant, $event)">View More</button>
        </div>
        
        <img :src="restaurant['file_name']" alt="" class="home__img" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"

export default {
  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/all-restaurants`,
      })
      .then((response) => {
        this.restaurants = response["data"];
        this.get_files(this.restaurants)
      })
      .catch((error) => {
        this.message = "Sorry, an error has occurred. Please, reload the page."
        this.alert = true
        error;
      });
  },

  methods: {
    get_files(restaurants) {
        for (let i = 0; i < restaurants.length; i++) {
        axios
          .request({
            // Standard URL and params
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-images`,
            params: {
              file_name: restaurants[i]['file_name'],
            },
            // THIS MUST BE HERE EXACTLY THE SAME
            // This lets axios know to expect a blob (one way to represent a file)
            responseType: "blob",
          })
          .then((response) => {
            // Cool built in function that allows us to take file data and create a URL for it
            // This is so we can use it for things like image src and such
            let src = URL.createObjectURL(response["data"]);
            /* adding this paths since they strings to the images_src array to then, loop through this array and print the images onto the page */
            this.restaurants[i]['file_name'] = src
          })
          .catch((error) => {
            this.message = "Sorry, an error has occurred. Please, reload the page."
            this.alert = true
            error;
          });
      }
    },

    menu_page(restaurant) {
      /* stringfy the restaurant object */
      let restaurant_object_json = JSON.stringify(restaurant);
      /* set the cookie with the JSON restaurant value */
      cookies.set(`restaurant_object`, restaurant_object_json);
      /* set a cookie with the restaurant_id value */
      cookies.set(`restaurant_id`, `${restaurant[`id`]}`);
      /* leave the user to restaraunt menu options */
      this.$router.push(`menu`);
    }
  },

  data() {
    return {
      restaurants: [],
      message: "",
      alert: false,
      images_src: []
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

.home__img {
  max-width: 300px;
}
</style>
