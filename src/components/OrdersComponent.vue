<template>
  <div>
    <div class="alert">
      <v-alert
        type="error"
        :value="alert"
        border="left"
        dismissible
        transition="fade-transition"
      >
        {{ message }}
      </v-alert>
    </div>

    <section class="orders section bd-container" ref="orders" v-scroll-reveal>
      <span class="section-subtitle">Orders</span>
      <h2 class="section-title">Tracking your order</h2>

      <div class="orders__container bd-grid">
        <div class="orders__content">
          <h3 class="orders__title">Excellent food</h3>
          <p class="orders__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      order: [],
      past_orders: [],
      message: "",
      alert: false
    };
  },
  mounted() {
    axios
      .request({
        url: `http://127.0.0.1:5000/api/client-order`,
        headers: {
          token: `${cookies.get(`client_token`)}`,
        },
      })
      .then((response) => {
        let id = cookies.get(`order_id`)
        for(let i = 0; i <= response['data'].length; i++) {
          if(parseInt(id) === response['data'][i]['id']) {
            this.order.push(response['data'][i])
          } else {
            this.past_orders.push(response['data'][i])
          }
        }
      })
      .catch((error) => {
        error;
        /* on failure show a message */
        this.message = "Sorry, an error have occurred.";
        this.alert = true;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.orders__container {
  row-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.orders__content {
  text-align: center;
}

.orders__img {
  width: 64px;
  height: 64px;
  fill: $--first-color;
  margin-bottom: $--mb-2;
}

.orders__title {
  font-size: $--h3-font-size;
  color: $--title-color;
  margin-bottom: $--mb-1;
}

.orders__description {
  padding: 0 1.5rem;
}
</style>
