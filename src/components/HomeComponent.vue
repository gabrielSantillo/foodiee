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
        for(let i = 0; i < response['data'].length; i++) {
            this.files_name.push(response['data'][i]['file_name'])
        }
        this.files_name
      })
      .catch((error) => {
        this.message = "Sorry, an error has occurred. Please, reload the page."
        this.alert = true
        error;
      });
  },

  methods: {
    get_files(files_name) {
        for (let i = 0; i < files_name.length; i++) {
        axios
          .request({
            // Standard URL and params
            url: `http://127.0.0.1:5000/api/image`,
            params: {
              file_name: files_name[i]["file_name"],
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
            this.images_src.push(src);
          })
          .catch((err) => {
            err;
          });
      }
    }
  },

  data() {
    return {
      restaurants: [],
      message: "",
      alert: false,
      files_name: []
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
