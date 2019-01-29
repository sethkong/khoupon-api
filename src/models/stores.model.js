// stores-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const stores = new Schema({
    name: { type: String, required: true },
    descr: String,
    is_active: { type: Boolean, default: true },
    department: { type: Schema.Types.ObjectId, ref: 'departments' },
    websites: [String],
    contacts: [{ type: Schema.Types.ObjectId, ref: 'contacts' }],
    hours: {
      open: Date,
      close: Date
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('stores', stores);
};
