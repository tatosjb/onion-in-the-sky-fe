import React, { createContext, useEffect, useState } from "react";
import getGeolocation from "services/getGeolocation";

const CoordsContext = createContext(undefined);

function CoordsProvider({ children }) {
  const [coords, setCoords] = useState({});
  const [numberOfSatelites, setNumberOfSatelites] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGeolocation()
      .then((geolocation) => {
        setCoords({
          latitude: geolocation.coords.latitude,
          longitude: geolocation.coords.longitude
        });
      })
      .catch((e) => {
        setCoords({
          latitude: 0,
          longitude: 0
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const value = {
    coords,
    setCoords,
    numberOfSatelites,
    setNumberOfSatelites,
    loading
  };

  return (
    <CoordsContext.Provider value={value}>{children}</CoordsContext.Provider>
  );
}

export { CoordsProvider, CoordsContext };
