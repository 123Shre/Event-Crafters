import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useCart } from "../../Context/CartContext";

const DetailEventCard = () => {
  const { addTocart } = useCart();
  const handleAddToCart=()=>{

  }
  return (
    <div className="pl-6 pt-2 min-h-screen ">
      <Box>
        <Typography
          variant="h3"
          className="text-center"
          style={{ fontWeight: "bold" }}
        >
          Music In The Park
        </Typography>
      </Box>
      <Box className="space-y-6">
        <Grid container spacing={6}>
          <Grid item md={6} className="space-y-4">
            <Box className="space-y-2 ml-4">
              <Grid container spacing={2} className="items-start ">
                {/* First Row */}
                <Grid item xs={6}>
                  <img
                    alt="Image 1"
                    className="aspect-[1/1] object-cover rounded-lg overflow-hidden"
                    height="290"
                    src="/bg1.jpg"
                    width="290"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    alt="Image 2"
                    className="aspect-[1/1] object-cover rounded-lg overflow-hidden"
                    height="290"
                    src="/bg2.jpg"
                    width="290"
                  />
                </Grid>

                {/* Second Row */}
                <Grid item xs={6}>
                  <img
                    alt="Image 3"
                    className="aspect-[1/1] object-cover rounded-lg overflow-hidden"
                    height="290"
                    src="/bg3.jpg"
                    width="290"
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    alt="Image 4"
                    className="aspect-[1/1] object-cover rounded-lg overflow-hidden"
                    height="290"
                    src="/bg4.jpg"
                    width="290"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6} className="space-y-4 ">
            <Box className="space-y-2 max-w-md">
              <Box className="space-y-2">
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    Description
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    Join us for an afternoon of live music in the park. Bring
                    your picnic blanket and enjoy the tunes!
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    Organizer
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    Sunnyvale Parks and Recreation
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    Age
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    All ages
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    Date &amp; Time
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    July 15, 2024, 3:00 PM - 6:00 PM
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    Price
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    Free
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    Address
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    550 E. Remington Dr, Sunnyvale, CA
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex items-center space-x-4">
              <Button variant="contained" onClick={()=>handleAddToCart}>Add To Cart</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DetailEventCard;
