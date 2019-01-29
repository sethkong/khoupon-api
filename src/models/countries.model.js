// countries-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const countries = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    is_active: { type: Boolean, defualt: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('countries', countries);
};
