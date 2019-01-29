// reviews-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const reviews = new Schema({
    comments: { type: Schema.Types.ObjectId, required: true, ref: 'comments' },
    is_active: { type: Boolean, default: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    services: [{ type: Schema.Types.ObjectId, ref: 'services' }],
    is_response: { type: Boolean, default: false },
    reviewed_by: { type: Schema.Types.ObjectId, ref: 'users' },
    ratings: [{ type: Schema.Types.ObjectId, ref: 'ratings' }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('reviews', reviews);
};
