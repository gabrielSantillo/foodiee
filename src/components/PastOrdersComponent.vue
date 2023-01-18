<template>
  <div v-scroll-reveal>
    <section class="section bd-container">
      <div class="order__line"></div>
      <span class="section-subtitle">Past orders</span>
      <h2 class="section-title">Wanna remake an order?</h2>

      <div class="past__order__container bd-grid">
        <div
          class="past__order__content"
          v-for="(order, index) in past_orders"
          :key="index"
        >
          <h3 class="section-subtitle">{{ order["restaurant_name"] }}</h3>
          <div class="order__line"></div>
          <div v-for="(item, index) in order['menu_items']" :key="index">
            <h3 class="past__order__name">{{ item["name"] }}</h3>
            <span class="past__order__price">${{ item["price"] }}</span>
          </div>

          <div class="make__order">
            <span class="total__price">Total ${{ order["total_order"] }}</span>
            <i @click="make_order(order, $event)" class="button menu__button"
              >Order</i
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      past_orders: undefined,
    };
  },
  mounted() {
    // getting the users past orders
    this.past_orders = cookies.get("past_orders");
  },

  methods: {
    // function that will place a new order based on some past order that the user wants
    make_order(order) {
      let menu_items_id = [];
      // for loop that goes through to the foods and add the food id in the menu itens list 
      for (let i = 0; i < order['menu_items'].length; i++) {
        menu_items_id.push(order['menu_items'][i]['menu_item_id']);
      }
      /* axios request to place a new order*/
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-order`,
          headers: {
            token: `${cookies.get(`client_token`)}`,
          },
          method: `POST`,
          data: {
            menu_items: menu_items_id,
            restaurant_id: order['restaurant_id'],
          },
        })
        // in case of success set a cookie with the order id and update the page
        .then((response) => {
          cookies.set(`order_id`, response[`data`][`order_id`]);

          this.$forceUpdate()
        })
        // in case of error show the user a message
        .catch((error) => {
          error;
          this.message = "Sorry, an error have occurred.";
          this.alert = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.past__order__container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 48px;
  justify-content: center;
}

.past__order__content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $--container-color;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
  padding: 1.5rem;
  margin: 0 16px;
}

.past__order__img {
  width: 200px;
  align-self: center;
  margin-bottom: $--mb-2;
}

.past__order__name {
  font-size: $--normal-font-size;
}

.past__order__detail {
  margin-bottom: $--mb-1;
}

.total__price {
  font-size: $--normal-font-size;
  color: $--first-color;
}

.menu__button {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  padding: 0.9375rem 1.2195rem;
  border-radius: 0.5rem 0 0.5rem 0;
  font-size: 1.5rem;
  cursor: pointer;
}

.order__line {
  width: 100%;
  height: 0.02rem;
  background-color: $--text-color-light;
  margin: 24px 0;
  justify-self: center;
}

.make__order {
  margin-top: 36px;
  display: grid;
  place-items: start;
}
</style>
