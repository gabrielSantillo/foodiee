<template>
  <div>
    <section class="cart section bd-container" ref="cart" v-scroll-reveal>
      <h2 class="section-title">Cart</h2>

      <div class="cart__container bd-grid">
        <div class="cart__content" v-for="(item, index) in items" :key="index">
          <img :src="item['file_name']" alt="" class="cart__img" />
          <h3 class="cart__name">{{ item["name"] }}</h3>
          <span class="cart__price">${{ item["price"] }}</span>
          <i
            @click="delete_item(item, $event)"
            class="button cart__button bx bx-trash"
          ></i>
        </div>
      </div>
    </section>

    <div class="confirm__container">
        <div class="confirm__line"></div>
        <div class="confirm-div">
            <p>Total $: {{}}</p>
            <button class="button" @click="confirm_order(restaurant, $event)">Confirm Order</button>
        </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  methods: {
    delete_item(food) {
      /* setting the variable with the cookie value of cart */
      let cart = cookies.get(`cart`);
      /* for loop that will go through the cart */
      for (let i = 0; i < cart.length; i++) {
        /* checking if the the food id is equal to the cart id */
        if (food[`id`] === cart[i][`id`]) {
          /* if yes, splice this item */
          cart.splice(i, 1);
          /* set the cookie again */
          cookies.set(`cart`, JSON.stringify(cart));
          /* setting the variable with the cart value */
          this.items = cart;
          return;
        }
      }
    },
  },
  mounted() {
    this.items = cookies.get("cart");
  },

  data() {
    return {
      items: undefined,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.cart__container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 48px;
  place-items: center;
}

.cart__content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $--container-color;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
  padding: 1.5rem;
  margin: 0 16px;
}

.cart__img {
  max-width: 200px;
  align-self: center;
  margin-bottom: $--mb-2;
}

.cart__name {
  font-weight: $--font-semi-bold;
}

.cart__price {
  color: $--first-color;
  font-size: $--h2-font-size;
}

.cart__name {
  font-size: $--normal-font-size;
}

.cart__button {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  border-radius: 0.5rem 0 0.5rem 0;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #e53935;
}

.confirm__container {
    display: grid;
    place-items: center;
    margin-top: 48px;

    >.confirm__line {
        width: 80%;
        height: .02rem;
        background-color: $--text-color-light;
    }

    >.confirm-div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        justify-content: center;
        gap: 24px;
        margin-top: 24px;

        >p {
            justify-content: center;
        }
    }
}
</style>
