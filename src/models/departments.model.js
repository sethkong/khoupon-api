// departments-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const departments = new Schema({
    name: { type: String, required: true },
    descr: String,
    is_active: { type: Boolean, default: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('departments', departments);
};
