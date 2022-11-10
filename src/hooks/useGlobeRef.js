import { useCallback, useRef } from "react";

export default function useGlobeRef() {
  const globeRef = useRef(null);

  const pointOfView = useCallback(({ latitude, longitude }, duration) => {
    globeRef.current.pointOfView({ lat: latitude, lng: longitude }, duration);
  }, []);

  return { globeRef, pointOfView };
}
