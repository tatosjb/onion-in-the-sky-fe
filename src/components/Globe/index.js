import { useContext, useEffect, useState } from "react";

import GlobeGL from "react-globe.gl";

import locateClosestSatellites from "services/locateClosestSatellites";
import useGlobeRef from "hooks/useGlobeRef";
import { CoordsContext } from "contexts/CoordsProvider";

function Globe() {
  const coordsDetails = useContext(CoordsContext);
  const { coords, numberOfSatelites } = coordsDetails;

  const [pointsData, setPointsData] = useState([]);
  const { globeRef, pointOfView } = useGlobeRef(null);

  useEffect(() => {
    if (!coords.latitude || !coords.longitude || !globeRef) return;

    pointOfView(coords, 300);

    locateClosestSatellites(
      coords.latitude,
      coords.longitude,
      numberOfSatelites
    ).then((response) => {
      const newPointsData =
        response?.map((satellite) => ({
          lat: satellite.latitude,
          lng: satellite.longitude,
          color: "green",
          size: 0.5
        })) || [];

      setPointsData(newPointsData);
    });
  }, [coords, globeRef, numberOfSatelites, pointOfView]);

  return (
    <GlobeGL
      ref={globeRef}
      pointsData={pointsData}
      globeImageUrl="earth-blue-marble.jpg"
    />
  );
}

export default Globe;
