// products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  require('mongoose-currency').loadType(mongooseClient);
  const { Schema } = mongooseClient;
  const Currency = mongooseClient.Types.Currency;

  const products = new Schema({
    name: { type: String, required: true },
    descr: String,
    price: {
      listed: { type: Currency, required: true },
      discounted: { type: Currency, required: true }
    },
    images: [{ type: Schema.Types.ObjectId, ref: 'product_images' }],
    colors: [{ type: Schema.Types.ObjectId, ref: 'product_colors' }],
    is_active: { type: Boolean, default: true },
    dimensions: {
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
      depth: { type: Number, default: 0 },
      unit: String
    },
    weight: {
      amount: { type: Number, default: 0 },
      unit: String
    },
    categories: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
    sub_categories: [{ type: Schema.Types.ObjectId, ref: 'sub_categories' }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('products', products);
};
