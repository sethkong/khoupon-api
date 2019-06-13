// Initializes the `coupon-types` service on path `/coupon-types`
const createService = require('feathers-mongoose');
const createModel = require('../../models/coupon-types.model');
const hooks = require('./coupon-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/coupon-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('coupon-types');

  service.hooks(hooks);
};
