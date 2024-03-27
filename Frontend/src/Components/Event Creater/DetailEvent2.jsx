import React, { createContext, useContext } from "react";
import {
  Box,
  Typography,
  CardContent,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import { useCart } from "../../Context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

const DetailEventCard2 = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const location = useLocation();
  const event = location.state?.event;
  console.log(event);
  const dateTime = new Date(event.dateAndTime);
  const formattedDate = dateTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  // console.log(location);
  //   const CartContext = createContext(null);
  // const { cart, addToCart } = useContext(CartContext);
  const onSubmit = () => {
    addToCart({ ...event, quantity: 1 });
    console.log("Added to Cart");
    navigate("/cart");

  };
  return (
    <Box sx={{ maxWidth: "md", mx: "auto", mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" gutterBottom>
          {event.name}
          {/* Name */}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {event.cityName}
          {/* Nashik */}
        </Typography>
      </Box>
      <Divider variant="middle" sx={{ mb: 3 }} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* {images.length > 0 && (
              <img
                src={images[0]}
                alt={name}
                className="w-full rounded-lg object-cover h-64"
              />
            )} */}
            <img
              src="bg1.jpg"
              alt="Image 1"
              className="w-full rounded-lg object-cover h-64"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body1" gutterBottom>
                Description:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" gutterBottom>
                Organizer:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.organizerName};
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" gutterBottom>
                Age Restriction:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.ageRestrictions}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" gutterBottom>
                Date
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formattedDate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" sx={{ my: 3 }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Time:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formattedTime}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Price:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.priceType === "Free" ? "Free" : `${event.price}`}
            </Typography>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.address}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
};

export default DetailEventCard2;
