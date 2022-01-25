<template>
  <div class="lg:mt-23">
    <TheHeader />
    <AddressBar class="lg:hidden" />
    <MerchantPhoto />
    <MerchantInfo />
    <ScheduledOrder />
    <MenuTab />
    <TheMenu />
    <FooterNew />
    <FooterDark />
    <PromoModal v-show="isPromoModalShown" />
    <OrderFeeModal v-show="isOrderFeeModalShown" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      isPromoModalShown: false,
      isOrderFeeModalShown: false
    }
  },

  mounted() {
    this.$nuxt.$on('showPromoModal', () => { this.isPromoModalShown = true })
    this.$nuxt.$on('hidePromoModal', () => { this.isPromoModalShown = false })
    this.$nuxt.$on('showOrderFeeModal', () => { this.isOrderFeeModalShown = true })
    this.$nuxt.$on('hideOrderFeeModal', () => { this.isOrderFeeModalShown = false })
  }
}
</script>
