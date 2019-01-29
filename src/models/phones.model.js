// phones-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const phones = new Schema({
    number: { type: String, required: true },
    is_primary: { type: Boolean, default: false },
    is_cell: { type: Boolean, default: false },
    is_work: { type: Boolean, default: false },
    is_daytime: { type: Boolean, default: false },
    is_evening: { type: Boolean, default: false },
    best_time_to_call: Date,
    is_active: { type: Boolean, default: true },
    type: String,
    is_verified: { type: Boolean, default: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('phones', phones);
};
