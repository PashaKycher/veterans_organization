import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

    pincode: { type: String, default: "" },
    country: { type: String, default: "" },
    state: { type: String, default: "" },
    city: { type: String, default: "" },
    street: { type: String, default: "" },
    bilding: { type: String, default: "" },
    apartment: { type: String, default: "" },
    mobile: { type: String, default: null },

    address_line: { type: String, default: "" },

    status: { type: Boolean, default: true }
}, { timestamps: true });

const Address = mongoose.model("Address", addressSchema);

export default Address;