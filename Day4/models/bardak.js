const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BardakSchema = new Schema({
  adi: String,
  fiyat: Number,
  indirimli: Boolean,
});

module.exports = mongoose.model("Bardak", BardakSchema);
