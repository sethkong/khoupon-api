// state_provinces-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const stateProvinces = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    country: { type: Schema.Types.ObjectId, ref: 'countries' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('state_provinces', stateProvinces);
};
