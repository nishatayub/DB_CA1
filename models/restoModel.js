const mongoose = require("mongoose");
const Item = require("./itemModel")

const restoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    itemsArr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }]
});

module.exports = mongoose.model("Resto", restoSchema);
