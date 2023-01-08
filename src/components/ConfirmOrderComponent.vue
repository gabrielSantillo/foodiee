<template>
  <div>
    <div class="confirm__container">
      <div class="confirm__line"></div>
      <div class="confirm-div">
            <p>Total $: {{total_order}}</p>
        <button class="button" @click="confirm_order(restaurant, $event)">
          Confirm Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
    data() {
        return {
            total_order: 0,
        }
    },

    mounted () {
        let order = cookies.get('cart');
        for(let i = 0; i <= order.length; i++) {
            this.total_order += parseFloat(order[i]['price'])
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
            font-weight: $--font-semi-bold;
        }
    }
}
</style>
