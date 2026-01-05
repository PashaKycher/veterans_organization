import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    password: { type: String, required: true },

    user_name: { type: String, unique: true },
    bio: { type: String, default: "Бажаю здоров'я." },
    mobile: { type: String, default: null },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    locstion: { type: String, default: "" },

    avatar: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    
    followers: [{ type: String, ref: 'User' }],
    following: [{ type: String, ref: 'User' }],
    connection: [{ type: String, ref: 'User' }],

    status: { type: String, enum: ["active", "inactive", "suspended"], default: "active" },
    role: { type: String, enum: ["user", "owner"], default: "user" },
    roleOwner:{ type: String, enum: ["reporter", "editor", "admin", "moderator", "user"], default: "user" },

    analiticals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Analytical" }],
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    news: [{ type: mongoose.Schema.Types.ObjectId, ref: "News" }],

    refresh_token: { type: String, default: "" },

    email_verify_token: { type: String, default: null },
    email_verify_expiry: { type: Date, default: null },
    verify_email: { type: Boolean, default: false },
    
    forgot_password_otp: { type: String, default: null },
    forgot_password_expiry: { type: Date, default: "" },
    
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;