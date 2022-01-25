<template>
  <div class="lg:mt-23">
    <TheHeader />
    <AddressBar />
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
}
</script>
