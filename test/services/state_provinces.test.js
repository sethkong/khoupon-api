const assert = require('assert');
const app = require('../../src/app');

describe('\'state_provinces\' service', () => {
  it('registered the service', () => {
    const service = app.service('state-provinces');

    assert.ok(service, 'Registered the service');
  });
});
