// companies-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const companies = new Schema({
    name: { type: String, required: true },
    descr: String,
    service_descr: String,
    established_on: Date,
    locations: [{ type: Schema.Types.ObjectId, ref: 'locations' }],
    in_operation: { type: Boolean, default: true },
    logo: [{ type: Schema.Types.ObjectId, ref: 'images' }],
    slogan: String,
    photos: [{ type: Schema.Types.ObjectId, ref: 'images' }],
    type: { type: Schema.Types.ObjectId, ref: 'company_types' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('companies', companies);
};
