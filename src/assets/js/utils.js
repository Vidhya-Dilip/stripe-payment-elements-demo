import {loadStripe} from '@stripe/stripe-js';
const public_key = "pk_test_4IaQiFxRqCa4gRBLrYpKf5D8"; // bmc account
const api_version = "2022-11-15";

let stripe = null,
    elements = null;

export default {
    async initStripe () {
            let stripeConnect = {};
            stripeConnect = { apiVersion: api_version, stripeAccount: 'acct_1ApFzwJEtINljGAa'};
            stripe = await loadStripe(public_key, stripeConnect);
    },
    generateStripePaymentElements () {
        const appearance = {
            theme: 'stripe',
            variables: {
              colorBackground: '#fff',
              colorDanger: '#F24822',
              borderRadius: '8px', // border radius of all elements
            },
            rules: {
                '.Label': {
                    color: '#000',
                    fontSize: '13px',
                },
                '.Input': {
                    border: '1px solid #e5e5e5',
                    boxShadow: 'none',
                },
                '.Input::placeholder': {
                    fontSize: '15px',
                },
                '.Input:focus': {
                    border: '1px solid #000',
                    boxShadow: 'none',
                },
                '.Tab': {
                    border: '1.5px solid #E5E5E5',
                },
                '.Tab--selected': {
                    border: '1.5px solid #000',
                    color: '#000',
                    boxShadow: 'none',
                },
                '.Tab--selected:hover': {
                    color: '#000',
                },
                '.TabIcon': {
                    fill: '#6d6e78',
                },
                '.TabIcon--selected': {
                    fill: '#000',
                },
                '.Tab--selected:focus': {
                    boxShadow: 'none',
                },
                '.Tab:focus': {
                    borderColor: '#000',
                    boxShadow: 'none',
                },
            }
        };
        const options = {
            mode: 'payment',
            currency: 'usd',
            amount: 3000,
            paymentMethodCreation: 'manual',
            appearance: appearance,
        };

        elements = stripe.elements(options);

        const paymentElement = elements.create("payment");
        paymentElement.mount('#paymentElement');

        // TRIGGERED WHEN THE LOADER UI IS MOUNTED TO THE DOM AND READY TO BE DISPLAYED.
        paymentElement.on('ready', function() {
            console.log('ready');
        });

        // TRIGGERED WHEN THE ELEMENT FAILS TO LOAD
        paymentElement.on('loaderror', () => {
            console.log('error');
        });

    },
}
