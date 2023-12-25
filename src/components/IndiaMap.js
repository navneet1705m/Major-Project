import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MadhyaPradeshMap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState([23.6345, 80.7549]); // Default to MP center
  const [zoomLevel, setZoomLevel] = useState(7);

  const handleSearch = () => {
    setSearchLocation([22.9734, 78.6569]); 
    setZoomLevel(10); 
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter location"
          className="p-2 border border-purple-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="p-2 ml-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
        >
          Search
        </button>
      </div>
      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer center={searchLocation} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MadhyaPradeshMap;
