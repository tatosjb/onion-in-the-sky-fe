import { CoordsContext } from "contexts/CoordsProvider";
import { useCallback, useContext, useState } from "react";

export default function Form({ onSubmit }) {
  const { coords, numberOfSatelites } = useContext(CoordsContext);

  const [newLatitude, setNewLatitude] = useState(coords.latitude);
  const [newLongitude, setNewLongitude] = useState(coords.longitude);
  const [newNumberOfSatelites, setNewNumberOfSatelites] =
    useState(numberOfSatelites);
  const handleLatitudeChange = useCallback(({ target: { value } }) => {
    setNewLatitude(value);
  }, []);

  const handleLongitudeChange = useCallback(({ target: { value } }) => {
    setNewLongitude(value);
  }, []);

  const handleNumberOfSatelitesChange = useCallback(({ target: { value } }) => {
    setNewNumberOfSatelites(value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit({
        latitude: newLatitude,
        longitude: newLongitude,
        numberOfSatelites: newNumberOfSatelites
      });
    },
    [newLatitude, newLongitude, newNumberOfSatelites, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="latitude">Latitude</label>
      <input
        type="number"
        id="latitude"
        value={newLatitude}
        onChange={handleLatitudeChange}
      />

      <label htmlFor="longitude">Longitude</label>
      <input
        type="number"
        id="longitude"
        value={newLongitude}
        onChange={handleLongitudeChange}
      />

      <label htmlFor="quantity_of_results">Quantity of results</label>
      <input
        type="number"
        id="quantity_of_results"
        value={newNumberOfSatelites}
        onChange={handleNumberOfSatelitesChange}
      />

      <button type="submit">Update</button>
    </form>
  );
}
