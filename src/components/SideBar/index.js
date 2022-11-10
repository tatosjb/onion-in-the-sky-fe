import Loading from "components/Loading";
import { CoordsContext } from "contexts/CoordsProvider";
import { useCallback, useContext } from "react";
import Form from "./Form";

import styles from "./styles.module.scss";

export default function SideBar() {
  const { setCoords, setNumberOfSatelites, loading } =
    useContext(CoordsContext);

  const handleSubmit = useCallback(
    ({ latitude, longitude, numberOfSatelites }) => {
      setCoords({
        latitude,
        longitude
      });
      setNumberOfSatelites(numberOfSatelites);
    },
    [setNumberOfSatelites, setCoords]
  );

  if (loading) return <Loading />;

  return (
    <div className={styles.sideBar}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
