const assert = require('assert');
const app = require('../../src/app');

describe('\'coupons\' service', () => {
  it('registered the service', () => {
    const service = app.service('coupons');

    assert.ok(service, 'Registered the service');
  });
});
