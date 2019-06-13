// Initializes the `persons` service on path `/persons`
const createService = require('feathers-mongoose');
const createModel = require('../../models/persons.model');
const hooks = require('./persons.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/persons', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('persons');

  service.hooks(hooks);
};
