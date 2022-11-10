import { useCallback, useContext, useEffect, useState } from "react";

import GlobeGL from "react-globe.gl";

import locateClosestSatellites from "services/locateClosestSatellites";
import useGlobeRef from "hooks/useGlobeRef";
import { CoordsContext } from "contexts/CoordsProvider";
import ClosestSatelitesChannel from "channels/ClosestSatelitesChannel";

function Globe() {
  const coordsDetails = useContext(CoordsContext);
  const { coords, numberOfSatelites } = coordsDetails;

  const [pointsData, setPointsData] = useState([]);
  const [channelIdentifier, setChannelIdentifier] = useState();

  const { globeRef, pointOfView, pauseAnimation } = useGlobeRef(null);

  const transformData = useCallback((satellites = []) => {
    return satellites.map((satellite) => ({
      lat: satellite.latitude,
      lng: satellite.longitude,
      color: "green",
      size: 1
    }));
  }, []);

  const handleReceiveData = useCallback(
    (data) => {
      console.log(data);
      // pauseAnimation();
      if (!!data?.uuid && data?.uuid !== channelIdentifier)
        setChannelIdentifier(data.uuid);
      if (data?.satellites) setPointsData(transformData(data.satellites));
    },
    [channelIdentifier, transformData, setChannelIdentifier, setPointsData]
  );

  console.log(channelIdentifier);

  useEffect(() => {
    ClosestSatelitesChannel.received = handleReceiveData;
  }, [handleReceiveData]);

  useEffect(() => {
    if (!coords.latitude || !coords.longitude || !globeRef) return;

    pointOfView(coords, 300);

    locateClosestSatellites(
      coords.latitude,
      coords.longitude,
      numberOfSatelites,
      channelIdentifier
    ).then((response) => setPointsData(transformData(response)));
  }, [
    channelIdentifier,
    coords,
    globeRef,
    numberOfSatelites,
    pointOfView,
    transformData
  ]);

  return (
    <GlobeGL
      ref={globeRef}
      pointsData={pointsData}
      pointsTransitionDuration={0}
      globeImageUrl="earth-blue-marble.jpg"
    />
  );
}

export default Globe;
