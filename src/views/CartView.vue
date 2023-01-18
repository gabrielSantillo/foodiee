<template>
  <div class="cart">
    <header-component></header-component>
    <cart-component></cart-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import cookies from "vue-cookies";
import axios from "axios";

export default {
  // axios request to check if the user token is valid 
  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-token`,
        headers: {
          token: `${cookies.get(`client_token`)}`,
        },
      })
      .then((response) => {
        response;
      })
      .catch((error) => {
        this.$router.push(`/`);
        error;
      });
  },
  components: { HeaderComponent, CartComponent, FooterComponent },
};
</script>
