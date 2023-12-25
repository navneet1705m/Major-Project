import React, { useState } from "react";
import { Link } from "react-router-dom";
import Indore from "./images/Indore.jpg";
import Ujjain from "./images/ujjain.jpg";
import Gwalior from "./images/gwalior.jpg";
import Bhimbetka from "./images/bhimbetka.jpg";
import Pachmari from "./images/pachmari.jpg";
import Bhopal from "./images/bhopal.jpg";

const DestinationDetails = ({ title, imageSrc, description }) => (
  <div className="p-4 bg-white rounded-md shadow-md">
    <img
      src={imageSrc}
      alt={`Image of ${title}`}
      className="object-cover w-full h-full mb-4 rounded-md"
    />
    <h3 className="mb-2 text-lg font-bold text-purple-900"> {title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Landing = () => {
  const popularDestinations = [
    {
      title: "Ujjain",
      imageSrc: Ujjain,
      description:
        "Ujjain is a beautiful city known for its historical and religious significance. It is one of the seven sacred cities in Hinduism.",
    },
    {
      title: "Bhopal",
      imageSrc: Bhopal,
      description:
        "Bhopal, also known as the `the City of Begums` has a significant history. Between 1819 and 1926, it was ruled by the generation of Begums for over 100 years, who gave the city its waterworks, railways, postal system, and municipality. The Begums of Bhopal were great reformists and patrons of education, art, culture, and public works. They also built several great monuments, which still stand as testimonies to the citys celebrated past. Bhopal is adorned by beautiful lakes and striking landscapes. Towards the north, youll be welcomed by the old city that encompasses fascinating mosques, narrow alleys, amazing food corners, and buzzing chowks. On the other side of the upper lake is the new Bhopal. Modern, with wide roads, shopping complexes, plush hotels, and restaurants. Both contrasting sides are well-connected and offer something to everyone PLACES TO VISIT IN BHOPAL",
    },
    {
      title: "Pachmarhi",
      imageSrc: Pachmari,
      description:
        'Pachmarhi is a popular hill station with scenic beauty, waterfalls, and lush green landscapes. It is often referred to as the "Queen of Satpura".',
    },
    {
      title: "Indore",
      imageSrc: Indore,
      description:
        "Indore, the commercial capital of Madhya Pradesh, is known for its lively markets, delicious street food, and historical landmarks.",
    },
    {
      title: "Gwalior",
      imageSrc: Gwalior,
      description:
        "Gwalior is famous for its majestic fort, ancient temples, and vibrant music traditions. It has a rich cultural and historical heritage.",
    },
    {
      title: "Bhimbetka",
      imageSrc: Bhimbetka,
      description:
        "Bhimbetka is renowned for its ancient rock shelters and cave paintings, which provide a glimpse into prehistoric life and art.",
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <main className="p-8 bg-white">
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">
          Discover Incredible MP
        </h2>
        <p className="text-gray-700">
          Experience the rich culture, breathtaking landscapes, and vibrant
          traditions of MP.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-purple-900">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {popularDestinations.map((destination, index) => (
            <div
              key={index}
              onClick={() => handleDestinationClick(destination)}
              className="cursor-pointer hover:opacity-80"
            >
              <img
                src={destination.imageSrc}
                alt={`Image of ${destination.title}`}
                className="object-cover w-full h-32 mb-4 rounded-md"
              />
              <h3 className="mb-2 text-lg font-bold text-purple-900">
                {destination.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {selectedDestination && (
        <section>
          <h2 className="mb-4 text-2xl font-bold text-purple-900">
            {selectedDestination.title} Details
          </h2>
          <DestinationDetails
            title={selectedDestination.title}
            imageSrc={selectedDestination.imageSrc}
            description={selectedDestination.description}
          />
        </section>
      )}

      <section>
        <h2 className="mb-4 text-2xl font-bold text-purple-900">
          Plan Your Journey
        </h2>
        <p className="text-gray-700">
          Start your adventure today! Explore the beauty and diversity of MP
          with us.
        </p>
      </section>
    </main>
  );
};

export default Landing;
