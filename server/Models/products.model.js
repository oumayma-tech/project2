const mongoose = require("mongoose")

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String },
        imageURL: {
            type: String, data: Buffer
        }
    })

)

module.exports = Product