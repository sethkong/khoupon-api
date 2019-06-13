// services-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const services = new Schema({
    name: { type: String, required: true },
    descr: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
    sub_categories: [{ type: Schema.Types.ObjectId, ref: 'sub_categories' }],
    images: [{ type: Schema.Types.ObjectId, ref: 'images' }],
    is_active: { type: Boolean, default: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('services', services);
};
