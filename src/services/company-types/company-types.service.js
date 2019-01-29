// Initializes the `company-types` service on path `/company-types`
const createService = require('feathers-mongoose');
const createModel = require('../../models/company-types.model');
const hooks = require('./company-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/company-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('company-types');

  service.hooks(hooks);
};
