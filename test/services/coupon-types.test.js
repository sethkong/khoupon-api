const assert = require('assert');
const app = require('../../src/app');

describe('\'coupon-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('coupon-types');

    assert.ok(service, 'Registered the service');
  });
});
