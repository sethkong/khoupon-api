// Initializes the `coupons` service on path `/coupons`
const createService = require('feathers-mongoose');
const createModel = require('../../models/coupons.model');
const hooks = require('./coupons.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/coupons', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('coupons');

  service.hooks(hooks);
};
