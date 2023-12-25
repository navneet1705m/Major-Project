import React from 'react';

function TravelEssential() {
  const categories = [
    {
      title: 'Luggage & Travel Gear',
      items: [
        'Sturdy suitcase or backpack',
        'Packing cubes',
        'Travel adapter',
        'Travel lock',
      ],
    },
    {
      title: 'Makeup Bags & Cases',
      items: [
        'Makeup bag',
        'Refillable cosmetic containers',
        'Cable organizer bag',
      ],
    },
    {
      title: 'Health Care Products',
      items: [
        'First-aid kit',
        'Sunscreen and insect repellent',
        'Medications',
      ],
    },
    {
      title: 'Other Essentials',
      items: [
        'Comfortable walking shoes',
        'Versatile travel outfit',
        'Book or magazine',
        'Travel games',
        'Camera',
      ],
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-blue-800 transition duration-300 transform hover:text-purple-800 hover:scale-105">
  Travel Essentials
</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="p-6 transition-transform transform bg-purple-600 rounded-lg shadow-md hover:scale-105"
          >
            <h2 className="mb-4 text-2xl font-bold text-yellow-400 ">
              {category.title}
            </h2>
            <ul className="ml-4 list-disc">
              {category.items.map((item) => (
                <li key={item} className="text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelEssential;
