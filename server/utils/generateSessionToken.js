import jwt from "jsonwebtoken"

export const generateSessionToken = (userId) => {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}