// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// https://mongoosejs.com/docs/populate.html
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new Schema({
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    phone: { type: String },
    is_validated: { type: Boolean, default: false },
    is_locked: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    roles: [{type: Schema.Types.ObjectId, ref: 'roles'}]
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
