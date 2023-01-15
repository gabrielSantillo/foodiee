<template>
  <div>
    <header-component></header-component>
    <orders-compononet></orders-compononet>
    <footer-component></footer-component>
  </div>
</template>

<script>
import OrdersCompononet from "@/components/OrdersComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import cookies from "vue-cookies";
import axios from "axios";
export default {
  mounted() {
    axios
      .request({
        url: `http://127.0.0.1:5000/api/client-token`,
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
  components: { OrdersCompononet, HeaderComponent, FooterComponent },
};
</script>

<style lang="scss" scoped></style>
