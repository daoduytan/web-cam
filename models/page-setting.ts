import mongoose from 'mongoose';

const PageSettingSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  aboutTitle: {
    type: String,
  },
  aboutTitleSub: {
    type: String,
  },
});

const PageSetting =
  mongoose.models.PageSetting ||
  mongoose.model('PageSetting', PageSettingSchema);

export { PageSetting };
