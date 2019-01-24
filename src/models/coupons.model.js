// coupons-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const coupons = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('coupons', coupons);
};
