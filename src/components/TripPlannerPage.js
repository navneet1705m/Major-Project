import React, { useState } from 'react';

const TripPlannerPage = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'destination') setDestination(value);
    else if (name === 'startDate') setStartDate(value);
    else if (name === 'endDate') setEndDate(value);
    else if (name === 'preferences') setPreferences(value);
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();

    // Handle the trip submission (you can send the data to a server, etc.)
    console.log('Trip details submitted:', {
      destination,
      startDate,
      endDate,
      preferences,
    });

    // Reset the form after submission
    setDestination('');
    setStartDate('');
    setEndDate('');
    setPreferences('');
  };

  return (
    <div className="p-8 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-purple-900">Plan Your Trip to MP</h2>
      <form onSubmit={handleTripSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple-900">Destination</label>
          <input
            type="text"
            name="destination"
            value={destination}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple-900">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple-900">End Date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple-900">Preferences</label>
          <textarea
            name="preferences"
            value={preferences}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-purple-900 rounded-md hover:bg-purple-700"
        >
          Plan My Trip
        </button>
      </form>
    </div>
  );
};

export default TripPlannerPage;
