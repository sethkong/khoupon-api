// Initializes the `state_provinces` service on path `/state-provinces`
const createService = require('feathers-mongoose');
const createModel = require('../../models/state_provinces.model');
const hooks = require('./state_provinces.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/state-provinces', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('state-provinces');

  service.hooks(hooks);
};
