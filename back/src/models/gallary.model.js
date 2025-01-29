const mongoose = require("mongoose")

const GallarySchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            require: [true, "this feild is require"],
        },
        gallary: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Gallary = mongoose.model("Gallary", GallarySchema)
module.exports = Gallary
