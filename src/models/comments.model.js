// comments-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const comments = new Schema({
    title: { type: String, required: true },
    tags: [String],
    comment: { type: String, required: true },
    is_active: { type: Boolean, default: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('comments', comments);
};
