import getGeolocation from "./getGeolocation";

describe("getGeolocation", () => {
  it("rejects when navigator.geolocation is not supported", async () => {
    global.navigator.geolocation = null;

    await expect(getGeolocation()).rejects.toEqual(
      "Geolocation is not supported by this browser."
    );
  });

  it("resolves when navigator.geolocation is supported", async () => {
    const mockGeolocation = {
      getCurrentPosition: (resolve) =>
        resolve({
          coords: {
            latitude: 1,
            longitude: 1
          }
        }),
      watchPosition: jest.fn()
    };

    global.navigator.geolocation = mockGeolocation;

    await expect(getGeolocation()).resolves.toEqual({
      coords: {
        latitude: 1,
        longitude: 1
      }
    });
  });
});
