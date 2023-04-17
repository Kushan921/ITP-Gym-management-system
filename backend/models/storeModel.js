const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    item_code : {
        type : String,
        required: true
    },
    item_name : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    quantity : {
        type: String,
        required: true
    },
    image : {
        type : String,
        required: true
    }

})

//store table and path
const Store = mongoose.model("store",StoreSchema);
module.exports = Store;