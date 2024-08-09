const { verify } = require("jsonwebtoken");
// import { verify } from "jsonwebtoken";

const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAutenticated(request, response, next) {
    const AuthHeader = request.headers.authorization;

    if (!AuthHeader) {
        throw new AppError("JWT Token não informado", 401)
    }

    const [, token] = AuthHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);
        
        request.user = {
            id: Number(user_id),
        };

        return next();
    } catch {
        throw new AppError("JWT Token inválido", 401)
        
    }
}

module.exports = ensureAutenticated;