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
            @click="delete_item(index, $event)"
            class="button cart__button bx bx-trash"
          ></i>
        </div>
      </div>
    </section>

    <confirm-order-component></confirm-order-component>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ConfirmOrderComponent from "./ConfirmOrderComponent.vue";
export default {
  components: { ConfirmOrderComponent },
  methods: {
    // function that will delete an item from the cart
    delete_item(index) {
      this.items.splice(index, 1);
      // setting a cookie with the new cart
      cookies.set(`cart`, JSON.stringify(this.items));
      // if items length is equal to zero remove the cart cookie
      if (this.items.length === 0) {
        cookies.remove(`cart`);
        cookies.remove('total_order')
      }
      this.$router.go()
    },
  },
  // get the cart cookie and add to the items variable
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
</style>
