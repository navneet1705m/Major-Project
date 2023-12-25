import React, { useState, useEffect } from "react";

const MAP_API_URL = "https://api.map.com/india/"; 

function Map() {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    fetch(MAP_API_URL)
      .then((response) => response.json())
      .then((data) => setMapData(data));
  }, []);

  if (!mapData) {
    return <p>Loading Map...</p>;
  }

  
  return (
    <div style={{ width: "100vw", height: "500px" }}>
      {/* Render your map using the map data */}
      <img src={mapData.image} alt="India Map" />
    </div>
  );
}

export default Map;
