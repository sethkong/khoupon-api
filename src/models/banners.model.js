// banners-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const banners = new Schema({
    name: { type: String, required: true },
    image: { type: Schema.Types.ObjectId, ref: 'images' },
    descr: String,
    is_active: { type: Boolean, default: true },
    num_of_clicks: { type: Number, default: 0 },
    expired_at: Date,
    num_of_views: { type: Number, default: 0 }
  }, {
    timestamps: true
  });

  return mongooseClient.model('banners', banners);
};
