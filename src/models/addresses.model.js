// addresses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const addresses = new Schema({
    street_number: String,
    street_name: String,
    pobox: String,
    addr1: String,
    addr2: String,
    county: String,
    more_info: String,
    is_residential: Boolean,
    is_active: { type: Boolean, default: 0 },
    address_type: String,
    city: String,
    state_privince: { type: Schema.Types.ObjectId, ref: 'state_provinces' },
    zip: {
      zip_code: String,
      zip_plus_4: String 
    },
    country: { type: Schema.Types.ObjectId, ref: 'countries' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('addresses', addresses);
};
