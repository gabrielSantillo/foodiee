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
        <div
          class="orders__content"
          v-for="(order, index) in last_order"
          :key="index"
        >
          <h3 class="orders__title">Order id:{{ order["id"] }}</h3>
          <div v-for="(item, index) in items" :key="index">
            <p class="orders__description">
              {{ item["name"] }} ${{item['price']}}
            </p>
          </div>
          <p> {{ is_confirmed }}</p>
          <p> {{ is_complete }}</p>
          <div class="order__line"></div>
          <h3 class="section-subtitle">Total: ${{ order["total_order"] }}</h3>
        </div>
      </div>
    </section>

    <past-orders-component></past-orders-component>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import PastOrdersComponent from './PastOrdersComponent.vue';
export default {
  components: { PastOrdersComponent },
  data() {
    return {
      last_order: [],
      past_orders: [],
      message: "",
      alert: false,
      items: undefined,
      total_price: "",
      is_confirmed: "Confirming your order",
      is_complete: "Order not completed"
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
        let id = cookies.get(`order_id`);
        for (let i = 0; i <= response["data"].length; i++) {
          if (parseInt(id) === response["data"][i]["id"]) {
            this.last_order.push(response["data"][i]);
            this.items = (response["data"][i]["menu_items"])
            this.total_price = cookies.get('total_order')

            if(response['data'][i]['is_confirmed'] === 1) {
              this.is_confirmed = "Order confirmed"
            }

            if(response['data'][i]['is_complete'] === 1) {
              this.is_complete = "Order completed"
            }

          } else {
            this.past_orders.push(response["data"][i]);
          }
        }
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.orders__container {
  row-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  place-items: center;
}

.orders__content {
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
  max-width: 350px;
  display: grid;
  padding-top: 16px;
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

.order__line {
    width: 80%;
    height: 0.02rem;
    background-color: $--text-color-light;
    margin: 24px 0;
    justify-self: center;
  }
</style>
