<template>
  <div v-scroll-reveal>
    <section class="section bd-container">
      <div class="order__line"></div>
      <span class="section-subtitle">Past orders</span>
      <h2 class="section-title">Wanna remake an order?</h2>

      <div class="menu__container bd-grid">
        <div class="menu__content" v-for="(order, index) in past_orders" :key="index">

          <div v-for="(item, index) in order['menu_items']" :key="index">
              <img :src="item['file_name']" alt="" class="menu__img" />
              <h3 class="menu__name">{{ item["name"] }}</h3>
              <span class="menu__price">${{ item["price"] }}</span>
          </div>

          <div class="make__order">
            <span class="total__price">Total ${{ order["total_order"] }}</span>
            <i
            @click="make_order(order, $event)"
            class="button menu__button">Order</i>
          </div>

        </div>
      </div>
    </section>


  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      past_orders: undefined,
    };
  },
  mounted() {
    this.past_orders = cookies.get("past_orders");
    this.past_orders;
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

.menu__name {
  font-size: $--normal-font-size;
}

.menu__detail {
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

.make__order{
  margin-top: 36px;
  display: grid;
  place-items: start;
}
</style>
