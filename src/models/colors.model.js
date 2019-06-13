// colors-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const colors = new Schema({
    name: { type: String, required: true },
    code: String,
    src: [{ type: Schema.Types.ObjectId, ref: 'images' }],
    descr: String,
    is_active: { type: Boolean, default: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('colors', colors);
};
