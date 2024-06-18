<script setup>
import { onMounted } from "vue";
import stripePayment from "@/assets/js/utils.js";
 onMounted(async () => {
        try{
            await stripePayment.initStripe();
            setTimeout(()=>{
                stripePayment.generateStripePaymentElements();
            },100)
        }
        catch {
          console.log('error');
        }
});
</script>

<template>
  <div style="width: 350px;margin: 0 auto">
    <div id="paymentElement"></div>
  </div>
</template>