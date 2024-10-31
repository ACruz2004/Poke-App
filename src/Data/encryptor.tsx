import CryptoJS from "crypto-js";

const hash = CryptoJS.SHA3('meldinIsCoolbean'); //test password

function getHashCode() {
    return hash
}

export default getHashCode;