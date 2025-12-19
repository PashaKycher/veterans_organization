import jwt from "jsonwebtoken"

export const generateRefreshToken = (userId) => {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}