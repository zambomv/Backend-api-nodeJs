const { find } = require("lodash");
const beautyfyunique = require("mongoose-beautiful-unique-validation");
const restful = require("node-restful");
const mongoose = restful.mongoose;

const registerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mail: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String, required: true },
  number: { type: String, required: false },
  complement: { type: String, required: false },
});

registerSchema.plugin(beautyfyunique);

module.exports = restful.model("register", registerSchema);
