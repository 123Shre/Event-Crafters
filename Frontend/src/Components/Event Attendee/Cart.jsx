import React from "react";
import { useCart } from "../../Context/CartContext";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
const stripePromise = loadStripe(
  `pk_test_51OyakHSE0pec6OUZ4SPFZmDvcA9KbhJTqU51aSC9tDFMFGRnCD6VesQBWOEaMAxueMhsbT4rnkufvRYLSOfNas7200jRP7SYOi`
);

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  // console.log(cart);
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart,
          }),
        }
      );

      if (response.ok) {
        const session = await response.json();

        // Create the order in the backend
        const orderResponse = await fetch(
          "http://localhost:3000/attendee/makeorder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: sessionStorage.getItem("email"),
              cart: cart,
              totalPrice: calculateTotalPrice(),
            }),
          }
        );

        if (orderResponse.ok) {
          const stripe = await stripePromise;
          stripe.redirectToCheckout({ sessionId: session.id });
        } else {
          const orderError = await orderResponse.text();
          console.error("Error creating order:", orderError);
        }
      } else {
        const errorText = await response.text();
        console.error("Error creating checkout session:", errorText);
      }
    } catch (error) {
      console.error("Error creating checkout session or order:", error);
    }
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/dash">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          ⬅Back
        </button>
      </Link>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-row">
            <ul className="mr-96 font-bold text-xl">Event Name</ul>
            <ul className="font-bold text-xl" style={{ marginLeft: "22rem" }}>
              Quantity
            </ul>
            <ul className="ml-36 font-bold text-xl">Price</ul>
            <ul className="ml-20 font-bold text-xl">Total</ul>
          </div>
          <Grid container spacing={2}>
            {cart.map((item, index) => (
              <Grid item xs={12} key={index}>
                {/* {  console.log("Cart Item"+item._id) }1 */}
                <Card className="rounded-lg shadow-md">
                  <CardContent className="flex justify-between items-center p-4">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body1">{item.name}</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid
                          container
                          justifyContent="space-evenly"
                          alignItems="center"
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            disabled={item.quantity === 1}
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity - 1)
                            }
                            
                          >
                            -
                          </Button>
                          <Button variant="outlined" size="small" className="">
                            {item.quantity}
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity + 1)
                            }
                            className="ml-1 px-1" 
                          >
                            +
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="body1">${item.price}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleRemoveItem(item._id)}
                      className="absolute bottom-2 right-2 p-2" 
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <div className="flex flex-row gap-4 pt-4 p-3">
              <div className="font-bold ">Total Price:</div>
              <div className="flex-grow mr-96">
                <p className="text-xl">${calculateTotalPrice().toFixed(2)}</p>
              </div>
              <div className="ml-96">
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  className="absolute right-2"
                  onClick={handleCheckout}
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </Grid>
        </>
      ) : (
        <Typography variant="body1" className="text-center">
          Your cart is empty.
        </Typography>
      )}
    </div>
  );
};

export default Cart;
