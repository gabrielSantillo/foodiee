<template>
  <div>
    <section class="menu section bd-container" ref="menu" v-scroll-reveal>
      <span class="section-subtitle">Special</span>
      <h2 class="section-title">Menu of the week</h2>

      <div class="menu__container bd-grid" >
        <div class="menu__content" v-for="(item, index) in items" :key="index">
          <img :src="item['file_name']" alt="" class="menu__img" />
          <h3 class="menu__name">{{item['name']}}</h3>
          <span class="menu__detail">{{item['description']}}</span>
          <span class="menu__price">${{item['price']}}</span>
          <a href="" class="button menu__button"
            ><i class="bx bx-cart-alt"></i
          ></a>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
export default {

    data() {
        return {
            items: [],
            images_src: [],
            message: "",
            alert: false,
        }
    },
  mounted() {
    axios
      .request({
        url: `http://127.0.0.1:5000/api/menu-item`,
        params: {
          restaurant_id: `${cookies.get(`restaurant_id`)}`,
        },
      })
      .then((response) => {
        this.items = response['data']
        this.get_files(this.items)
      })
      .catch((error) => {
        error;
      });
  },

  methods: {
    get_files(items) {
        for (let i = 0; i < items.length; i++) {
        axios
          .request({
            // Standard URL and params
            url: `http://127.0.0.1:5000/api/menu-item-images`,
            params: {
              file_name: items[i]['file_name'],
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
            this.items[i]['file_name'] = src
          })
          .catch((error) => {
            this.message = "Sorry, an error has occurred. Please, reload the page."
            this.alert = true
            error;
          });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

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
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
  padding: 1.5rem;
  margin: 0 16px;
}

.menu__img {
  width: 200px;
  align-self: center;
  margin-bottom: $--mb-2;
}

.menu__name,
.menu__price {
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
  padding: 0.9375rem 1.2195rem;
  border-radius: 0.5rem 0 0.5rem 0;
  font-size: 1.5rem;
}
</style>
