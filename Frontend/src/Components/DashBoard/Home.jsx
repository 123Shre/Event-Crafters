import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
// import EventList from "../Event Creater/AcceptReject/EventList";
import axios from "axios";
import QuotationList from "../Event Creater/AcceptReject/EventQuotation";
import EventQuotations from "../Event Creater/AcceptReject/EventQuot1";

const Home = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get("/api/events/allevents");
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   };

  //   fetchEvents();
  // }, []);
  return (
    <div>
      <main className="flex-1 bg-green-200 flex flex-col  gap-4 p-4 md:gap-8 md:p-6 rounded-lg">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            {/* <Button
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              size="small"
            >
              Back
            </Button> */}
            <Typography variant="h5" component="h1" className="font-semibold">
              Event Creator
             
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="ml-auto"
              size="small"
            >
              <Link to="/ev1">Create Event</Link>
            </Button>
          </div>

          {/* <EventList events={events} /> */}

          {/* <Card className="">
            <CardHeader
              title="Summer Music Fest"
              subheader="June 25-26, 2022"
              action={
                <Button variant="contained" color="primary" size="small">
                  Edit event
                </Button>
              }
            />
            <CardMedia
              component="img"
              alt="Event image"
              className="rounded-lg max-w-fit overflow-hidden size-96"
              src="eventimg.jpg"
              
            />
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Typography variant="h6">Description</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    The Summer Music Fest is back with a bang! Join us for two
                    days of non-stop music, fun, and memories. Our lineup
                    includes top artists from various genres, and we guarantee
                    an unforgettable experience for all music lovers.
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6">Location</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    Sunnyvale Park
                    <br />
                    1234 Music Ave
                    <br />
                    Sunnyvale, CA
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Typography variant="h6">Date & Time</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    June 25, 2022
                    <br />
                    Gates open at 3:00 PM
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6">Tickets</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    General Admission: $50
                    <br />
                    VIP Pass: $100
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card> */}
          <EventQuotations/>
        </div>
      </main>
    </div>
  );
};

export default Home;
