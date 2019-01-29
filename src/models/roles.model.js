// roles-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const roles = new Schema({
    name: { type: String, required: true },
    const: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    descr: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('roles', roles);
};
