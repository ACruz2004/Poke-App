import { sha3_512 } from "js-sha3";

const hash = sha3_512('meldinIsCoolbean'); //test password

function getHashCode() {
    return hash
}

export default getHashCode;