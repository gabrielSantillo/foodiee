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
    <div class="confirm__container">
      <div class="confirm__line"></div>
      <div class="confirm-div">
        <p>Total $: {{ total_order }}</p>
        <button class="button" @click="confirm_order(items, $event)">
          Confirm Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  methods: {
    confirm_order() {
      let menu_items_id = [];
      /* for loop that goes through to the foods and add the food id in the menu itens array */
      for (let i = 0; i < this.items.length; i++) {
        menu_items_id.push(this.items[i][`menu_item_id`]);
      }
      /* axios request to the client-order API */
      axios
        .request({
          url: `http://127.0.0.1:5000/api/client-order`,
          headers: {
            token: `${cookies.get(`client_token`)}`,
          },
          method: `POST`,
          data: {
            menu_items: menu_items_id,
            restaurant_id: cookies.get(`restaurant_id`),
          },
        })
        .then((response) => {
          /* on success grab the order_id response */
          this.order_id.push(response[`data`][`order_id`]);
          /* stringfy the order id */
          let order_id_json = JSON.stringify(this.orders_id);
          /* set the cookie with the JSON value of the order id */
          cookies.set(`order_id`, order_id_json);

          
        })
        .catch((error) => {
          error;
          /* on failure show a message */
          this.message = "Sorry, an error have occurred."
          this.alert = true
        });
    },
  },
  data() {
    return {
      total_order: 0,
      items: undefined,
      order_id: [],
      message: "Sorry, an error have occurred.",
      alert: false
    };
  },

  mounted() {
    this.items = cookies.get("cart");
    for (let i = 0; i <= this.items.length; i++) {
      this.total_order += parseFloat(this.items[i]["price"]);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.confirm__container {
  display: grid;
  place-items: center;
  margin-top: 48px;

  > .confirm__line {
    width: 80%;
    height: 0.02rem;
    background-color: $--text-color-light;
  }

  > .confirm-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;

    > p {
      font-weight: $--font-semi-bold;
    }
  }
}
</style>
