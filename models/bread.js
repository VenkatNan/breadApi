const mongoose = require('mongoose')
const Schema = mongoose.Schema

const breadSchema = new Schema({
   name: {type: String, required: true},
   tasty: Boolean,
   grainCount: Number,
   mouthfeel: {type: String, default: "Moist"},
},{
    timestamps:true,
}
)

module.exports = mongoose.model("Bread", breadSchema)