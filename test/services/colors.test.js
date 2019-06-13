const assert = require('assert');
const app = require('../../src/app');

describe('\'colors\' service', () => {
  it('registered the service', () => {
    const service = app.service('colors');

    assert.ok(service, 'Registered the service');
  });
});
