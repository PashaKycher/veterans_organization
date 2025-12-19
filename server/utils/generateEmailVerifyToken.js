import crypto from "crypto";

export const generateEmailVerifyToken = () => {

    const emailToken = crypto.randomBytes(32).toString("hex");
    const hashedEmailToken = crypto.createHash("sha256").update(emailToken).digest("hex");

        
    return { emailToken, hashedEmailToken };
};
