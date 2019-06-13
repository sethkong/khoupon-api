// Initializes the `colors` service on path `/colors`
const createService = require('feathers-mongoose');
const createModel = require('../../models/colors.model');
const hooks = require('./colors.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/colors', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('colors');

  service.hooks(hooks);
};
