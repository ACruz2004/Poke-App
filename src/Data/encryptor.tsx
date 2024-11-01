import CryptoJS from "crypto-js";

function Hash(password: string) {
    return CryptoJS.SHA3(password)
}

export default Hash;