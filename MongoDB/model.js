const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    names: String,
    phone: Number,
    Code: Number,
});

const Usermodel = mongoose.model('Users', userSchema);
module.export = Usermodel
