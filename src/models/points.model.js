// points-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const points = new Schema({
    value: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
    type: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('points', points);
};
