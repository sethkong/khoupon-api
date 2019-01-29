// persons-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const persons = new Schema({
    first_name: { type: String, required: true },
    middle_name: String,
    last_name: { type: String, required: true },
    prefix: String,
    suffix: String,
    nickname: String,
    date_of_birth: Date,
    photos: [{ type: Schema.Types.ObjectId, ref: 'images' }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('persons', persons);
};
