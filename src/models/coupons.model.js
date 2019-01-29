// coupons-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  require('mongoose-currency').loadType(mongooseClient);
  const { Schema } = mongooseClient;
  const Currency = mongooseClient.Types.Currency;
  
  const coupons = new Schema({
    name: { type: String, required: true },
    expire_at: {type: Date, required: true },
    discount: {
      amount: Currency,
      percent: Number
    },
    descr: String,
    is_active: { type: Boolean, default: true },
    qrcodes: [{ type: Schema.Types.ObjectId, ref: 'qrcodes' }],
    is_redeemable: { type: Boolean, default: true },
    redeemed_count: {type: Number, default: 0 },
    redeemed_by_users: [{ type: Schema.Types.ObjectId, ref: 'customers' }],
    redeemed_dates: [ Date ],
    is_expired: { type: Boolean, default: true },
    banners: [{ type: Schema.Types.ObjectId, ref: 'banners' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    services: [{ type: Schema.Types.ObjectId, ref: 'services' }],
    type: { type: Schema.Types.ObjectId, ref: 'coupon_types' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('coupons', coupons);
};
