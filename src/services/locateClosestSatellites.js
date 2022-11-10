const API_URL = process.env.REACT_APP_API_URL;

export default async function locateClosestSatellites(
  latitude,
  longitude,
  numberOfSatellites
) {
  return fetch(
    `${API_URL}/closest_satellites?latitude=${latitude}&longitude=${longitude}&number_of_satellites=${numberOfSatellites}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Something went wrong");
    })
    .catch((e) => {
      return [];
    });
}
