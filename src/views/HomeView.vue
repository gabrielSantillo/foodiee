<template>
  <div class="home">
    <header-component></header-component>
    <home-component></home-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import cookies from "vue-cookies";
import axios from "axios";
export default {
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
  components: { HeaderComponent, HomeComponent, FooterComponent },
};
</script>
