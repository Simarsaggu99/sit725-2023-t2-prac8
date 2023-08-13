const { Schema, model } = require("mongoose");

const mobileSchema = new Schema(
    {
        title: { 
            type: String 
        },
        path: {
            type: String,
        },
        link: {
            type: String,
        },
        description: { 
            type: String 
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

const Mobile = model("Mobile", mobileSchema, "Mobile");

module.exports = Mobile;