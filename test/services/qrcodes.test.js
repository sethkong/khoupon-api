const assert = require('assert');
const app = require('../../src/app');

describe('\'qrcodes\' service', () => {
  it('registered the service', () => {
    const service = app.service('qrcodes');

    assert.ok(service, 'Registered the service');
  });
});
