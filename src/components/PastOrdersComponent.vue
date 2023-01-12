<template>
  <div>
    <section class="past__orders__container section bd-container">
        <div class="order__line"></div>
      <span class="section-subtitle">Past orders</span>
      <h2 class="section-title">Wanna remake an order?</h2>
    </section>

    <section v-for="(order, index) in past_orders" :key="index" >
      <div>
        <div>
          <div v-for="(item, index) in order['menu_items']" :key="index">
              <p>{{item['name']}}</p>
              <p>${{item['price']}}</p>
          </div>
          <img src="" alt="">
        </div>
        <div>
          <p>Total ${{order['total_order']}}</p>
          <button>Again</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import cookies from "vue-cookies"
export default {
    data() {
        return {
            past_orders: undefined
        }
    },
    mounted () {
        this.past_orders = cookies.get('past_orders')
        this.past_orders
    },
};
</script>

<style lang="scss" scoped>
.order__line {
    width: 100%;
    height: 0.02rem;
    background-color: $--text-color-light;
    margin: 24px 0;
    justify-self: center;
  }
</style>
