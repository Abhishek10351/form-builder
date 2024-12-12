import hash from "bcrypt";
import { config } from "dotenv";
config();

const password_hash = async (password: string) => {
    return await hash.hash(
        password,
        parseInt(process.env.PASSWORD_SALT || "10")
    );
};

const compare_password = async (password: string, pass_hash: string) => {
    return await hash.compare(password, pass_hash);
};

export { password_hash, compare_password };
