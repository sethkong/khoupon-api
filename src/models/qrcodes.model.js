// qrcodes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const qrcodes = new Schema({
    src: String,
    data: String,
    content: Buffer,
    is_scanned: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    image: { type: Schema.Types.ObjectId, ref: 'images' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('qrcodes', qrcodes);
};
