import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { Elements, CartElement, ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { loadStrip } from '@stripe/stripe-js';

import Review from '/Review';

const stripePronise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm=({checkoutToken, shippingData, backStep, onCaptrureCheckout, nextStep, timeout})=>{
    const handleSubmit = async (event, elements, stripe) => {
        event.prevenDefault();
        if (!stripe || !elements) return;

        const CartElement = elements.getElement(CardElement);
        const {error, paymenMethod } = await stripe.creatPaymentMethod({ type: 'card', card: CardElement});
        if(error) {
            console.log(error);
        } else {
            const orderData={
                line_items: checkoutToken.live.line_items,
                customer: {firtsname: shippingData.firtsname, lastname: shippingData.lastname, email: shippingData.email},
                shipping: {
                    name: 'primary',
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    country_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    count: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shipingData.shippingData.shippingOption},
                payment: {
                    gateway:'stripe',
                    stripe:{
                        payment_method_id: paymentMethod.id
                    }
                }
            
            }
            onCaptrureCheckout(checkoutToken.id, orderData);
            timeout();

            nextStep();
        }


    }
    return(
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin:'20px 0'}}>Payment method</Typography>
            <Elements stripe={stripePronise}>
                <ElementsConsumer>
                    {({ elements, stripe})=>(
                        <form onSubmit = {(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /> <br />
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Button variant ='outlined' onClick={backStep}>Back</Button>
                                <Button type="submit" variant="conatined" disable={!stripe} color="primary">
                                    Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                                </Button>

                            </div>
                        </form>
                    )}
                </ElementsConsumer>

            </Elements>
        </>
    );
}
export default PaymentForm