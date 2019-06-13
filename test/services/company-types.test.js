const assert = require('assert');
const app = require('../../src/app');

describe('\'company-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('company-types');

    assert.ok(service, 'Registered the service');
  });
});
