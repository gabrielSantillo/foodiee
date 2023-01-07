<template>
  <div>
    <div class="confirm__container">
      <div class="confirm__line"></div>
      <div class="confirm-div">
        <p>Total $: {{}}</p>
        <button class="button" @click="confirm_order(restaurant, $event)">
          Confirm Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
            justify-content: center;
        }
    }
}
</style>
