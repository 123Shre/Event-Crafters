import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const PrePaymentPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  return (
    <>
      <Box sx={{ maxWidth: "md", mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        {cart.length > 0 ? (
          <>
            {cart.map((eventDetails, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1">{eventDetails.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${eventDetails.price}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </Button>
              </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <Typography variant="h6">
                Total: ${calculateTotal().toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary">
                Proceed to Payment
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="body1">Your cart is empty.</Typography>
        )}
      </Box>
    </>
  );
};

export default PrePaymentPage;
