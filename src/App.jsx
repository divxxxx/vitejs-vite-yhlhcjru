import React from "react";

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with beautiful beaches and vibrant culture",
    price: "$1,200"
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of love, art, and exquisite cuisine",
    price: "$1,500"
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Stunning sunsets and white-washed architecture",
    price: "$1,800"
  },
  {
    id: 4,
    name: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Modern city with rich traditions and amazing food",
    price: "$2,000"
  }
];

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80 p-4">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-xl" />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-500">{destination.location}</p>
        <p className="mt-2 text-gray-700">{destination.description}</p>
        <p className="mt-2 font-semibold text-indigo-600">{destination.price}</p>
      </div>
    </div>
  );
};

const DestinationContainer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
}

export default App;