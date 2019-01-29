// contacts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contacts = new Schema({
    person: { type: Schema.Types.ObjectId, required: true, ref: 'persons' },
    addresses: [{ type: Schema.Types.ObjectId, ref: 'addresses' }],
    phones: [{ type: Schema.Types.ObjectId, ref: 'phones' }],
    emails: [{ type: Schema.Types.ObjectId, ref: 'emails' }],
    is_active: { type: Boolean, default: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('contacts', contacts);
};
