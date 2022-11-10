import locateClosestSatellites from "./locateClosestSatellites";

const response = [
  {
    latitude: -27.02452892790559,
    longitude: -48.36490011468956,
    id: "62b4b266a8973c16940c3132"
  },
  {
    latitude: -26.16460714881478,
    longitude: -49.69362528943818,
    id: "5eed7715096e5900069856e7"
  }
];

describe("locateClosestSatellites", () => {
  it("returns an array of satellites", async () => {
    const fetchMock = async () => ({
      ok: true,
      json: () => response
    });

    global.fetch = fetchMock;

    const result = await locateClosestSatellites(1, 1, 2);

    expect(result).toEqual(response);
  });

  it("returns an empty array when the request fails", async () => {
    const fetchMock = async () => ({
      ok: false,
      json: () => response
    });

    global.fetch = fetchMock;

    const result = await locateClosestSatellites(1, 1, 2);

    expect(result).toEqual([]);
  });
});
