/* globals jest */
/* eslint-disable no-underscore-dangle */

const https = jest.requireActual('https');

https.__mockServer = {
  on: jest.fn((signal, cb) => {
    //
  }),
  listen: jest.fn((opts, cb) => cb && cb(null)),
  close: jest.fn((cb) => cb && cb(null)),
  delete: jest.fn(),
  setSecureContext: jest.fn()
};

https.createServer = jest.fn(() => https.__mockServer);

module.exports = https;
