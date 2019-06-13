// Initializes the `companies` service on path `/companies`
const createService = require('feathers-mongoose');
const createModel = require('../../models/companies.model');
const hooks = require('./companies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/companies', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('companies');

  service.hooks(hooks);
};
