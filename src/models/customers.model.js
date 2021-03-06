// customers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const customers = new Schema({
    person: { type: Schema.Types.ObjectId, ref: 'persons' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('customers', customers);
};
