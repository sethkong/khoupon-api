// images-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const images = new Schema({
    name: String,
    src: { type: String, required: true },
    thumbnail_src: String,
    width: { type: Number, defaut: 0 },
    height: { type: Number, default: 0 },
    mime: String,
    ext: String,
    descr: String,
    is_active: { type: Boolean, is_active: true },
    type: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('images', images);
};
