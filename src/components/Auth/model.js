const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  document: { type: Number, unique: true },
  email: { type: String, default: '', unique: true },
  phone: { type: Number, default: 0 },
  alias: { type: String, default: '' },
  ageExp: { type: Number, default: '' },
  urlFacebook: { type: String, default: '' },
  urlInstagram: { type: String, default: '' },
  password: { type: String, default: '' },
  store: { type: String, default: '' },
  rol: { type: Number, default: 0 }, // 1. admin , 2. tatuador
  isactive: { type: Boolean, default: false }, // false: no activado , true: activado
  state: { type: Boolean }, // false : borrador, true: no borrado
  date_create: { type: String, default: '' },
  date_update: { type: String, default: '' }
});

const OrderWork = Schema({
  id_user: { type: Schema.Types.ObjectId, ref: 'users' },
  orderWork: [
    {
      skup_order: { type: Number, default: 0 },
      nameClient: { type: String, default: '' },
      lastNameClient: { type: String, default: '' },
      address: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: Number, default: 0 },
      type_document: { type: String, default: '' },
      document: { type: Number, default: 0 },
      age: { type: Number, default: 0 },
      numberSession: { type: Number, default: 0 },
      nameTutor: { type: String, default: '' },
      lastNameTutor: { type: String, default: '' },
      phoneTutor: { type: Number, default: 0 },
      priceTatto: { type: Number, default: 0 },
      deposit: { type: Number, default: 0 },
      photoUrlTattoStart: { type: String, default: '' },
      photoUrlTattoFinish: { type: String, default: '' },
      state: { type: Boolean, default: false },
      uploadphoto: { type: Number, default: 0} // 0. no subida , 1. no quiso subirla, 2. subida
    }
  ],
  checkTermns: { type: Boolean, default: false },
  totalTatto: { type: Number, default: 0 },
  date_create: { type: String, default: '' },
  date_update: { type: String, default: '' },
  state: { type: Boolean, default: false }
});

const PortafolioSchema = Schema({
  myPhotoWork: [{ type: String, default: '' }],
  myFavorite: [{ type: String, default: '' }],
  date_create: { type: String, default: '' },
  date_update: { type: String, default: '' }
});

const GuideSchema = Schema({
  nameGuide: { type: String, default: '' },
  descGuide: { type: String, default: '' },
  id_subGuide: { type: Schema.Types.ObjectId, ref: 'subguides' },
  state: { type: Number, default: 1 },
  create_at: { type: String, default: null },
  update_at: { type: String, default: null }
})

const SubGuideSchema = Schema({
  nameSubGuide: { type: String, default: '' },
  descSubGuide: { type: String, default: '' },
  state: { type: Number, default: 1 },
  create_at: { type: String, default: null },
  update_at: { type: String, default: null }
})

const CheckGuideSchema = Schema({
  checkGuide: [
    {
      id_guide: { type: Schema.Types.ObjectId, ref: 'guides' },
      ischeck: { type: Number, default: 0 }, // 0. no check / 1. si check
    },
  ],
  subCheckSub: [
    {
      id_guide: { type: Schema.Types.ObjectId, ref: 'subGuides' },
      ischeck: { type: Number, default: 0 }, // 0. no check / 1. si check
    },
  ],
  create_at: { type: String, default: null },
  update_at: { type: String, default: null }
})
UserSchema.methods.toJSON = function () {
  const userThis = this;
  const userObject = userThis.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};
UserSchema.plugin(uniqueValidator);
var userSchema = mongoose.model('users', UserSchema);
var orderWork = mongoose.model('orderWork', OrderWork);
var portafolioSchema = mongoose.model('portafolio', PortafolioSchema);
var guideSchema = mongoose.model('guides', GuideSchema);
var subGuideSchema = mongoose.model('subGuides', SubGuideSchema);
var checkGuideSchema = mongoose.model('checkGuides', CheckGuideSchema)


module.exports.guideSchema = guideSchema;
module.exports.subGuideSchema = subGuideSchema
module.exports.userSchema = userSchema;
module.exports.orderWork = orderWork;
module.exports.portafolioSchema = portafolioSchema;
module.exports.checkGuideSchema = checkGuideSchema;
