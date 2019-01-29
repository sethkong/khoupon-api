const contacts = require('./contacts/contacts.service.js');
const coupons = require('./coupons/coupons.service.js');
const users = require('./users/users.service.js');
const roles = require('./roles/roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contacts);
  app.configure(coupons);
  app.configure(users);
  app.configure(roles);
};
