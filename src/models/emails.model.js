// emails-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const emails = new Schema({
    address: { type: String, required: true },
    is_work: { type: Boolean, default: false },
    is_personal: { type: Boolean, default: false },
    is_school: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    type: String,
    is_primary: { type: Boolean, default: true },
    is_verified: { type: Boolean, default: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('emails', emails);
};
