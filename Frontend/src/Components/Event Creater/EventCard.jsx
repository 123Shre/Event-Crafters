const EventCard = ({ event }) => {
    const { image, name, price, isFree, ageRestriction, handleViewDetails } = event;
  
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 truncate">{name}</h2>
          <div className="flex items-center mt-2">
            <div className="text-lg font-semibold text-gray-700 mr-2">
              {isFree ? "Free" : `$${price}`}
            </div>
            {ageRestriction && (
              <span className="text-sm bg-red-200 text-red-700 px-2 py-1 rounded-full font-bold">
                {ageRestriction}
              </span>
            )}
          </div>
          <button
            onClick={handleViewDetails}
            className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            View Details
          </button>
        </div>
      </div>
      
    );
  };
  
  export default EventCard;
  