// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: (resolve) =>
    resolve({
      coords: {
        latitude: 1,
        longitude: 1
      }
    })
};

global.navigator.geolocation = mockGeolocation;
