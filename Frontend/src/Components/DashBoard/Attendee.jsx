import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Event Creater/EventCard2";

const Attendee = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/eventCreater/allevents"
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const sortEvents = (option) => {
    const sortedEvents = [...events];
    switch (option) {
      case "price":
        sortedEvents.sort((a, b) => {
          if (a.priceType === "Free" && b.priceType !== "Free") return -1;
          if (a.priceType !== "Free" && b.priceType === "Free") return 1;
          return a.price - b.price;
        });
        break;
      case "date":
        sortedEvents.sort(
          (a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime)
        );
        break;
      default:
        break;
    }
    setEvents(sortedEvents);
    setSortBy(option);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto rounded-lg p-10 bg-green-200">
      <div className="flex items-center justify-between mb-4">
        <div className="search-input border-2 border-green-400 rounded-md">
          {/* <label htmlFor="search" className="font-semibold mr-2">
            Search Events:
          </label> */}
          <input
            type="text"
            id="search"
            placeholder="Search Events..."
            value={searchQuery}
            onChange={handleSearch}
            className="py-2 px-4 border rounded-md"
          />
        </div>
        <div className="sort-dropdown">
          <label htmlFor="sort" className="font-semibold mr-2">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => sortEvents(e.target.value)}
            className="py-2 px-4 rounded-md border-2 border-green-400"
          >
            <option value="">-- Select Sorting --</option>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filteredEvents.map((event) => {
            const handleClick = () => {
              setSelectedEvent(event);
            };
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
            return (<>
            <Card
                key={event._id}
                eventname={event.name}
                date={formattedDate}
                time={formattedTime}
                location={event.cityName}
                event={event}
                onClick={handleClick}
              />
           </> );
          })}
        </div>
      ) : (
        <p className="text-gray-600">No events found.</p>
      )}
    </div>
  );
};

export default Attendee;
