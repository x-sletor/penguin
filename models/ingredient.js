const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const ingredientSchema = new Schema({
    id: Number,
    name: String,
    unit: String,
    
}, { versionKey: false });
// userSchema.id instanceof mongoose.Types.ObjectId;
const IngreModel = mongoose.model('ingredient', IngreSchema);
module.exports = IngreModel;